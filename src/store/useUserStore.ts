import create from 'zustand';
import { getGroups } from '~/api';
import { UserStore } from '~/@types/useUserStore';

export default create<UserStore>((set) => ({
  setGroup(group) {
    set((state) => ({ ...state, group }));
  },
  fetchGroup: async () => {
    const response = await getGroups();

    if (!response || !response.ok) {
      return [];
    }

    const { groups } = response.data;

    set((state) => ({ ...state, group: groups }));

    return groups;
  },
  tags: [],
  setTags(tags) {
    set((state) => ({ ...state, tags }));
  },
}));
