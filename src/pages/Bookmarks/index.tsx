import { useParams } from 'react-router-dom';

export default function Bookmarks() {
  const { groupId } = useParams();

  return <div>{groupId}</div>;
}
