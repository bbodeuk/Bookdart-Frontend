import create from 'zustand';
import { StorageStore } from '~/@types/useStorageStore';

export default create<StorageStore>((set) => ({
  lastViewed: localStorage.getItem('lastViewed') ?? '',
  setLastViewed(lastViewed) {
    set((state) => ({ ...state, lastViewed }));
  },
}));
