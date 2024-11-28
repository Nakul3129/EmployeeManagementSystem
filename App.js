 import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom"
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployee from './components/UpdateEmployee';
  
function App() {
  return (
    <div> 
      <Router> 
           <HeaderComponent />
           <div className="container">
              <Routes> 
              <Route path='/'  element={<ListEmployeeComponent />} />
              <Route path='/employee' element={<ListEmployeeComponent />} />
              <Route path='/addEmployee' element={<CreateEmployeeComponent />} />
              <Route path='/updateEmployee/:id' element={<UpdateUserWrapper />} />
              </Routes>
           </div>
           <FooterComponent />
       </Router>
    </div>
  );
}

function UpdateUserWrapper(){
  const {id} = useParams();
  return <UpdateEmployee id={id} />
}

export default App;
