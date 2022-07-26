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
import AllSubjects from './Components/Pages/AllSubject';
import AddSubject from './Components/Pages/AddSubject';
import AllShift from './Components/Pages/AllShift';
import AddShift from './Components/Pages/AddShift';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="" data-theme="light">
      
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='allstudent' element={<Allstudents/>}/>
          <Route path='studentdetails/:id' element={<StudentDetails/>}/>
          <Route path='admitionform' element={<AdmitionForm/>}/>
          <Route path='allteachers' element={<AllTeachers/>}/>
          <Route path='teacherdetails/:id' element={<TeacherDetails/>}/>
          <Route path='addteacher' element={<AddTeacher/>}/>
          <Route path='allclasses' element={<AllClass/>}/>
          <Route path='addclass' element={<AddClass/>}/>
          <Route path='allsubjects' element={<AllSubjects/>}/>
          <Route path='addsubject' element={<AddSubject/>}/>
          <Route path='allshift' element={<AllShift/>}/>
          <Route path='addshift' element={<AddShift/>}/>
        </Route>
      </Routes>
     
     <ToastContainer/>
    </div>
  );
}

export default App;
