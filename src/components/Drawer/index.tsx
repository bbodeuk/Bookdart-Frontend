import { useEffect, useState } from 'react';
import { BackDrop, Content, Wrapper } from './styles';
import Portal from '../Portal';
import { DrawerProps } from './types';

export default function Drawer({
  type = 'left',
  revealed,
  onClose,
  children,
}: DrawerProps) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(revealed);
  }, [revealed]);

  const handleTransitionEnd = () => {
    if (!toggle) {
      onClose();
    }
  };

  return revealed ? (
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
