import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import ViewAllPosts from './Components/ViewAllPosts';
import { BrowserRouter, Routes, Route    } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddPost />} />
      <Route path="/ViewAll" element={<ViewAllPosts />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
