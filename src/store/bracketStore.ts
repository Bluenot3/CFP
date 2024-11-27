import { create } from 'zustand';
import type { Game } from '../types';
import { initialGames } from '../data/mockData';

interface BracketState {
  games: Game[];
  selectedGame: Game | null;
  setSelectedGame: (game: Game | null) => void;
  updateGame: (gameId: string, updates: Partial<Game>) => void;
}

export const useBracketStore = create<BracketState>((set) => ({
  games: initialGames,
  selectedGame: null,
  setSelectedGame: (game) => set({ selectedGame: game }),
  updateGame: (gameId, updates) =>
    set((state) => ({
      games: state.games.map((game) =>
        game.id === gameId ? { ...game, ...updates } : game
      ),
    })),
}));