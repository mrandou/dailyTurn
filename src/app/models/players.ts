export interface Player {
  name: string;
  isAvailable: boolean;
  picture: string;
  squad?: number;
}

export enum SquadType {
  ROCKET,
  BATAILLON,
}

export interface Squad {
  type: SquadType;
  picture: string;
}

export const SQUADS: Squad[] = [
  { type: SquadType.ROCKET, picture: '' },
  { type: SquadType.BATAILLON, picture: '' },
];

export const Players: Player[] = [
  { name: 'Alexis', isAvailable: true, picture: '' },
  {
    name: 'AnneLaure',
    isAvailable: true,
    picture: '',
    squad: SquadType.ROCKET,
  },
  {
    name: 'Arnaud',
    isAvailable: true,
    picture: '',
    squad: SquadType.BATAILLON,
  },
  { name: 'Aymen', isAvailable: true, picture: '', squad: SquadType.ROCKET },
  { name: 'Bertrand', isAvailable: true, picture: '' },
  { name: 'Elsa', isAvailable: true, picture: '', squad: SquadType.BATAILLON },
  { name: 'Fatma', isAvailable: true, picture: '', squad: SquadType.BATAILLON },
  { name: 'Gildas', isAvailable: true, picture: '', squad: SquadType.ROCKET },
  { name: 'Mathieu', isAvailable: true, picture: '' },
  { name: 'Maxime', isAvailable: true, picture: '', squad: SquadType.ROCKET },
  { name: 'Mehdi', isAvailable: true, picture: '' },
  { name: 'Omar', isAvailable: true, picture: '', squad: SquadType.BATAILLON },
  { name: 'Rawan', isAvailable: false, picture: '' },
  { name: 'Valentyn', isAvailable: true, picture: '', squad: SquadType.ROCKET },
  {
    name: 'Pavel',
    isAvailable: true,
    picture: '',
    squad: SquadType.BATAILLON,
  },
  { name: 'Yi-Ching', isAvailable: true, picture: '', squad: SquadType.ROCKET },
  {
    name: 'Yichao',
    isAvailable: true,
    picture: '',
    squad: SquadType.BATAILLON,
  },
  {
    name: 'Oumaima',
    isAvailable: true,
    picture: '',
    squad: SquadType.BATAILLON,
  },
];
