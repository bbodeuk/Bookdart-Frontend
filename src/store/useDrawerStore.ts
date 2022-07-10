import create from 'zustand';
import { DrawerStore } from '~/@types/useDrawerStore';

export default create<DrawerStore>((set) => ({
  open: false,
  setOpen: (open) => {
    set((state) => ({ ...state, open }));
  },
}));
