import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalNavigation from './components/GlobalNavigation';
import Toast from './components/Toast';
import Bookmarks from './pages/Bookmarks';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks/:groupId" element={<Bookmarks />} />
        <Route path="/toast" element={<Toast />} />
      </Routes>
    </BrowserRouter>
  );
}
