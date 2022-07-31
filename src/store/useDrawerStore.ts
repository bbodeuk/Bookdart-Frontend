import create from 'zustand';
import { DrawerStore } from '~/@types/useDrawerStore';

export default create<DrawerStore>((set) => ({
  leftDrawerRevealed: false,
  setLeftDrawerRevealed: (leftDrawerRevealed) => {
    set((state) => ({ ...state, leftDrawerRevealed }));
  },
  rightDrawerRevealed: false,
  setRightDrawerRevealed: (rightDrawerRevealed) => {
    set((state) => ({ ...state, rightDrawerRevealed }));
  },
}));
