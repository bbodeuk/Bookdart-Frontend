import { useState } from 'react';
import Drawer from './Drawer';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open drawer
      </button>
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
