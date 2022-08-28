import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDrawerStore, useUserStore } from '~/store';
import Drawer from '~/components/Drawer';
import GlobalNavigation from '~/components/GlobalNavigation';
import GroupContainer from '~/components/GroupContainer';
import Bookmarks from '~/pages/Bookmarks';
import Home from '~/pages/Home';
import { Container, LeftDrawerButton, RightDrawerButton } from './styles';

export default function App() {
  const {
    leftDrawerRevealed,
    setLeftDrawerRevealed,
    rightDrawerRevealed,
    setRightDrawerRevealed,
  } = useDrawerStore();
  const { group, fetchGroup } = useUserStore();

  useEffect(() => {
    if (group) {
      return;
    }

    fetchGroup();

    if (window.matchMedia('screen and (min-width: 1680px)').matches) {
      setLeftDrawerRevealed(true);
      setRightDrawerRevealed(true);
    }
  }, []);

  return (
    <Container>
      <BrowserRouter>
        <GlobalNavigation />
        <LeftDrawerButton
          type="button"
          onClick={() => setLeftDrawerRevealed(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
          </svg>
        </LeftDrawerButton>
        <RightDrawerButton
          type="button"
          onClick={() => setRightDrawerRevealed(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
          </svg>
        </RightDrawerButton>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks/:groupId" element={<Bookmarks />} />
        </Routes>
        <Drawer
          revealed={leftDrawerRevealed}
          onClose={() => setLeftDrawerRevealed(false)}
          handler={setLeftDrawerRevealed}
        />
        <Drawer
          type="right"
          revealed={rightDrawerRevealed}
          onClose={() => setRightDrawerRevealed(false)}
          handler={setRightDrawerRevealed}
        >
          {group?.map(({ groupId, name, visibility }) => (
            <GroupContainer
              groupId={groupId}
              name={name}
              visibility={visibility}
            />
          ))}
        </Drawer>
      </BrowserRouter>
    </Container>
  );
}
