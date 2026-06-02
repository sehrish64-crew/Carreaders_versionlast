export const PRICING_MAP: Record<string, { basic: number; standard: number; premium: number }> = {
  // Keep only Basic pricing at 26 (other tiers preserved but aligned)
  'USD': { basic: 26, standard: 26, premium: 26 },
  'EUR': { basic: 26, standard: 26, premium: 26 },
  'GBP': { basic: 26, standard: 26, premium: 26 },
  'AUD': { basic: 26, standard: 26, premium: 26 },
  'PLN': { basic: 26, standard: 26, premium: 26 },
  'SEK': { basic: 26, standard: 26, premium: 26 },
  'AED': { basic: 26, standard: 26, premium: 26 },
  'MDL': { basic: 26, standard: 26, premium: 26 },
  'BAM': { basic: 26, standard: 26, premium: 26 },
  'RON': { basic: 26, standard: 26, premium: 26 },
  'DKK': { basic: 26, standard: 26, premium: 26 },
  'CHF': { basic: 26, standard: 26, premium: 26 },
  'CZK': { basic: 26, standard: 26, premium: 26 },
  'BGN': { basic: 26, standard: 26, premium: 26 },
  'HUF': { basic: 26, standard: 26, premium: 26 },
  'UAH': { basic: 26, standard: 26, premium: 26 },
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
