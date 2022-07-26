import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDrawerStore } from '~/store';
import Drawer from './components/Drawer';
import Bookmarks from './pages/Bookmarks';
import Home from './pages/Home';

export default function App() {
  const { open, setOpen } = useDrawerStore();

  return (
    <BrowserRouter>
      <button type="button" onClick={() => setOpen(true)}>
        Open drawer
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks/:groupId" element={<Bookmarks />} />
      </Routes>
      <Drawer open={open} onClose={() => setOpen(false)} />
    </BrowserRouter>
  );
}
