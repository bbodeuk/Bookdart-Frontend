import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookmarksFromGroup } from '~/api';
import CardContainer from '~/components/CardContainer';
import { Container, Loader } from './styles';
import { Bookmark } from '~/@types/domain';

export default function Bookmarks() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesLoaded = useMemo(() => new Set(), [groupId]);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement>(null);

  const getBookmarks = useCallback(
    async (page: number) => {
      if (!groupId) {
        // FIXME: Fix link
        navigate('/error');
        return;
      }

      if (pagesLoaded.has(page)) {
        return;
      }

      setLoading(true);
      pagesLoaded.add(page);
      const response = await getBookmarksFromGroup({ groupId, page });

      if (!response.ok) {
        setLoading(false);
        return;
      }

      setBookmarks((prev) => [...prev, ...response.data.bookmarks]);
      setLoading(false);
    },
    [groupId],
  );

  useEffect(() => {
    setBookmarks([]);
    setCurrentPage(1);
    setLoading(false);

    (async () => {
      await getBookmarks(currentPage);
    })();
  }, [groupId]);

  useEffect(() => {
    getBookmarks(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!loader.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [target] = entries;

      if (!target.isIntersecting) {
        return;
      }

      setCurrentPage((prev) => prev + 1);
    });

    observer.observe(loader.current);

    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [loader.current]);

  return (
    <Container>
      <CardContainer items={bookmarks} />
      {/* TODO: Implement loader component */}
      <Loader ref={loader} loading={loading}>
        Loading...
      </Loader>
    </Container>
  );
}
