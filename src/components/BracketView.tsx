import React from 'react';
import { useBracketStore } from '../store/bracketStore';
import { Trophy } from 'lucide-react';
import GameCard from './GameCard';

export default function BracketView() {
  const { games, selectedGame, setSelectedGame } = useBracketStore();

  return (
    <div className="w-full overflow-x-auto bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#003B75]">2024 College Football Playoff</h2>
        <Trophy className="w-8 h-8 text-[#B3A369]" />
      </div>
      
      <div className="flex gap-8 min-w-[1200px]">
        {[1, 2, 3].map((round) => (
          <div key={round} className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">
              {round === 1 ? 'Semifinals' : round === 2 ? 'Championship' : 'Winner'}
            </h3>
            <div className="space-y-4">
              {games
                .filter((game) => game.round === round)
                .map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    isSelected={selectedGame?.id === game.id}
                    onSelect={() => setSelectedGame(game)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}