"use client";

import { useCountUp } from "@/hooks/useCountUp";

type Props = { end: number; duration?: number };

export function Counter({ end, duration }: Props) {
  const { ref, value } = useCountUp(end, duration);
  return <span ref={ref}>{value}</span>;
}
