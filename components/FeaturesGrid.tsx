"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, TrendingUp, FileText, AlertTriangle, Zap, Shield } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

export default function FeaturesGrid() {
  const { t } = useTranslations()
  const [activeTab, setActiveTab] = useState('odometer')
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const tabs = [
    { id: 'odometer', label: 'Odometer Check' },
    { id: 'ownership', label: 'Ownership History' },
    { id: 'photos', label: 'Photos on Sale' },
    { id: 'damage', label: 'Damage Check' },
    { id: 'technical', label: 'Technical Data' },
    { id: 'stolen', label: 'Stolen VIN Check' },
  ]

  // Auto-cycle through tabs
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === prevTab)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex].id
      })
    }, 5000) // Change tab every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, tabs])

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 animate-fade-in px-1 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            Make Smarter Car Decisions with Verified History Reports
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Instantly uncover hidden issues, ownership records, mileage accuracy, and accident history with Car Readers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-1 sm:gap-2 md:gap-4 border-b border-border animate-fade-in-up pb-1 -mx-1 px-1">
          {tabs.map((tab) => (
            <div key={tab.id} className="relative min-w-max">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`text-[11px] sm:text-sm md:text-base font-semibold pb-2 sm:pb-3 px-1.5 sm:px-2 whitespace-nowrap transition ${activeTab === tab.id
                  ? 'text-[#2563eb]'
                  : 'text-muted-foreground hover:text-[#2563eb]'
                  }`}
              >
                {tab.label}
              </button>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                {activeTab === tab.id && (
                  <div className="h-full bg-[#2563eb] w-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 sm:mt-8 md:mt-10">

          {/* ODOMETER */}
          {activeTab === 'odometer' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image src="/odometer-check-en@1x.webp" alt="" fill className="object-contain" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-14 h-14 bg-[#2563eb]/10 flex items-center justify-center rounded-xl">
                  <TrendingUp className="text-[#2563eb]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">Past Odometer Readings</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Detect mileage fraud by analyzing historical odometer records across multiple sources.
                </p>

                <Link href="/pricing" className="bg-[#2563eb] hover:bg-[#0369a1] text-white px-5 sm:px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                  Check Your Car <ChevronRight />
                </Link>
              </div>
            </div>
          )}

          {/* OWNERSHIP */}
          {activeTab === 'ownership' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image src="/ownership.webp" alt="" fill className="object-contain" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-14 h-14 bg-[#2563eb]/10 flex items-center justify-center rounded-xl">
                  <FileText className="text-[#2563eb]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">Ownership History</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Track previous owners, usage type, and complete ownership timeline.
                </p>

                <Link href="/pricing" className="bg-[#2563eb] hover:bg-[#0369a1] text-white px-5 sm:px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                  Check Ownership <ChevronRight />
                </Link>
              </div>
            </div>
          )}

          {/* PHOTOS */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image src="/photos-sale.webp" alt="" fill className="object-contain" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-14 h-14 bg-[#2563eb]/10 flex items-center justify-center rounded-xl">
                  <Zap className="text-[#2563eb]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">Photos on Sale</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Compare vehicle images over time and identify possible damage.
                </p>

                <Link href="/pricing" className="bg-[#2563eb] hover:bg-[#0369a1] text-white px-5 sm:px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                  View Photos <ChevronRight />
                </Link>
              </div>
            </div>
          )}

          {/* DAMAGE */}
          {activeTab === 'damage' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image src="/damage.webp" alt="" fill className="object-contain" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-xl">
                  <AlertTriangle className="text-blue-600" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">Damage Check</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Discover accident, flood, fire, and insurance-reported damages.
                </p>

                <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                  Check Damage <ChevronRight />
                </Link>
              </div>
            </div>
          )}

          {/* TECHNICAL */}
          {activeTab === 'technical' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image src="/specification.webp" alt="" fill className="object-contain" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-14 h-14 bg-[#2563eb]/10 flex items-center justify-center rounded-xl">
                  <Zap className="text-[#2563eb]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">Technical Data</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Full specifications including engine, transmission, and features.
                </p>

                <button className="bg-[#2563eb] hover:bg-[#0369a1] text-white px-5 sm:px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                  View Specs <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {/* STOLEN */}
          {activeTab === 'stolen' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

              <div className="relative w-full h-56 sm:h-72 md:h-80">
                <Image src="/stolen.webp" alt="" fill className="object-contain" />
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="w-14 h-14 bg-[#2563eb]/10 flex items-center justify-center rounded-xl">
                  <Shield className="text-[#2563eb]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold">Stolen VIN Check</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Verify if a vehicle is reported stolen or flagged.
                </p>

                <Link href="/pricing" className="bg-[#2563eb] hover:bg-[#0369a1] text-white px-5 sm:px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                  Verify Status <ChevronRight />
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Badge */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-xl flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="w-12 h-12 bg-[#2563eb]/20 rounded-full flex items-center justify-center">
            ✓
          </div>
          <div>
            <h4 className="font-bold text-base sm:text-lg">Official NMVTIS Source</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Car Readers is an approved NMVTIS provider helping prevent fraud and unsafe vehicle purchases.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
