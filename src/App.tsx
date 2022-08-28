import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalNavigation from './components/GlobalNavigation';
import { ToastProvider } from './components/Toast';
import Bookmarks from './pages/Bookmarks';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <GlobalNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks/:groupId" element={<Bookmarks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
