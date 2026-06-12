"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

const footerLinks = [
  { key: 'footer_privacy', href: '/privacy' },
  { key: 'footer_terms', href: '/terms' },
  { key: 'footer_refund', href: '/refund-policy' },
]

const socialLinks = [
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const { t } = useTranslations()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">

      {/* glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/25 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">

        {/* TEXT */}
        <div className="border-b border-white/10 pb-6 text-center">
          <p className="text-[11px] sm:text-xs md:text-sm text-white/70 leading-relaxed">

            <span className="block mb-2">
           All Rights Reserved. {new Date().getFullYear()} © Car Readers. {''}
            </span>

            <Link href="/terms" className="text-[#ccc] hover:text-blue-400 transition">
             <u> Terms & Conditions</u>
            </Link>
            {' , '}
            <Link href="/privacy" className="text-[#ccc] hover:text-blue-400 transition">
             <u> Privacy Policy</u>
            </Link>
            {' , '}
            <Link href="/refund-policy" className="text-[#ccc] hover:text-blue-400 transition">
             <u> Refund Policy</u>
            </Link>

            <span className="block mt-2">
              An approved NMVTIS data provider.
              <span className="text-white/90"> Email: Info@carreaders.com</span>
            </span>

            {/* <span className="block mt-2 text-sm text-white/80">
              Office: SIU OFFICES, 4-6 GREATOREX STREET, LONDON, UNITED KINGDOM E1 5NF
            </span>
            <span className="block mt-1 text-sm text-white/80">
              WhatsApp: <a href="https://wa.me/447555979712" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-white">+44 7828 760930</a>
            </span> */}

          </p>
        </div>

        {/* PAYMENT */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">

            <img src="/paypal-icon.svg" className="h-6 opacity-80 hover:opacity-100 transition" />
            <img src="/master-card-icon.svg" className="h-6 opacity-80 hover:opacity-100 transition" />
            <img src="/visa-icon.svg" className="h-6 opacity-80 hover:opacity-100 transition" />
            <img src="/norton-extra-text-icon.svg" className="h-6 opacity-80 hover:opacity-100 transition" />

          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/70">
            Office: SIU OFFICES, 4-6 GREATOREX STREET, LONDON, UNITED KINGDOM E1 5NF
          </p>
          <p className="text-sm text-white/70 mt-1">
            WhatsApp: <a href="https://wa.me/447555979712" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-emerald-300 hover:text-white" aria-label="WhatsApp +44 7828 760930">
              <MessageCircle className="w-4 h-4" />
            </a>
          </p>
        </div>

      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/447555979712"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-2xl shadow-black/20 ring-1 ring-white/20 transition hover:bg-emerald-700"
          aria-label="WhatsApp +44 7828 760930"
>
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-400 to-cyan-400" />
    </footer>
  )
}