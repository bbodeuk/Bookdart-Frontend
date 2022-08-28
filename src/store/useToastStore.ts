import create from 'zustand';
import { ToastStore } from '~/@types/useToastStore';

export default create<ToastStore>((set) => ({
  open: false,
  setOpen: (open) => {
    set((state) => ({ ...state, open }));
  },
}));
