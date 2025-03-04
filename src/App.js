import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import AddOrder from './Pages/AddOrder';
import List from './Pages/List';
import Order from './Pages/Order';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  const url='http://localhost:4000';

  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="appContent">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<AddOrder url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
