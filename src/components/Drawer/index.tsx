import { useEffect, useState } from 'react';
import { BackDrop, Content, Wrapper } from './styles';
import { DrawerProps } from './types';
import Portal from './Potal';

export default function Drawer({
  type = 'left',
  open = true,
  onClose,
  children,
}: DrawerProps) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setToggle((prev) => !prev);
      }, 250);
    }
  }, [open]);

  useEffect(() => {
    if (!toggle) {
      setTimeout(() => {
        onClose();
      }, 250);
    }
  }, [toggle]);

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
        />
      </Wrapper>
    </Portal>
  ) : null;
}
