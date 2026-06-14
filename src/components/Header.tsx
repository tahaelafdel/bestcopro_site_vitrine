import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const siteLogo = new URL("../../logo/best_copro_logo_optimized.png", import.meta.url).href;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    setIsOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md text-[#002046] fixed top-0 w-full z-50 border-b border-[#E2E8F0] shadow-sm transition-all duration-300">
      <div className="relative flex items-center justify-between h-20 px-6 max-w-7xl mx-auto">
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-3 cursor-pointer select-none"
          id="brand-logo-container"
          aria-label="Retour a l'accueil"
        >
          <img
            src={siteLogo}
            alt="Best Copro"
            className="block h-14 w-auto max-w-[210px] object-contain"
            width={380}
            height={93}
          />
        </button>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          <button
            type="button"
            onClick={scrollToTop}
            className="font-sans text-sm font-semibold py-2 transition-colors duration-200 cursor-pointer text-[#bb0027] border-b-2 border-[#bb0027]"
          >
            Accueil
          </button>
          <a
            href="#app-teaser"
            className="font-sans text-sm font-semibold text-gray-700 hover:text-[#002046] py-2 transition-colors cursor-pointer"
          >
            Application Mobile
          </a>
        </div>

        <button
          type="button"
          onClick={scrollToContact}
          className="hidden md:inline-flex justify-self-end cursor-pointer bg-[#bb0027] hover:bg-[#A50D26] text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          id="cta-contact-btn"
        >
          Nous Contacter
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#002046] hover:bg-gray-100 rounded-lg cursor-pointer"
          id="tab-mobile-toggle"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 animate-fadeIn shadow-inner">
          <button
            type="button"
            onClick={scrollToTop}
            className="w-full text-left font-sans text-base font-semibold py-2 px-3 rounded-lg bg-red-50 text-[#bb0027]"
          >
            Accueil
          </button>
          <a
            href="#app-teaser"
            onClick={() => setIsOpen(false)}
            className="block font-sans text-base font-semibold text-gray-700 hover:bg-gray-50 py-2 px-3 rounded-lg"
          >
            Application Mobile
          </a>
          <button
            type="button"
            onClick={scrollToContact}
            className="w-full bg-[#bb0027] text-white text-sm font-bold px-4 py-3 rounded-lg hover:bg-[#A50D26] transition-all text-center"
          >
            Nous Contacter
          </button>
        </div>
      )}
    </nav>
  );
}
