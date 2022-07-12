import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* FIXME: Update router with pages */}
        <Route path="/" element={<p>Hello world!</p>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
