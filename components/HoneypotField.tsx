import { HONEYPOT_FIELD } from "@/lib/honeypot";

/**
 * A text field moved off screen and hidden from assistive tech. People never
 * see or reach it; form-filling bots usually fill every input they find.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor={`hp-${HONEYPOT_FIELD}`}>Leave this field empty</label>
      <input id={`hp-${HONEYPOT_FIELD}`} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
