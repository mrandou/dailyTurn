export const ARCARDE_COLOR: ArcadeColor[] = [
  { background: '#e3d6b7', arcade: COLORS.BRONZE },
  { background: '#ffe2f3', arcade: COLORS.PINK },
  { background: '#b5ebba', arcade: COLORS.GREEN },
  { background: '#c6d8fc', arcade: COLORS.BLUE },
  { background: '#e2ec8e', arcade: COLORS.YELLOW },
  { background: '#f0d3f9', arcade: COLORS.PURPLE },
  { background: '#f695ae', arcade: COLORS.RED },
];
interface ArcadeColor {
  background: string;
  arcade: COLORS;
}

const enum COLORS {
  BRONZE = 0,
  PINK = 260,
  CYAN = 140,
  GREEN = 70,
  BLUE = 180,
  YELLOW = 30,
  PURPLE = 230,
  RED = 300,
}
