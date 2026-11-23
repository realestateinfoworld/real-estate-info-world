import { CONTACT, type Product } from "@/lib/constants";

/** wa.me link that opens a chat asking for the payment link for a product. */
export function purchaseWhatsappUrl(product: Product, name?: string): string {
  const intro = name ? `Hello, this is ${name}.` : "Hello,";
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
    `${intro} I would like to purchase the ${product.name} ($${product.price.toLocaleString()}). Please send me the payment link.`
  )}`;
}

/**
 * wa.me link from the team to a visitor's own number, with the sample message
 * ready to send. "+971 50-123 4567" and "00971501234567" both become
 * 971501234567; wa.me needs the number in international form, digits only.
 */
export function chatWithVisitorUrl(number: string, product: Product): string {
  const digits = number.replace(/\D/g, "").replace(/^00/, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(
    `Hello, this is Real Estate Info World. Thanks for requesting a free sample of the ${product.name}. Here it is:`
  )}`;
}

/** wa.me link that opens a chat asking for the free sample of a product. */
export function sampleWhatsappUrl(product: Product): string {
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
    `Hello, I requested a free sample of the ${product.name}. Please send it here.`
  )}`;
}
