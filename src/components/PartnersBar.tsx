import React from "react";
import { motion } from "motion/react";

const revealViewport = { once: true, margin: "-100px" };
const smoothEase = [0.16, 1, 0.3, 1] as const;

const partners = [
  {
    name: "Attijariwafa bank",
    logo: new URL("../../logo/Attijariwafa bank-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[170px] object-contain",
  },
  {
    name: "Banque populaire",
    logo: new URL("../../logo/Banque populaire 2022-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[170px] object-contain",
  },
  {
    name: "CMI",
    logo: new URL("../../logo/CMI - Centre Mon_tique In-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[150px] object-contain",
  },
  {
    name: "Credit Agricole",
    logo: new URL("../../logo/Credit Agricole Du Maroc-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[170px] object-contain",
  },
  {
    name: "Otis",
    logo: new URL("../../logo/Otis_logo.SVG", import.meta.url).href,
    imageClassName: "max-h-[44px] max-w-[136px] object-contain",
  },
  {
    name: "Redal",
    logo: new URL("../../logo/Redal-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[48px] max-w-[154px] object-contain",
  },
  {
    name: "Bank of Africa",
    logo: new URL("../../logo/bank of africa logo-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "h-full w-full object-cover object-center",
  },
];

export default function PartnersBar() {
  const logoSet = (prefix: string) => (
    <div className="flex shrink-0 items-center gap-8 px-4 sm:gap-10 sm:px-5">
      {partners.map((partner) => (
        <div
          key={`${prefix}-${partner.name}`}
          className="flex h-[70px] w-[160px] shrink-0 items-center justify-center overflow-hidden"
          title={partner.name}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className={`block ${partner.imageClassName}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.55, ease: smoothEase }}
        >
          <span className="text-[#bb0027] font-bold text-xs uppercase tracking-widest inline-block mb-3">NOS PARTENAIRES</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#002046] font-bold tracking-tight mb-4">Une synergie de confiance</h2>
          <p className="font-sans text-gray-500 text-base md:text-lg">
            Pour vous garantir un service irréprochable au quotidien, Bestcopro s’entoure des leaders du marché et des meilleurs experts techniques au Maroc.
          </p>
        </motion.div>
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={revealViewport}
          transition={{ duration: 0.65, ease: smoothEase }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max items-center animate-scroll">
            {logoSet("primary")}
            {logoSet("duplicate")}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
