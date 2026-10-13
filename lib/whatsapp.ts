import { CONTACT, type Product } from "@/lib/constants";

/** wa.me link that opens a chat asking for the payment link for a product. */
export function purchaseWhatsappUrl(product: Product, name?: string): string {
  const intro = name ? `Hello, this is ${name}.` : "Hello,";
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
    `${intro} I would like to purchase the ${product.name} ($${product.price.toLocaleString()}). Please send me the payment link.`
  )}`;
}
