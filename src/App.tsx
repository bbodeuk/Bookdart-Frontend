import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDrawerStore } from '~/store';
import Drawer from './components/Drawer';
import GlobalNavigation from './components/GlobalNavigation';
import Bookmarks from './pages/Bookmarks';
import Home from './pages/Home';

export default function App() {
  const {
    leftDrawerRevealed,
    setLeftDrawerRevealed,
    rightDrawerRevealed,
    setRightDrawerRevealed,
  } = useDrawerStore();

  return (
    <BrowserRouter>
      <GlobalNavigation />
      <button type="button" onClick={() => setLeftDrawerRevealed(true)}>
        Open drawer
      </button>
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
  );
}
