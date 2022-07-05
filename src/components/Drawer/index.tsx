import { useEffect, useState } from 'react';
import { BackDrop, Content, Wrapper } from './styles';
import { DrawerProps } from './types';
import Portal from '../Portal';

export default function Drawer({
  type = 'left',
  open,
  onClose,
  children,
}: DrawerProps) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setToggle((prev) => !prev);
      return;
    }

    document.body.removeAttribute('style');
  }, [open]);

  const handleTransitionEnd = () => {
    if (!toggle) {
      onClose();
    }
  };

  return open ? (
    <Portal>
      <Wrapper>
        <Content type={type} toggle={toggle}>
          {children}
        </Content>
        <BackDrop
          type={type}
          toggle={toggle}
          onClick={() => setToggle((prev) => !prev)}
          onTransitionEnd={handleTransitionEnd}
        />
      </Wrapper>
    </Portal>
  ) : null;
}
