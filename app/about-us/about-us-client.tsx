'use client'

import { useState, useEffect } from 'react'
import {
  Shield, Users, Globe2, CheckCircle2, Database, Clock,
  Award, Heart, Zap, Eye
} from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: 900, suffix: '+', label: 'Data Sources Worldwide', icon: Database },
  { value: 5, suffix: 'M+', label: 'Structured Documents Generated', icon: CheckCircle2 },
  { value: 50, suffix: '+', label: 'Countries Supported', icon: Globe2 },
  { value: 24, suffix: '/7', label: 'Dedicated Support', icon: Clock }
]

const values = [
  {
    icon: Shield,
    title: 'Structured & Organized Data',
    description:
      'We process available information into clear and structured digital PDF documents.'
  },
  {
    icon: Users,
    title: 'Built for Users',
    description:
      'Our platform helps users access organized digital reports for better understanding and decisions.'
  },
  {
    icon: Eye,
    title: 'Clear Information Overview',
    description:
      'We present available data points in a structured digital PDF format for easy review.'
  },
  {
    icon: Zap,
    title: 'Fast Digital Documents',
    description:
      'Instantly generated structured PDF documents delivered through an online system.'
  }
]

export default function AboutUsClient() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  useEffect(() => {
    setIsVisible(true)

    const duration = 1800
    const steps = 60
    const interval = duration / steps

    stats.forEach((stat, index) => {
      let current = 0
      const inc = stat.value / steps

      const timer = setInterval(() => {
        current += inc
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }

        setCounters(prev => {
          const updated = [...prev]
          updated[index] = Math.floor(current)
          return updated
        })
      }, interval)
    })
  }, [])

  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2563eb]/10 via-white to-gray-50">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb15,transparent_60%)]" />

        <div className="container mx-auto px-4 py-20 text-center max-w-4xl">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2563eb]/10 text-[#2563eb] font-semibold border border-[#2563eb]/20">
            <Shield size={16} /> About CarReaders
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            Structured <span className="text-[#2563eb]">Digital Documents</span> for Clear Communication
          </h1>

          <p className="text-gray-600 mt-5 text-sm sm:text-base md:text-lg">
            CarReaders is a digital document platform that helps organizations organize information,
            generate structured PDF documents, and share polished outputs with confidence.
          </p>

        </div>
      </div>

      {/* STATS */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {stats.map((s, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:border-[#2563eb]/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#2563eb]/10 flex items-center justify-center group-hover:scale-110 transition">
                <s.icon className="text-[#2563eb]" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-gray-900">
                {counters[i]}{s.suffix}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STORY */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-5">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
              Why We Built <span className="text-[#2563eb]">CarReaders</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We created CarReaders to make it easier to turn structured information into professional,
              easy-to-share PDF documents for everyday business and personal workflows.
            </p>

            <p className="text-gray-600 text-sm sm:text-base">
              Our platform brings together organized data, clear presentation, and dependable document
              generation so users can communicate information with greater consistency and clarity.
            </p>

            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Award className="text-[#2563eb]" /> Professional Output
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Heart className="text-[#2563eb]" /> User Focused
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#2563eb]/10 rounded-3xl blur-2xl"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
              <Image
                src="/about-car.jpg"
                alt="About"
                width={800}
                height={500}
                className="object-cover"
              />

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 p-6 text-white">
                <h3 className="text-xl font-bold">Global Document Intelligence</h3>
                <p className="text-sm text-white/80">
                  Organized data • Clear output • Reliable delivery
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* VALUES */}
      <div className="container mx-auto px-4 py-20">

        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Our <span className="text-[#2563eb]">Core Values</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            The principles that define how we build trust and deliver value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-white hover:shadow-xl hover:border-[#2563eb]/30 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center mb-4">
                <v.icon className="text-[#2563eb]" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold">{v.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{v.description}</p>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#2563eb] to-slate-900 py-16 text-center text-white">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Start Your Digital Report Today
        </h2>

        <p className="text-white/80 mt-3 text-sm sm:text-base">
          Get instant access to a structured digital PDF document
        </p>

        <button className="mt-6 bg-white text-[#2563eb] hover:bg-gray-200 font-bold px-8 py-3 rounded-xl">
          Get Report Now
        </button>

      </div>

    </div>
  )
}