import { useState } from 'react';
import Drawer from './Drawer';

export default function App() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <Drawer type="right" open={open} onClose={handleToggle}>
        Hi!
      </Drawer>
      <button type="button" onClick={handleToggle}>
        Drawer button
      </button>
      <div />
    </>
  );
}
