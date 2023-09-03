import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './views/Auth';
import HomeLayout from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}/>
          <Route path='/home' element={<HomeLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
