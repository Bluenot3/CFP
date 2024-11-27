import React from 'react';
import type { Game } from '../types';
import { cn } from '../lib/utils';

interface GameCardProps {
  game: Game;
  isSelected: boolean;
  onSelect: () => void;
}

export default function GameCard({ game, isSelected, onSelect }: GameCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border p-4 cursor-pointer transition-all',
        isSelected
          ? 'border-[#003B75] shadow-lg bg-white'
          : 'border-gray-200 hover:border-[#B3A369] bg-white/50'
      )}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{game.date}</span>
        <span className="text-sm font-medium text-[#003B75]">{game.venue}</span>
      </div>
      
      {[game.homeTeam, game.awayTeam].map((team) => (
        <div key={team.id} className="flex items-center gap-3 py-2">
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="w-8 h-8 object-contain"
          />
          <div className="flex-1">
            <p className="font-semibold">{team.name}</p>
            <p className="text-sm text-gray-500">{team.record}</p>
          </div>
          {game.score && (
            <span className="text-xl font-bold">
              {team === game.homeTeam ? game.score.home : game.score.away}
            </span>
          )}
        </div>
      ))}
      
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span>Spread: {game.odds.spread}</span>
          <span>O/U: {game.odds.total}</span>
        </div>
      </div>
    </div>
  );
}