"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
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
    <footer className="relative overflow-hidden text-white bg-gradient-to-b from-black via-[#120000] to-black">

      {/* glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#780000]/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#780000]/20 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">

        {/* TEXT */}
        <div className="border-b border-white/10 pb-6 text-center">
          <p className="text-[11px] sm:text-xs md:text-sm text-white/70 leading-relaxed">

            <span className="block mb-2">
           All Rights Reserved. {new Date().getFullYear()} © Car Readers. {''}
            </span>

            <Link href="/terms" className="text-[#ccc] hover:text-red-400 transition">
             <u> Terms & Conditions</u>
            </Link>
            {' , '}
            <Link href="/privacy" className="text-[#ccc] hover:text-red-400 transition">
             <u> Privacy Policy</u>
            </Link>
            {' , '}
            <Link href="/refund-policy" className="text-[#ccc] hover:text-red-400 transition">
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
              WhatsApp: <a href="https://wa.me/447828760930" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-white">+44 7828 760930</a>
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
            WhatsApp: <a href="https://wa.me/447828760930" target="_blank" rel="noreferrer" className="inline-flex items-center text-emerald-300 hover:text-white" aria-label="WhatsApp +44 7828 760930">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.9 11.9 0 003.5 12c0 2.1.55 4.12 1.6 5.9L2 22l4.7-1.6A11.9 11.9 0 0012 23.5 11.94 11.94 0 0020.52 3.48zM12 21.5c-1.9 0-3.76-.5-5.36-1.45l-.38-.22-2.78.95.95-2.72-.24-.4A9.5 9.5 0 1121.5 12 9.47 9.47 0 0112 21.5z" />
                <path d="M17.6 14.2c-.3-.15-1.78-.87-2.06-.97s-.48-.15-.68.15-.78.97-.96 1.17-.35.22-.65.07a7.03 7.03 0 01-2.06-1.26c-.38-.34-.65-.76-.72-1.06s-.01-.59.21-.8c.22-.22.48-.56.73-.83.25-.27.33-.47.5-.78.17-.31.08-.58-.04-.75-.12-.17-.68-1.63-.93-2.22-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.35s-1.05 1.03-1.05 2.51 1.08 2.9 1.23 3.1c.15.2 2.12 3.33 5.14 4.67 3.02 1.35 3.02.9 3.57.85.55-.05 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.45-.07-.13-.25-.2-.55-.35z" />
              </svg>
            </a>
          </p>
        </div>

      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/447828760930"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-2xl shadow-black/20 ring-1 ring-white/20 transition hover:bg-emerald-700"
          aria-label="WhatsApp +44 7828 760930"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.9 11.9 0 003.5 12c0 2.1.55 4.12 1.6 5.9L2 22l4.7-1.6A11.9 11.9 0 0012 23.5 11.94 11.94 0 0020.52 3.48zM12 21.5c-1.9 0-3.76-.5-5.36-1.45l-.38-.22-2.78.95.95-2.72-.24-.4A9.5 9.5 0 1121.5 12 9.47 9.47 0 0112 21.5z" />
            <path d="M17.6 14.2c-.3-.15-1.78-.87-2.06-.97s-.48-.15-.68.15-.78.97-.96 1.17-.35.22-.65.07a7.03 7.03 0 01-2.06-1.26c-.38-.34-.65-.76-.72-1.06s-.01-.59.21-.8c.22-.22.48-.56.73-.83.25-.27.33-.47.5-.78.17-.31.08-.58-.04-.75-.12-.17-.68-1.63-.93-2.22-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.35s-1.05 1.03-1.05 2.51 1.08 2.9 1.23 3.1c.15.2 2.12 3.33 5.14 4.67 3.02 1.35 3.02.9 3.57.85.55-.05 1.78-.73 2.03-1.44.25-.71.25-1.32.18-1.45-.07-.13-.25-.2-.55-.35z" />
          </svg>
        </a>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#780000] to-transparent" />
    </footer>
  )
}