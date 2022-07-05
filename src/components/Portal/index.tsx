import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export default function Portal({ children }: { children: ReactNode }) {
  const el = document.getElementById('portal') as HTMLElement;
  return el && ReactDOM.createPortal(children, el);
}
