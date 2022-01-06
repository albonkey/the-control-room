import './App.scss';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import StorePage from './pages/StorePage/StorePage';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (

      <div className="app">

        <SideMenu />
        <Routes>
          <Route path='/store' element={ <StorePage /> } />
          <Route path='/' exact={true} element={ <HomePage /> } />
        </Routes>
      </div>

  );
}

export default App;
