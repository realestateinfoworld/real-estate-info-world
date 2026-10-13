import { Fragment } from "react";
import Link from "next/link";

const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

/** Renders plain copy with internal links written as [text](/path). */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={match.index} href={href}>
        {label}
      </Link>
    );
    last = match.index + whole.length;
  }
  parts.push(text.slice(last));
  return <Fragment>{parts}</Fragment>;
}
