import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculatePayout(odds: number, stake: number): number {
  if (odds > 0) {
    return (stake * (odds / 100));
  } else {
    return (stake / (Math.abs(odds) / 100));
  }
}