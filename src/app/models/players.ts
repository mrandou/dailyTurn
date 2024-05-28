export enum Squads {
  ALL,
  FIRE,
  RAINBOW,
  DARK,
  GHOST
}

export const Players: Player[] = [
  { name: "Adrien", isAvailable: true, picture: "", squad: Squads.DARK },
  { name: "Arnaud", isAvailable: true, picture: "", squad: Squads.RAINBOW },
  { name: "Aymen", isAvailable: true, picture: "", squad: Squads.RAINBOW },
  { name: "Bertrand", isAvailable: true, picture: "", squad: Squads.DARK },
  { name: "Charles", isAvailable: true, picture: "", squad: Squads.RAINBOW },
  { name: "Elsa", isAvailable: true, picture: "", squad: Squads.RAINBOW },
  { name: "Gildas", isAvailable: true, picture: "", squad: Squads.FIRE },
  { name: "Julien", isAvailable: false, picture: "", squad: Squads.GHOST },
  { name: "Mathieu", isAvailable: true, picture: "", squad: Squads.DARK },
  { name: "Maxime", isAvailable: true, picture: "", squad: Squads.FIRE},
  { name: "Mehdi", isAvailable: true, picture: "", squad: Squads.GHOST },
  { name: "Omar", isAvailable: true, picture: "", squad: Squads.RAINBOW },
  { name: "Rawan", isAvailable: false, picture: "", squad: Squads.GHOST },
  { name: "Sylvain", isAvailable: true, picture: "", squad: Squads.GHOST },
  { name: "Yi-Ching", isAvailable: true, picture: "", squad: Squads.FIRE},
  { name: 'Yichao', isAvailable: true, picture: "", squad: Squads.FIRE }
]

export interface Player {
  name: string;
  isAvailable: boolean;
  picture: string;
  squad: Squads;
}

export interface SquadSelection {
  name: string;
  squad: Squads;
  selected: boolean;
  group: Player[];
}

export const SelectionGroup: SquadSelection[] = [
  {
    name: "all",
    squad: Squads.ALL,
    selected: true,
    group: Players  
  },
  {
    name: "fire",
    squad: Squads.FIRE,
    selected: false,
    group: Players.filter(p => p.squad === Squads.FIRE)
  },
  {
    name: "rainbow",
    squad: Squads.RAINBOW,
    selected: false,
    group: Players.filter(p => p.squad === Squads.RAINBOW)
  },
  {
    name: "dark",
    squad: Squads.DARK,
    selected: false,
    group: Players.filter(p => p.squad === Squads.DARK)
  },
  // {
  //   name: "ghost",
  //   squad: Squads.GHOST,
  //   selected: false,
  //   group: Players.filter(p => p.squad === Squads.GHOST)
  // }
];