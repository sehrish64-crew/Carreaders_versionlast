'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import Image from 'next/image'
import { useState, useEffect } from 'react'
import GetReportForm from './GetReportForm'
import { useTranslations } from '@/lib/translations'

SwiperCore.use([Navigation, Autoplay]);

export default function WhyCarReaders() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslations()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-14 sm:py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-sky-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('why_title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-600 leading-relaxed">
            {t('why_subtitle')}
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="relative h-72 sm:h-80 md:h-[500px] rounded-3xl overflow-hidden mb-10 sm:mb-16 shadow-2xl">
          <Image
            src="/cars.webp"
            alt={t('why_title')}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-[#2563eb]/40"></div>

          {/* CONTENT */}
          <div className={`absolute inset-0 flex items-center justify-start transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="px-4 sm:px-6 md:px-12 max-w-lg space-y-4 sm:space-y-6">

              <div>
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
                  Starting from
                </div>
                <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-400 drop-shadow-lg">
                  £30
                </div>
              </div>

              <div>
                <p className="text-white text-base sm:text-lg font-semibold">
                  for a vehicle history report
                </p>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">
                  Verify VIN and avoid risky car purchases before you buy.
                </p>
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-400 to-sky-600 text-slate-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Check VIN Now
              </button>

            </div>
          </div>
        </div>

        {/* DESKTOP CARDS */}
        <div className="hidden md:grid grid-cols-4 gap-6">

          {[
            {
              title: "Verification Method",
              value: "By VIN & Plate",
              icon: "✓",
              color: "#2563eb"
            },
            {
              title: "Daily Searches",
              value: "45K+",
              icon: "↗",
              color: "#9b111e"
            },
            {
              title: "Data Sources",
              value: "70+",
              icon: "⊕",
              color: "#c1121f"
            },
            {
              title: "Report Scope",
              value: "Complete History",
              icon: "◆",
              color: "#2563eb"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all border border-blue-100">

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold mb-4"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>

              <p className="text-xs text-gray-500 uppercase">{item.title}</p>
              <p className="text-xl font-bold text-gray-900 mt-2">{item.value}</p>
            </div>
          ))}

        </div>

        {/* MOBILE CARDS */}
        <div className="grid grid-cols-2 gap-3 md:hidden mb-10">
          {[
            { title: "VIN & Plate", value: "Verified", icon: "✓" },
            { title: "Daily Searches", value: "45K+", icon: "↗" },
            { title: "Data Sources", value: "70+", icon: "⊕" },
            { title: "Report Scope", value: "Complete", icon: "◆" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold mb-3">
                {item.icon}
              </div>
              <p className="text-[11px] uppercase tracking-wide text-gray-500">{item.title}</p>
              <p className="text-base font-bold text-gray-900 mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* TRUST SECTION */}
        <div className="mt-12 sm:mt-16 md:mt-20 rounded-3xl overflow-hidden relative">

          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] via-blue-800 to-slate-900"></div>

          <div className="relative p-6 sm:p-10 md:p-16 text-white grid md:grid-cols-2 gap-6 md:gap-10">

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                1,000,000+ Trusted Users
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Across 150+ countries using secure VIN reports.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-2xl font-bold">4.8★</p>
                <p className="text-xs text-white/70">Rating</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-white/70">Uptime</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* FORM */}
      <GetReportForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  )
}