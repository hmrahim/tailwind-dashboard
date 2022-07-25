import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import Allstudents from './Components/Pages/Allstudents';
import StudentDetails from './Components/Pages/StudentDetails';
import AdmitionForm from './Components/Pages/AdmitionForm';
import AllTeachers from './Components/Pages/AllTeachers';
import TeacherDetails from './Components/Pages/TeacherDetails';
import AddTeacher from './Components/Pages/AddTeacher';
import AllClass from './Components/Pages/AllClass';
import AddClass from './Components/Pages/AddClass';

function App() {
  return (
    <div className="" data-theme="light">
      
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='allstudent' element={<Allstudents/>}/>
          <Route path='studentdetails' element={<StudentDetails/>}/>
          <Route path='admitionform' element={<AdmitionForm/>}/>
          <Route path='allteachers' element={<AllTeachers/>}/>
          <Route path='teacherdetails' element={<TeacherDetails/>}/>
          <Route path='addteacher' element={<AddTeacher/>}/>
          <Route path='allclasses' element={<AllClass/>}/>
          <Route path='addclass' element={<AddClass/>}/>
        </Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
