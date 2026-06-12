"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Menu } from 'lucide-react'
import { useTranslations } from '@/lib/translations'

export default function Header() {
  const { t } = useTranslations()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href) ?? false
  }

  const navLink =
    "relative text-gray-700 hover:text-blue-600 transition-all font-semibold group"

  const mobileLinkBase =
    "block rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 border border-transparent transition-all duration-300"

  const activeLine =
    "absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"

  return (
    <>
      <header className="sticky top-0 z-[40] bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Car Readers" className="h-7 sm:h-8 md:h-9 w-auto" />
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex items-center space-x-10">
              <Link href="/" className={navLink}>
                {t('nav_home')}
                <span className={activeLine}></span>
              </Link>

              <Link href="/pricing" className={navLink}>
                {t('nav_pricing')}
                <span className={activeLine}></span>
              </Link>

              <Link href="/contact-us" className={navLink}>
                {t('nav_contact')}
                <span className={activeLine}></span>
              </Link>

              <Link href="/about-us" className={navLink}>
                {t('nav_about')}
                <span className={activeLine}></span>
              </Link>
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

                {/* MOBILE MENU */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BORDER ACCENT */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"></div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <img src="/logo.png" className="h-6 sm:h-7 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X />
            </button>
          </div>

          <div className="space-y-2 text-base sm:text-lg font-semibold">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${mobileLinkBase} ${isActive('/') ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${mobileLinkBase} ${isActive('/pricing') ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              Pricing
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${mobileLinkBase} ${isActive('/contact-us') ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              Contact
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`${mobileLinkBase} ${isActive('/about-us') ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </>
  )
}