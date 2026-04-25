"use client";

import { useMagnetic } from "@/hooks/useMagnetic";
import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";

/** Attaches the page-wide client behaviors once the DOM is ready. */
export function ClientEffects() {
  useReveal();
  useTilt();
  useMagnetic();
  return null;
}
