import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDrawerStore } from '~/store';
import Drawer from '~/components/Drawer';
import GlobalNavigation from '~/components/GlobalNavigation';
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
        />
        <Drawer
          type="right"
          revealed={rightDrawerRevealed}
          onClose={() => setRightDrawerRevealed(false)}
        />
      </BrowserRouter>
    </Container>
  );
}
