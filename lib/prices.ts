export const PRICING_MAP: Record<string, { basic: number; standard: number; premium: number }> = {
  // Keep only Basic pricing at 30 (other tiers preserved but aligned)
  'USD': { basic: 30, standard: 30, premium: 30 },
  'EUR': { basic: 30, standard: 30, premium: 30 },
  'GBP': { basic: 30, standard: 30, premium: 30 },
  'AUD': { basic: 30, standard: 30, premium: 30 },
  'PLN': { basic: 30, standard: 30, premium: 30 },
  'SEK': { basic: 30, standard: 30, premium: 30 },
  'AED': { basic: 30, standard: 30, premium: 30 },
  'MDL': { basic: 30, standard: 30, premium: 30 },
  'BAM': { basic: 30, standard: 30, premium: 30 },
  'RON': { basic: 30, standard: 30, premium: 30 },
  'DKK': { basic: 30, standard: 30, premium: 30 },
  'CHF': { basic: 30, standard: 30, premium: 30 },
  'CZK': { basic: 30, standard: 30, premium: 30 },
  'BGN': { basic: 30, standard: 30, premium: 30 },
  'HUF': { basic: 30, standard: 30, premium: 30 },
  'UAH': { basic: 30, standard: 30, premium: 30 },
}

export const CURRENCY_SYMBOLS: Record<string, string> = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£',
  'AUD': 'A$',
  'PLN': 'zł',
  'SEK': 'kr',
  'AED': 'د.إ',
  'MDL': 'L',
  'BAM': 'KM',
  'RON': 'lei',
  'DKK': 'kr',
  'CHF': 'CHF',
  'CZK': 'Kč',
  'BGN': 'лв',
  'HUF': 'Ft',
  'UAH': '₴',
}

export function getPrice(packageId: 'basic' | 'standard' | 'premium', _currency = 'GBP') {
  return PRICING_MAP['GBP'][packageId]
}

export function getCurrencySymbol(currency = 'USD') {
  return CURRENCY_SYMBOLS[currency] || '$'
}

export function formatCurrency(amount: number, currency = 'USD', locale = 'en-US') {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 2 }).format(amount)
  } catch (e) {
    // Fallback to simple formatting
    const symbol = getCurrencySymbol(currency)
    return `${symbol} ${amount.toFixed(2)}`
  }
}
