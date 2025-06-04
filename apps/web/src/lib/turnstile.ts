"use server";

import "server-only";

import { env } from "@/env";

interface CloudflareTurnstileResponse {
  success: boolean;
  "error-codes": string[];
  challenge_ts: string;
  hostname: string;
}

export async function validateTurnstileToken(token: string) {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=your-secret-key-here&response=${encodeURIComponent(token)}`,
  });

  const data = await response.json();
  if (!data.success) {
    throw new Error("Verification failed");
  }
  return data;
}
