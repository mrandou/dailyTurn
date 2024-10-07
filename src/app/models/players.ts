export const Players: Player[] = [
  { name: 'Alexis', isAvailable: true, picture: '' },
  { name: 'Arnaud', isAvailable: true, picture: '' },
  { name: 'Aymen', isAvailable: true, picture: '' },
  { name: 'Bertrand', isAvailable: true, picture: '' },
  { name: 'Charles', isAvailable: true, picture: '' },
  { name: 'Elsa', isAvailable: true, picture: '' },
  { name: 'Gildas', isAvailable: true, picture: '' },
  { name: 'Khalifa', isAvailable: true, picture: '' },
  { name: 'Mathieu', isAvailable: true, picture: '' },
  { name: 'Maxime', isAvailable: true, picture: '' },
  { name: 'Mehdi', isAvailable: true, picture: '' },
  { name: 'Omar', isAvailable: true, picture: '' },
  { name: 'Rawan', isAvailable: false, picture: '' },
  { name: 'Salathiel', isAvailable: true, picture: '' },
  { name: 'Yi-Ching', isAvailable: true, picture: '' },
  { name: 'Yichao', isAvailable: true, picture: '' },
];

export interface Player {
  name: string;
  isAvailable: boolean;
  picture: string;
}
