import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import SearchBook from './components/SearchBook';
import DeleteBook from './components/DeleteBook';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<AddBook/>}/>
      <Route path='/SearchBook' element={<SearchBook/>}/>
      <Route path='/DeleteBook' element={<DeleteBook/>}/>
      <Route path='/View' element={<View/>}/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
