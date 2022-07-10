import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useDrawer from '~/hooks/useDrawer';
import useDrawerStore from '~/store/useDrawerStore';
import Drawer from './Drawer';

export default function App() {
  const { open } = useDrawerStore();
  const { onOpen, onClose } = useDrawer();

  return (
    <BrowserRouter>
      <button type="button" onClick={onOpen}>
        Open drawer
      </button>
      <Routes>
        {/* FIXME: Update router with pages */}
        <Route path="/" element={<p>Hello world!</p>} />
      </Routes>
      <Drawer open={open} onClose={onClose} />
    </BrowserRouter>
  );
}
