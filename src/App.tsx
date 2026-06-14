import React, { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { ContactSubmission } from "./types";

const siteLogo = new URL("../logo/best_copro_logo_optimized.png", import.meta.url).href;
const appleStoreBadge = new URL("../assets/images/download-apple-store.svg", import.meta.url).href;
const googleStoreBadge = new URL("../assets/images/download-google-store.svg", import.meta.url).href;
const appStoreUrl = "https://apps.apple.com/ci/app/bestcopro-mobile-app/id6446234444";

export default function App() {
  const [submissionsCount, setSubmissionsCount] = useState<number>(0);
  useScrollReveal();

  useEffect(() => {
    const saved = localStorage.getItem("bestcopro_submissions_count");
    if (saved) {
      setSubmissionsCount(parseInt(saved, 10));
    }
  }, []);

  const handleContactSubmit = (submissionData: Omit<ContactSubmission, "id" | "submittedAt">) => {
    const newCount = submissionsCount + 1;
    setSubmissionsCount(newCount);
    localStorage.setItem("bestcopro_submissions_count", newCount.toString());

    const currentSubmissions = JSON.parse(localStorage.getItem("bestcopro_contacts") || "[]");
    const newSubmission: ContactSubmission = {
      ...submissionData,
      id: "contact-" + Date.now(),
      submittedAt: new Date().toISOString(),
    };
    localStorage.setItem("bestcopro_contacts", JSON.stringify([...currentSubmissions, newSubmission]));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9ff] text-[#091d2e] selection:bg-[#aec7f7]">
      <Header />

      <main className="flex-grow">
        <LandingPage
          onContactSubmit={handleContactSubmit}
        />
      </main>

      <footer className="bg-[#002046] text-white pt-16 pb-8 border-t border-[#1b365d]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="col-span-1 md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={siteLogo}
                alt="Best Copro"
                className="block h-12 w-auto max-w-[180px] object-contain brightness-0 invert"
                width={380}
                height={93}
                loading="lazy"
              />
            </div>

            <div className="max-w-sm">
              <h3 className="font-display text-xl font-bold text-white mb-3">Une question ? Un conseil ?</h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Nos experts sont à votre écoute pour simplifier la gestion de votre syndic. Contactez notre siège de Salé, disponible du lundi au samedi, pour un accompagnement sur mesure.
              </p>
            </div>

            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#aec7f7] shrink-0" />
                <span>Avenue Moulay Rachid N°468 2ème étage Hay Al Amal, Salé, Maroc</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#aec7f7] shrink-0" />
                <span>+212 66 03 010 51 / +212 66 36 376 20</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#aec7f7] shrink-0" />
                <a href="mailto:contact@bestcopro.ma" className="hover:text-white transition-colors">
                  contact@bestcopro.ma
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-[#aec7f7] uppercase tracking-wider">Liens Utiles</h4>
            <ul className="space-y-2 text-xs scroll-smooth">
              <li>
                <a href="/" className="text-gray-400 hover:text-white hover:translate-x-1.5 transition-all inline-block">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#app-teaser" className="text-gray-400 hover:text-white hover:translate-x-1.5 transition-all inline-block">
                  Application Mobile
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-[#aec7f7] uppercase tracking-wider">Télécharger l'App</h4>
            <div className="flex flex-col items-start gap-3">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Télécharger dans l'App Store"
              >
                <img
                  src={appleStoreBadge}
                  alt="Télécharger dans l'App Store"
                  className="h-11 w-auto"
                  width={150}
                  height={45}
                  loading="lazy"
                />
              </a>
              <button
                type="button"
                className="transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Disponible sur Google Play"
              >
                <img
                  src={googleStoreBadge}
                  alt="Disponible sur Google Play"
                  className="h-11 w-auto"
                  width={150}
                  height={45}
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>{new Date().getFullYear()} BEST COPRO Tous droits réservés</p>
          <a href="/" className="hover:text-gray-300 transition-colors">
            Développé par Arc Consulting Morocco
          </a>
        </div>
      </footer>
    </div>
  );
}
