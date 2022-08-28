import { useEffect, useRef, useState } from 'react';
import { BackDrop, Content, Wrapper } from './styles';
import Portal from '../Portal';
import { DrawerProps } from './types';

export default function Drawer({
  type = 'left',
  revealed,
  onClose,
  children,
  handler,
}: DrawerProps) {
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(toggle);
  const setToggleWithRef = (data: boolean) => {
    toggleRef.current = data;
    setToggle(data);
  };

  useEffect(() => {
    setToggle(revealed);
  }, [revealed]);

  useEffect(() => {
    handler?.(toggle);
  }, [toggle]);

  useEffect(() => {
    const handleResize = () => {
      const { matches } = window.matchMedia('screen and (min-width: 1680px)');

      setToggleWithRef(matches);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (!toggle) {
      onClose();
    }
  };

  return (
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
  );
}
