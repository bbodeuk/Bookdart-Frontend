import create from 'zustand';
import { ToastStore } from '~/@types/useToastStore';

export default create<ToastStore>((set) => ({
  open: true,
  setOpen: (open) => {
    set((state) => ({ ...state, open }));
  },
}));
