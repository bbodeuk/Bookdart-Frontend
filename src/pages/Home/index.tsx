import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGroups } from '~/api';
import { useStorageStore, useUserStore } from '~/store';

export default function Home() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setGroup } = useUserStore();
  const { lastViewed } = useStorageStore();

  useEffect(() => {
    (async () => {
      const response = await getGroups();

      if (!response.ok) {
        setError(true);
        return;
      }

      const { groups } = response.data;
      const targetGroup = lastViewed || groups[0].groupId;

      setGroup(groups);
      navigate(`/bookmarks/${targetGroup}}`);
    })();
  }, []);

  if (error) {
    <div>Failed to fetch</div>;
  }

  return <div>Loading...</div>;
}
