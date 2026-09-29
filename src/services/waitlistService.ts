import { supabase } from "@/integrations/supabase/client";

export const WAITLIST_CAP = 50;

export interface WaitlistResult {
  status: "joined" | "duplicate";
  position: number;
  remaining: number;
}

export async function getWaitlistCount(): Promise<number> {
  const { data, error } = await supabase.rpc("waitlist_count");

  if (error) {
    throw new Error(error.message);
  }

  return Number(data ?? 0);
}

export async function joinWaitlist(
  name: string,
  email: string,
  socialHandle: string
): Promise<WaitlistResult> {
  const { data, error } = await supabase.rpc("join_waitlist", {
    p_name: name.trim(),
    p_email: email.trim().toLowerCase(),
    p_handle: socialHandle.trim().replace(/^@+/, ""),
  });

  if (error) {
    throw new Error(error.message);
  }

  const payload = (data ?? {}) as Partial<WaitlistResult>;

  return {
    status: payload.status === "duplicate" ? "duplicate" : "joined",
    position: Number(payload.position ?? 0),
    remaining: Number(payload.remaining ?? WAITLIST_CAP),
  };
}