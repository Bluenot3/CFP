import React, { useState } from 'react';
import { calculatePayout, formatCurrency } from '../lib/utils';
import { parseNearAmount } from '../utils/near';
import { useNearWallet } from '../hooks/useNearWallet';
import { DollarSign, X, AlertCircle } from 'lucide-react';

interface BettingSlipProps {
  odds: number;
  team: string;
  type: string;
  onClose: () => void;
  onPlaceBet: (amount: number) => void;
}

export default function BettingSlip({
  odds,
  team,
  type,
  onClose,
  onPlaceBet,
}: BettingSlipProps) {
  const [amount, setAmount] = useState<string>('');
  const numericAmount = parseFloat(amount) || 0;
  const potentialWinnings = calculatePayout(odds, numericAmount);
  const { isSignedIn, signIn } = useNearWallet();

  const handlePlaceBet = async () => {
    if (!isSignedIn) {
      signIn();
      return;
    }
    
    try {
      const nearAmount = parseNearAmount(amount);
      onPlaceBet(parseFloat(nearAmount));
    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-96 bg-white shadow-lg rounded-t-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Betting Slip</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-3 rounded">
          <p className="font-medium">{team}</p>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm font-medium text-[#003B75]">Odds: {odds}</p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Bet Amount (NEAR)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-9 w-full rounded-md border border-gray-300 py-2"
              placeholder="Enter amount in NEAR"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded">
          <p className="text-sm text-gray-600">Potential Winnings (NEAR)</p>
          <p className="text-lg font-semibold text-[#003B75]">
            {potentialWinnings.toFixed(2)} NEAR
          </p>
        </div>

        {!isSignedIn && (
          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700">
              Connect your NEAR wallet to place bets
            </p>
          </div>
        )}

        <button
          onClick={handlePlaceBet}
          disabled={numericAmount <= 0}
          className="w-full bg-[#003B75] text-white py-2 rounded-md hover:bg-[#002855] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSignedIn ? 'Place Bet' : 'Connect Wallet to Bet'}
        </button>
      </div>
    </div>
  );
}