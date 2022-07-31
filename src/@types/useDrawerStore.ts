export interface DrawerStore {
  leftDrawerRevealed: boolean;
  setLeftDrawerRevealed: (leftDrawerRevealed: boolean) => void;
  rightDrawerRevealed: boolean;
  setRightDrawerRevealed: (rightDrawerRevealed: boolean) => void;
}
