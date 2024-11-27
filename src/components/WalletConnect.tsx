import React from 'react';
import { useNearWallet } from '../hooks/useNearWallet';
import { Wallet, LogOut } from 'lucide-react';
import { formatNearAmount } from '../utils/near';

export default function WalletConnect() {
  const { signIn, signOut, accounts, isSignedIn, getBalance } = useNearWallet();
  const [balance, setBalance] = React.useState<string>('0');

  React.useEffect(() => {
    if (isSignedIn) {
      getBalance().then((bal) => {
        if (bal) setBalance(formatNearAmount(bal));
      });
    }
  }, [isSignedIn, getBalance]);

  return (
    <div className="flex items-center gap-4">
      {isSignedIn ? (
        <>
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            <p className="text-sm">{accounts[0].accountId}</p>
            <p className="text-xs">{balance} NEAR</p>
          </div>
          <button
            onClick={signOut}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            <LogOut className="w-4 h-4" />
            Disconnect
          </button>
        </>
      ) : (
        <button
          onClick={signIn}
          className="flex items-center gap-2 bg-[#B3A369] hover:bg-[#9a8c57] text-white px-4 py-2 rounded-lg"
        >
          <Wallet className="w-4 h-4" />
          Connect Wallet
        </button>
      )}
    </div>
  );
}