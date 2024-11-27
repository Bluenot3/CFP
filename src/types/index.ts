export interface Team {
  id: string;
  name: string;
  mascot: string;
  conference: string;
  rank: number;
  record: string;
  logo: string;
}

export interface Game {
  id: string;
  round: number;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  venue: string;
  odds: {
    spread: number;
    moneyline: number;
    total: number;
  };
  score?: {
    home: number;
    away: number;
  };
}

export interface Bet {
  id: string;
  gameId: string;
  type: 'spread' | 'moneyline' | 'total';
  amount: number;
  odds: number;
  selection: string;
  timestamp: string;
  status: 'pending' | 'won' | 'lost';
}

export interface User {
  id: string;
  balance: number;
  bets: Bet[];
  favorites: string[];
}