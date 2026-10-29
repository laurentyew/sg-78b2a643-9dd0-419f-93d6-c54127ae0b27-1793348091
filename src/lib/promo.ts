import { WAITLIST_CAP } from "@/services/waitlistService";

export const PROMO = {
  code: "FIRST50",
  cap: WAITLIST_CAP,
  discountPercent: 50,
  label: "Launch offer",
} as const;

export interface PromoTier {
  monthly: number;
  discountedMonthly: number;
  annual: number;
  discountedAnnual: number;
}

export function discountedPrice(amount: number): number {
  const discounted = amount * (1 - PROMO.discountPercent / 100);
  return Math.round(discounted * 100) / 100;
}

export function formatUsd(amount: number): string {
  const hasCents = Math.round(amount * 100) % 100 !== 0;
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  })}`;
}

export function promoPricing(monthly: number, annual: number): PromoTier {
  return {
    monthly,
    discountedMonthly: discountedPrice(monthly),
    annual,
    discountedAnnual: discountedPrice(annual),
  };
}

export function spotsLabel(remaining: number | null): string {
  if (remaining === null) {
    return `Limited to the first ${PROMO.cap} brands`;
  }

  if (remaining <= 0) {
    return `All ${PROMO.cap} launch spots claimed`;
  }

  return `${remaining} of ${PROMO.cap} launch spots left`;
}