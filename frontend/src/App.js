import { Outlet } from 'react-router-dom';
import './App.css';
import Header1 from './Components/Navbar1/Header1';
import Header2 from './Components/Navbar2/Header2';

function App() {
  return (
    <div className=''>
      <div >
       <Header1/>
      </div>
      <div className=''>
        <Header2/>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
