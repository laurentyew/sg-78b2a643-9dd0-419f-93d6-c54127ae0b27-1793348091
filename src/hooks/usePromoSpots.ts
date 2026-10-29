import { useEffect, useState } from "react";
import { getWaitlistCount, WAITLIST_CAP } from "@/services/waitlistService";

export interface PromoSpots {
  remaining: number | null;
  loading: boolean;
  available: boolean;
}

export function usePromoSpots(): PromoSpots {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let active = true;

    getWaitlistCount()
      .then((count) => {
        if (!active) return;
        setRemaining(Math.max(0, WAITLIST_CAP - count));
        setAvailable(true);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setRemaining(null);
        setAvailable(false);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { remaining, loading, available };
}