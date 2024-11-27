import BN from 'bn.js';

export function formatNearAmount(amount: string): string {
  const bn = new BN(amount);
  const formatted = bn.div(new BN('10'.padEnd(25, '0'))).toString();
  return parseFloat(formatted).toFixed(2);
}

export function parseNearAmount(amount: string): string {
  return new BN(amount).mul(new BN('10'.padEnd(25, '0'))).toString();
}

export function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}