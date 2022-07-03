import create from 'zustand';
import { DialogStore } from '~/@types/useDialogStore';

export default create<DialogStore>((set) => ({
  title: '',
  setTitle: (title) => {
    set((state) => ({ ...state, title }));
  },
  description: '',
  setDescription: (description) => {
    set((state) => ({ ...state, description }));
  },
  type: 'alert',
  setType: (type) => {
    set((state) => ({ ...state, type }));
  },
  revealed: false,
  setRevealed(revealed) {
    set((state) => ({ ...state, revealed }));
  },
  setResponseHandler(responseHandler) {
    set((state) => ({ ...state, responseHandler }));
  },
}));
