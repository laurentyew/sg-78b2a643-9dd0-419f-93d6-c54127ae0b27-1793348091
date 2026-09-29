const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "throwawaymail.com",
  "yopmail.com",
  "trashmail.com",
  "sharklasers.com",
  "getnada.com",
  "dispostable.com",
  "fakeinbox.com",
]);

export function isDisposableEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at === -1) return true;
  const domain = email.slice(at + 1).trim().toLowerCase();
  if (!domain.includes(".")) return true;
  return DISPOSABLE_DOMAINS.has(domain);
}

const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

export function generateReferralCode(): string {
  let code = "";
  for (let index = 0; index < 8; index += 1) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

export function generateToken(): string {
  const bytes = new Uint8Array(24);
  if (typeof globalThis.crypto?.getRandomValues === "function") {
    globalThis.crypto.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

interface ConfirmationArgs {
  email: string;
  firstName?: string | null;
  confirmUrl: string;
}

export async function sendConfirmationEmail({
  email,
  firstName,
  confirmUrl,
}: ConfirmationArgs): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    console.warn(
      "[quiz] RESEND_API_KEY or EMAIL_FROM missing - confirmation email skipped.",
    );
    return false;
  }

  const greeting = firstName ? "Hi " + firstName + "," : "Hi,";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: "Confirm your Social Kirin quiz breakdown",
        html:
          "<p>" +
          greeting +
          "</p><p>Confirm your email to unlock your comment moderation breakdown and start moving up the Social Kirin waitlist.</p><p><a href=\"" +
          confirmUrl +
          "\">Confirm my email</a></p><p>If you did not request this, you can ignore this message.</p>",
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}