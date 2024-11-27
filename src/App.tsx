import React from 'react';
import BracketView from './components/BracketView';
import BettingSlip from './components/BettingSlip';
import WalletConnect from './components/WalletConnect';
import { useBracketStore } from './store/bracketStore';
import '@near-wallet-selector/modal-ui/styles.css';

function App() {
  const { selectedGame, setSelectedGame } = useBracketStore();
  const [showBettingSlip, setShowBettingSlip] = React.useState(false);

  const handlePlaceBet = (amount: number) => {
    // TODO: Implement bet placement logic with NEAR contract
    console.log(`Placing bet of ${amount} NEAR`);
    setShowBettingSlip(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#003B75] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">College Football Playoffs</h1>
          <WalletConnect />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <BracketView />
        
        {showBettingSlip && selectedGame && (
          <BettingSlip
            odds={selectedGame.odds.moneyline}
            team={selectedGame.homeTeam.name}
            type="Moneyline"
            onClose={() => setShowBettingSlip(false)}
            onPlaceBet={handlePlaceBet}
          />
        )}
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>Must be 21+ to bet. Please bet responsibly.</p>
          <p>If you or someone you know has a gambling problem, call 1-800-522-4700.</p>
          <p className="mt-2 text-gray-400">Powered by NEAR Protocol</p>
        </div>
      </footer>
    </div>
  );
}

export default App;