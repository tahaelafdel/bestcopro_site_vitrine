import React, { useState } from "react";
import { motion } from "motion/react";
import PartnersBar from "./PartnersBar";
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  Wrench, 
  Smartphone, 
  CheckCircle, 
  Share2, 
  Instagram, 
  Globe, 
  Star
} from "lucide-react";
import { RESIDENCES_DATA, TESTIMONIALS_DATA } from "../data";
import { ContactSubmission } from "../types";

const syndicHeroImage = new URL("../../assets/images/image_syndic_hero.webp", import.meta.url).href;
const appleStoreBadge = new URL("../../assets/images/download-apple-store.svg", import.meta.url).href;
const googleStoreBadge = new URL("../../assets/images/download-google-store.svg", import.meta.url).href;

const revealViewport = { once: true, margin: "-100px" };
const smoothEase = [0.16, 1, 0.3, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: smoothEase },
  },
};

interface LandingPageProps {
  onContactSubmit: (submission: Omit<ContactSubmission, "id" | "submittedAt">) => void;
}

export default function LandingPage({ onContactSubmit }: LandingPageProps) {
  // Accordion for residences
  const [activeResidence, setActiveResidence] = useState<string>("andalucia");
  
  // Local state for the contact form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    onContactSubmit({
      fullName,
      email,
      phone,
      message: message || "Demande d'information/contact depuis la landing page."
    });

    setLastSubmission({ fullName, email, phone });
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 8000);
  };

  return (
    <div className="bg-[#f7f9ff] text-[#091d2e] font-sans antialiased">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden min-h-[580px] md:min-h-[660px] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Immeuble moderne à Rabat" 
            className="w-full h-full object-cover opacity-25 scale-105 transition-transform duration-10000 ease-out" 
            width={1600}
            height={900}
            fetchPriority="high"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFua32oylC4XHlsFr4yN70_-__U4mG-vqSq94CdxH8hR0iYHOr-6mJJSi3mdziPeNL0MPufcwDMSIqRaBuMfDsdKH0nDeXgqwShtu_x6ctrc5pO_VlLkICc-OpVyB-cJRNDkSXE0zTy66bxjtC10wOyxE2UI_cEJZnADgS2DQI7G30lWPWk-KTTOPdtXs1I8zHtGa8RkQDfuwcY2pMpLtfWXiGpitNH7OtwmgnLN8ZWlQTWxUqcPCMwLyBo9Oy9yaEo4ktvKcBz64"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f9ff]/90 via-transparent to-[#f7f9ff]/90"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e3efff_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: smoothEase }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#002046] font-extrabold mb-6 leading-tight tracking-tight">
              Gérez votre copropriété en toute <span className="text-[#bb0027] inline-block relative font-black">simplicité</span>
            </h1>
            <p className="font-sans text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Confiez la gestion de votre résidence à un syndic professionnel, transparent et 100% connecté.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-[#bb0027] hover:bg-[#A50D26] text-white text-base font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center gap-3 group"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#app-teaser" 
                className="w-full sm:w-auto border-2 border-[#002046] text-[#002046] hover:bg-[#002046] hover:text-white text-base font-bold px-8 py-3.5 rounded-lg transition-all duration-300 text-center"
              >
                Découvrir l'application Mobile
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Us / Digitalisation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.65, ease: smoothEase }}
            >
              <span className="text-[#bb0027] font-bold text-xs uppercase tracking-widest inline-block mb-3">QUI SOMMES-NOUS ?</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#002046] font-black tracking-tight mb-6">
                <span className="text-[#bb0027]">BestCOPRO</span> : Le syndic nouvelle génération qui redéfinit la copropriété au Maroc
              </h2>
              <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                BestCOPRO, c’est avant tout une équipe de professionnels passionnés, expérimentés et ambitieux. Nous unissons nos forces pour moderniser la gestion de vos résidences et nous adapter chaque jour aux standards d'aujourd'hui et de demain.
              </p>
              <p className="font-sans text-gray-600 leading-relaxed">
                Notre objectif est simple : vous offrir un service transparent, réactif et un accompagnement de tous les instants pour valoriser votre patrimoine en toute sérénité.
              </p>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 lg:aspect-square"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.65, ease: smoothEase }}
            >
              <img
                alt="Équipe BestCOPRO devant une résidence avec application mobile"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                width={1024}
                height={1024}
                loading="lazy"
                src={syndicHeroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002046]/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Value Proposition (Our Expertise) */}
      <section id="expertise" className="py-20 bg-[#F1F4F8] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.55, ease: smoothEase }}
          >
            <span className="text-[#bb0027] font-bold text-xs uppercase tracking-widest inline-block mb-3">CONTRATS & SERVICES</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#002046] font-bold tracking-tight mb-4">Notre Expertise</h2>
            <p className="font-sans text-gray-500 text-base md:text-lg">Une gestion complète, transparente et sécurisée pour votre tranquillité.</p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div variants={staggerItem} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#aec7f7] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edf4ff] flex items-center justify-center text-[#002046] group-hover:bg-[#002046] group-hover:text-white transition-colors mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-[#002046] font-bold mb-3">Gestion administrative</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  Organisation et tenue des assemblées générales rigoureuses, rédaction professionnelle et envoi immédiat des procès-verbaux, tenue du registre.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-[#bb0027] font-semibold text-xs uppercase tracking-wider">
                Excellence Administrative
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={staggerItem} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#aec7f7] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edf4ff] flex items-center justify-center text-[#002046] group-hover:bg-[#002046] group-hover:text-white transition-colors mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-[#002046] font-bold mb-3">Gestion comptable</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  Établissement du budget prévisionnel annuel, tenue de la comptabilité générale en partie double, relance et recouvrement amiable des charges.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-[#bb0027] font-semibold text-xs uppercase tracking-wider">
                Réf. Comptable Maroc
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={staggerItem} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#aec7f7] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edf4ff] flex items-center justify-center text-[#002046] group-hover:bg-[#002046] group-hover:text-white transition-colors mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-[#002046] font-bold mb-3">Gestion technique</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  Négociation des contrats d'entretien, suivi régulier des équipes de nettoyage et sécurité, visites planifiées, mise en œuvre du plan de travaux.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-[#bb0027] font-semibold text-xs uppercase tracking-wider">
                Suivi chantiers
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={staggerItem} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#aec7f7] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#edf4ff] flex items-center justify-center text-[#002046] group-hover:bg-[#002046] group-hover:text-white transition-colors mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-[#002046] font-bold mb-3">Transparence Digitale</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  Application mobile et espace web privatifs dédiés au suivi live. Accusés de paiement, comptes de la copropriété et dépôts de réclamations.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#edf4ff] flex items-center text-[#bb0027] font-semibold text-xs uppercase tracking-wider">
                Web & Mobile Intégrés
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Residences Showcase (Updated with custom dynamic Accordion) */}
      <section id="references" className="py-20 bg-[#f0f4f9] overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-6 mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <span className="text-[#bb0027] font-bold text-xs uppercase tracking-widest inline-block mb-3">NOS RÉFÉRENCES</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#002046] font-bold tracking-tight mb-4">Résidences de Prestige</h2>
          <p className="font-sans text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Découvrez quelques-unes des copropriétés résidentielles marocaines de haut standing qui font confiance à Bestcopro.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row w-full min-h-[460px] lg:min-h-[520px] rounded-2xl overflow-hidden shadow-xl border border-white bg-[#002046]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={revealViewport}
            transition={{ duration: 0.65, ease: smoothEase }}
          >
            {RESIDENCES_DATA.map((residence) => {
              const isActive = activeResidence === residence.id;
              
              return (
                <div 
                  key={residence.id}
                  onMouseEnter={() => {
                    // Desktop hover
                    if (window.innerWidth >= 1024) setActiveResidence(residence.id);
                  }}
                  onClick={() => {
                    // Mobile & general click fallback
                    setActiveResidence(residence.id);
                  }}
                  className={`relative cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 transition-all duration-700 ease-in-out ${
                    isActive ? "flex-[5] lg:flex-[5] min-h-[220px]" : "flex-[1] lg:flex-[1] min-h-[70px] lg:min-h-0"
                  }`}
                >
                  {/* Background Image */}
                  <img 
                    alt={residence.name} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      isActive ? "scale-105 opacity-90" : "scale-100 opacity-40 hover:opacity-60"
                    }`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    src={residence.imageUrl}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t ${
                    isActive 
                      ? "from-[#002046]/95 via-[#002046]/40 to-transparent" 
                      : "from-[#002046]/80 to-[#002046]/40"
                  }`}></div>

                  {/* Vertical Name (Hidden when active on Desktop) */}
                  <div className={`hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-270 white-space-nowrap font-display font-extrabold text-base tracking-widest text-[#d1e4fb] uppercase transition-all duration-500 pointer-events-none select-none uppercase-letter-spacing-all ${
                    isActive ? "opacity-0 scale-90 translate-y-10" : "opacity-100 scale-100"
                  }`}>
                    {residence.name}
                  </div>

                  {/* Mobile Simple Label (Hidden when active) */}
                  <div className={`lg:hidden absolute inset-0 flex items-center justify-between px-6 transition-all duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}>
                    <span className="font-display font-bold text-white text-base">{residence.name}</span>
                    <span className="text-xs text-[#aec7f7] font-semibold">{residence.location}</span>
                  </div>

                  {/* Content (Visible only when Active) */}
                  <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                  }`}>
                    <div className="max-w-xl">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#bb0027] text-white font-sans font-bold text-xs tracking-wider uppercase mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {residence.location}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                        {residence.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Partners Bar */}
      <PartnersBar />

      {/* 5. Mobile App Teaser */}
      <section id="app-teaser" className="py-20 bg-gradient-to-br from-[#002046] via-[#11223D] to-[#1b365d] text-white overflow-hidden relative">
        {/* Dynamic shape effects */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#bb0027]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Phone side-by-side */}
            <motion.div
              className="lg:col-span-5 flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.7, ease: smoothEase }}
            >
              <div className="relative w-full max-w-[340px] aspect-9/19 bg-black rounded-[48px] p-3 shadow-2xl border-4 border-gray-800 ring-12 ring-gray-900/10">
                {/* Speaker pill */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-45 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Internal Screen mockup */}
                <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#f7f9ff] text-black shrink-0 relative flex flex-col justify-between">
                  {/* Top phone header */}
                  <div className="pt-8 px-4 pb-3 bg-[#002046] text-white flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-sans text-gray-400">Bonjour</div>
                      <div className="text-xs font-bold font-display">M. Mohammed 👋</div>
                    </div>
                    <div className="bg-[#bb0027] text-[9px] px-2 py-0.5 rounded-full font-bold">
                      Appt N°14
                    </div>
                  </div>
                  
                  {/* Stats card */}
                  <div className="p-3 grow flex flex-col gap-3 justify-start overflow-y-auto hide-scrollbar">
                    <div className="bg-white p-3 rounded-xl shadow-xs border border-gray-100 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] text-gray-500 uppercase font-semibold">Charges d'immeuble</span>
                        <div className="text-sm font-black text-[#002046]">1 883,75 MAD</div>
                      </div>
                      <span className="text-[10px] font-bold text-[#bb0027] px-2 py-0.5 rounded bg-red-50">En attente</span>
                    </div>

                    <div className="space-y-2 mt-1">
                      <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Vos raccourcis</span>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-[#e3efff] rounded-lg text-center aspect-square flex flex-col justify-center items-center cursor-pointer">
                          <DollarSign className="w-4 h-4 text-[#002046] mb-1" />
                          <span className="text-[8px] font-bold text-[#002046]">Payer Solde</span>
                        </div>
                        <div className="p-2 bg-red-50 rounded-lg text-center aspect-square flex flex-col justify-center items-center cursor-pointer">
                          <Wrench className="w-4 h-4 text-[#bb0027] mb-1" />
                          <span className="text-[8px] font-bold text-[#bb0027]">Réclamation</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline mockup */}
                    <div className="space-y-1.5 mt-1 text-left">
                      <span className="text-[9px] text-gray-400 uppercase font-bold">Suivi des travaux</span>
                      <div className="p-2 bg-white rounded-lg border border-gray-100 text-[10px]">
                        <div className="font-bold text-xs text-gray-800">Peinture couloirs</div>
                        <div className="text-gray-500 text-[9px]">Commencé le 04 Juin • 40%</div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Footer mockup */}
                  <div className="border-t border-gray-100 bg-white p-2.5 flex justify-around text-gray-400 text-[10px]">
                    <span className="text-[#002046] font-bold">Accueil</span>
                    <span>Suivi</span>
                    <span>Votes</span>
                    <span>Moi</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description side */}
            <motion.div
              className="lg:col-span-7 lg:pl-8 order-1 lg:order-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.6, ease: smoothEase }}
            >
              <span className="text-[#bb0027] bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4">
                APPLICATION MOBILE
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                BESTCOPRO Mobile Application
              </h2>
              <p className="font-sans text-base md:text-lg text-[#87a0cd] mb-8 leading-relaxed">
                Votre copropriété dans votre poche. Une application simple et intuitive conçue pour vous permettre de piloter votre quotidien, de communiquer avec votre syndic et de tout gérer en un clic.
              </p>
              
              <motion.div
                className="space-y-4 mb-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <motion.div variants={staggerItem} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#bb0027] flex items-center justify-center font-bold text-sm">1</div>
                  <span className="font-sans text-sm sm:text-base text-gray-200">Réglez votre situation en un clic</span>
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#bb0027] flex items-center justify-center font-bold text-sm">2</div>
                  <span className="font-sans text-sm sm:text-base text-gray-200">Accédez à tous vos documents en temps réel</span>
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#bb0027] flex items-center justify-center font-bold text-sm">3</div>
                  <span className="font-sans text-sm sm:text-base text-gray-200">Suivez l'évolution des travaux</span>
                </motion.div>
              </motion.div>

              {/* Download buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#"
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Télécharger sur l'App Store"
                >
                  <img
                    src={appleStoreBadge}
                    alt="Télécharger dans l'App Store"
                    className="h-12 w-auto"
                    width={150}
                    height={45}
                    loading="lazy"
                  />
                </a>
                <a 
                  href="#"
                  className="transition-transform duration-300 hover:-translate-y-0.5"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Disponible sur Google Play"
                >
                  <img
                    src={googleStoreBadge}
                    alt="Disponible sur Google Play"
                    className="h-12 w-auto"
                    width={150}
                    height={45}
                    loading="lazy"
                  />
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 6. Dynamic Testimonials (Loop / Manual) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center">
            <span className="text-[#bb0027] font-bold text-xs uppercase tracking-widest inline-block mb-3">TÉMOIGNAGES</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#002046] font-bold tracking-tight mb-4">Témoignages</h2>
            <p className="font-sans text-gray-500 text-sm sm:text-base">Nos clients de Rabat-Salé ont testé et aimé notre réactivité.</p>
          </div>
        </div>

        {/* Carousel strip */}
        <div className="relative w-full overflow-hidden py-8 bg-gray-50/50 border-y border-gray-100">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white via-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent" />
          <div className="flex w-max animate-testimonials">
            <div className="flex gap-8 px-4">
              {TESTIMONIALS_DATA.map((testimonial, i) => (
                <div 
                  key={`t1-${i}`}
                  className="w-[320px] sm:w-[400px] min-h-[260px] shrink-0 bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="font-sans text-sm text-gray-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-50">
                    <img 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#e3efff]" 
                      width={48}
                      height={48}
                      loading="lazy"
                      src={testimonial.avatarUrl}
                    />
                    <div>
                      <h4 className="font-sans font-bold text-[#002046] text-sm leading-snug">{testimonial.name}</h4>
                      <p className="text-xs text-gray-400 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-8 px-4">
              {TESTIMONIALS_DATA.map((testimonial, i) => (
                <div 
                  key={`t2-${i}`}
                  className="w-[320px] sm:w-[400px] min-h-[260px] shrink-0 bg-white p-6 sm:p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="font-sans text-sm text-gray-600 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-50">
                    <img 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#e3efff]" 
                      width={48}
                      height={48}
                      loading="lazy"
                      src={testimonial.avatarUrl}
                    />
                    <div>
                      <h4 className="font-sans font-bold text-[#002046] text-sm leading-snug">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Details & Form */}
      <section id="contact" className="py-20 bg-[#f7f9ff] relative overflow-hidden">
        {/* Dynamic shape */}
        <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-[#bb0027]"></div>
                  <span className="font-sans font-bold text-xs text-[#bb0027] uppercase tracking-widest">CONTACT</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-[#002046] font-bold mb-6 tracking-tight">
                  CONTACTEZ-NOUS DÈS AUJOURD'HUI
                </h2>
                <div className="space-y-6 mt-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-[#bb0027] shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#002046]">Adresse Administrative</h4>
                      <p className="text-xs sm:text-sm text-gray-500">Avenue Moulay Rachid N°468 2ème étage Hay Al Amal, Salé, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-[#bb0027] shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#002046]">Adresse Email</h4>
                      <p className="text-xs sm:text-sm text-gray-500 hover:text-[#bb0027] transition-colors">
                        <a href="mailto:contact@bestcopro.ma">contact@bestcopro.ma</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center text-[#bb0027] shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#002046]">Téléphone Fixe & Mobile</h4>
                      <p className="text-xs sm:text-sm text-gray-500">+212 66 03 010 51 / +212 66 36 376 20</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-8 mt-12 border-t border-gray-100">
                <h5 className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-4">Suivez-nous :</h5>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#002046] hover:text-white transition-all shadow-xs" onClick={(e) => e.preventDefault()}>
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#bb0027] hover:text-white transition-all shadow-xs" onClick={(e) => e.preventDefault()}>
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-xs" onClick={(e) => e.preventDefault()}>
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right solid Crimson Form */}
            <div className="lg:col-span-7 bg-[#bb0027] p-8 sm:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden flex flex-col justify-between">
              {/* Decorative graphic layout from mockup image */}
              <div className="absolute right-[-60px] bottom-[-60px] w-64 h-64 border-[32px] border-white/5 rounded-full pointer-events-none select-none"></div>
              
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-2xl mb-2">Demande de Renseignements</h3>
                <p className="text-sm text-red-100 mb-8 max-w-md">Remplissez le formulaire ci-dessous et obtenez une réponse en moins de 24 heures.</p>
                
                {showSuccess && lastSubmission ? (
                  <div className="p-6 bg-white/14 backdrop-blur-md rounded-xl border border-white/20 mb-8 animate-fadeIn text-center">
                    <CheckCircle className="w-12 h-12 text-white mx-auto mb-3" />
                    <h4 className="font-bold text-lg mb-1">Merci, {lastSubmission.fullName} !</h4>
                    <p className="text-xs text-red-50 leading-relaxed mb-4">
                      Votre demande a bien été envoyée. Nos conseillers de Salé vont vous recontacter par email ({lastSubmission.email}) ou téléphone ({lastSubmission.phone}).
                    </p>
                    <span className="text-[10px] font-mono uppercase bg-white/10 px-2.5 py-1 rounded-full">Message enregistré localement</span>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-red-50">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Hicham El Alami"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#091d2e] border-none focus:outline-none focus:ring-2 focus:ring-[#aec7f7] shadow-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-red-50">Adresse Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: hicham@domain.ma"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#091d2e] border-none focus:outline-none focus:ring-2 focus:ring-[#aec7f7] shadow-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-red-50">Numéro de téléphone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Ex: +212 600 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#091d2e] border-none focus:outline-none focus:ring-2 focus:ring-[#aec7f7] shadow-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-red-50">Description de la demande (Optionnel)</label>
                    <textarea 
                      placeholder="Nombre d'appartements, adresse de la résidence, préoccupations..."
                      value={message}
                      rows={3}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white text-[#091d2e] border-none focus:outline-none focus:ring-2 focus:ring-[#aec7f7] shadow-sm text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="cursor-pointer w-full sm:w-auto bg-white hover:bg-red-50 text-[#bb0027] font-sans text-sm font-bold px-8 py-3.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Envoyer
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
