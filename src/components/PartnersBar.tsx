import React from "react";


const partners = [
  {
    name: "Attijariwafa bank",
    logo: new URL("../../logo/Attijariwafa bank-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[170px] object-contain",
    width: 170,
    height: 54,
  },
  {
    name: "Banque populaire",
    logo: new URL("../../logo/Banque populaire 2022-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[170px] object-contain",
    width: 170,
    height: 54,
  },
  {
    name: "CMI",
    logo: new URL("../../logo/CMI - Centre Mon_tique In-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[150px] object-contain",
    width: 150,
    height: 54,
  },
  {
    name: "Credit Agricole",
    logo: new URL("../../logo/Credit Agricole Du Maroc-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[54px] max-w-[170px] object-contain",
    width: 170,
    height: 54,
  },
  {
    name: "Otis",
    logo: new URL("../../logo/Otis_logo.SVG", import.meta.url).href,
    imageClassName: "max-h-[44px] max-w-[136px] object-contain",
    width: 136,
    height: 44,
  },
  {
    name: "Redal",
    logo: new URL("../../logo/Redal-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "max-h-[48px] max-w-[154px] object-contain",
    width: 154,
    height: 48,
  },
  {
    name: "Bank of Africa",
    logo: new URL("../../logo/bank of africa logo-vector.ma.svg-vector.ma.svg", import.meta.url).href,
    imageClassName: "h-full w-full object-cover object-center",
    width: 160,
    height: 70,
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
            width={partner.width}
            height={partner.height}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="text-center max-w-3xl mx-auto mb-12"
          data-reveal="up"
        >
          <span className="text-[#bb0027] font-bold text-xs uppercase tracking-widest inline-block mb-3">NOS PARTENAIRES</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#002046] font-bold tracking-tight mb-4">Une synergie de confiance</h2>
          <p className="font-sans text-gray-500 text-base md:text-lg">
            Pour vous garantir un service irréprochable au quotidien, Bestcopro s’entoure des leaders du marché et des meilleurs experts techniques au Maroc.
          </p>
        </div>
        <div
          className="relative overflow-hidden"
          data-reveal="scale"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          <div className="flex w-max items-center animate-scroll">
            {logoSet("primary")}
            {logoSet("duplicate")}
          </div>
        </div>
      </div>
    </div>
  );
}
