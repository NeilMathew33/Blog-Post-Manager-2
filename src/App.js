import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import ViewAllPosts from './Components/ViewAllPosts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPost />} />
      <Route path="/ViewAll" element={<ViewAllPosts />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
