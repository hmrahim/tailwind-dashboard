import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import Allstudents from './Components/Pages/Allstudents';
import StudentDetails from './Components/Pages/StudentDetails';
import AdmitionForm from './Components/Pages/AdmitionForm';

function App() {
  return (
    <div className="" data-theme="light">
      
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='allstudent' element={<Allstudents/>}/>
          <Route path='studentdetails' element={<StudentDetails/>}/>
          <Route path='admitionform' element={<AdmitionForm/>}/>
        </Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
