import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStorageStore, useUserStore } from '~/store';

export default function Home() {
  const navigate = useNavigate();
  const { fetchGroup } = useUserStore();
  const { lastViewed } = useStorageStore();

  useEffect(() => {
    (async () => {
      const group = await fetchGroup();
      const targetGroup = lastViewed || group?.[0].groupId;

      navigate(`/bookmarks/${targetGroup}}`);
    })();
  }, []);

  return <div>Loading...</div>;
}
