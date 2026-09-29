export const WAITLIST_POPUP_KEY = "social-kirin:waitlist-popup-seen";

export function hasSeenWaitlistPopup(): boolean {
  if (typeof window === "undefined") return true;

  try {
    return window.sessionStorage.getItem(WAITLIST_POPUP_KEY) === "1";
  } catch {
    return true;
  }
}

export function markWaitlistSeen(): void {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(WAITLIST_POPUP_KEY, "1");
  } catch {
    // Storage can be blocked; the visitor may see the popup again next load.
  }
}