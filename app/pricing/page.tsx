import { Metadata } from 'next'
import PricingClient from './pricing-client'

export const metadata: Metadata = {
  title: 'Pricing Plans - Car Readers Digital pdf reports',
  description:
    'Affordable Digital pdf report pricing plans. Premium reports starting from £30. Find the perfect plan for your needs.',
  openGraph: {
    title: 'Pricing Plans - Car Readers Digital pdf reports',
    description:
      'Affordable Digital pdf report pricing plans. Premium reports starting from £30. Find the perfect plan for your needs.',
    url: 'https://carreaders.com/pricing',
    type: 'website',
  },
}

export default function Pricing() {
  return <PricingClient />
}
