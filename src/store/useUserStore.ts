import create from 'zustand';
import { UserStore } from '~/@types/useUserStore';

export default create<UserStore>((set) => ({
  group: [],
  setGroup(group) {
    set((state) => ({ ...state, group }));
  },
  tags: [],
  setTags(tags) {
    set((state) => ({ ...state, tags }));
  },
}));
