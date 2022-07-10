import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Drawer from './Drawer';

export default function App() {
  const [open, setOpen] = useState(false);

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
