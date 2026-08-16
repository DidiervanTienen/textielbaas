import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/31686662826"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat met Textielbaas op WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
