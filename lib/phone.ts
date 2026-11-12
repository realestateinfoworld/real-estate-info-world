import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js/min";
import type { MarketKey } from "@/lib/constants";

export type { CountryCode };

/** Country to fall back on when the visitor's can't be detected. */
export const MARKET_COUNTRY: Record<MarketKey, CountryCode> = {
  dubai: "AE",
  miami: "US",
  california: "US",
  uk: "GB",
};

export function isCountryCode(value: unknown): value is CountryCode {
  return typeof value === "string" && (getCountries() as string[]).includes(value);
}

/** "AE" → 🇦🇪, from the two regional-indicator letters. */
export function flag(country: CountryCode): string {
  return String.fromCodePoint(...[...country].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

export function dialCode(country: CountryCode): string {
  return `+${getCountryCallingCode(country)}`;
}

/** Every country with its name and dial code, sorted by name, for a picker. */
export function countryOptions(): { code: CountryCode; label: string }[] {
  const names = new Intl.DisplayNames(["en"], { type: "region" });
  return getCountries()
    .map((code) => ({ code, label: `${names.of(code) ?? code} (${dialCode(code)})` }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

/**
 * The number in international form ("+971501234567"), or null if it can't be
 * a phone number in that country. A national number is read in the selected
 * country, leading 0 included ("050 123 4567" in AE); one typed or pasted
 * with + or 00 keeps its own country code.
 */
export function toInternational(input: string, country: CountryCode): string | null {
  const trimmed = input.trim().replace(/^00/, "+");
  const parsed = parsePhoneNumberFromString(trimmed, country);
  return parsed?.isPossible() ? parsed.number : null;
}

/** Whether an international number ("+971…") has a possible length for its country. */
export function isPossibleInternational(value: string): boolean {
  return parsePhoneNumberFromString(value)?.isPossible() ?? false;
}

/** "+971501234567" → "+971 50 123 4567", for showing back to the visitor. */
export function formatInternational(value: string): string {
  return parsePhoneNumberFromString(value)?.formatInternational() ?? value;
}
