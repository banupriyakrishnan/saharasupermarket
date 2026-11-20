import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi Sahara Super Market! I'd like to place an order / enquire about ")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-xl shadow-palm-900/30 transition hover:scale-105"
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
