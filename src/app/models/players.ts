export const Players: Player[] = [
  { name: "Adrien", isAvailable: true },
  { name: "Arnaud", isAvailable: true },
  { name: "Aymen", isAvailable: true },
  { name: "Bertrand", isAvailable: true },
  { name: "Charles", isAvailable: true },
  { name: "Elsa", isAvailable: true },
  { name: "Gildas", isAvailable: true },
  { name: "Julien", isAvailable: true },
  { name: "Mathieu", isAvailable: true },
  { name: "Maxime", isAvailable: true },
  { name: "Mehdi", isAvailable: true },
  { name: "Omar", isAvailable: true },
  { name: "Rawan", isAvailable: false },
  { name: "Sylvain", isAvailable: true },
  { name: "Yi-Ching", isAvailable: true },
  { name: 'Yichao', isAvailable: true }
]

export interface Player {
  name: string;
  isAvailable: boolean;
}
