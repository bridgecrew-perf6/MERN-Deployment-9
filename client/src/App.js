import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import Add from './views/Add';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Favorite authors</h1>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/new' element={<Add/>}/>
          <Route path='/edit/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
