import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDrawerStore } from '~/store';
import Drawer from './components/Drawer';

export default function App() {
  const { open, setOpen } = useDrawerStore();

  return (
    <BrowserRouter>
      <button type="button" onClick={() => setOpen(true)}>
        Open drawer
      </button>
      <Routes>
        {/* FIXME: Update router with pages */}
        <Route path="/" element={<p>Hello world!</p>} />
      </Routes>
      <Drawer open={open} onClose={() => setOpen(false)} />
    </BrowserRouter>
  );
}
