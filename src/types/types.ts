export interface Deck {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}
export interface Card {
  success: boolean;
  deck_id: string;
  cards: [
    {
      image: string;
      value: string;
      suit: string;
      code: string;
    }
  ];
  remaining: number;
}
export interface SingleCard {
  image: string;
  value: string;
  suit: string;
  code: string;
}
export interface Dealer {
  cards: SingleCard[];
  points: number;
}
export interface Player extends Dealer {
  cash: number;
}
