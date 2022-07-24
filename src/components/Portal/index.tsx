import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const el = document.getElementById('portal') as HTMLElement;
  return ReactDOM.createPortal(children, el);
}
