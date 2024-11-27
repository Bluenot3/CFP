import type { Game, Team } from '../types';

export const teams: Team[] = [
  {
    id: 't1',
    name: 'Michigan',
    mascot: 'Wolverines',
    conference: 'Big Ten',
    rank: 1,
    record: '13-0',
    logo: 'https://images.unsplash.com/photo-1610726343670-f11d06d24008?w=128&h=128&fit=crop'
  },
  {
    id: 't2',
    name: 'Alabama',
    mascot: 'Crimson Tide',
    conference: 'SEC',
    rank: 4,
    record: '12-1',
    logo: 'https://images.unsplash.com/photo-1610726343670-f11d06d24008?w=128&h=128&fit=crop'
  },
  {
    id: 't3',
    name: 'Texas',
    mascot: 'Longhorns',
    conference: 'Big 12',
    rank: 2,
    record: '12-1',
    logo: 'https://images.unsplash.com/photo-1610726343670-f11d06d24008?w=128&h=128&fit=crop'
  },
  {
    id: 't4',
    name: 'Washington',
    mascot: 'Huskies',
    conference: 'Pac-12',
    rank: 3,
    record: '13-0',
    logo: 'https://images.unsplash.com/photo-1610726343670-f11d06d24008?w=128&h=128&fit=crop'
  }
];

export const initialGames: Game[] = [
  {
    id: 'g1',
    round: 1,
    homeTeam: teams[0],
    awayTeam: teams[1],
    date: '2024-01-01',
    time: '4:00 PM ET',
    venue: 'Rose Bowl',
    odds: {
      spread: -7.5,
      moneyline: -280,
      total: 45.5
    }
  },
  {
    id: 'g2',
    round: 1,
    homeTeam: teams[2],
    awayTeam: teams[3],
    date: '2024-01-01',
    time: '8:00 PM ET',
    venue: 'Sugar Bowl',
    odds: {
      spread: -3.5,
      moneyline: -165,
      total: 51.5
    }
  },
  {
    id: 'g3',
    round: 2,
    homeTeam: teams[0],
    awayTeam: teams[2],
    date: '2024-01-08',
    time: '7:30 PM ET',
    venue: 'NRG Stadium',
    odds: {
      spread: -1.5,
      moneyline: -110,
      total: 48.5
    }
  }
];