import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Proposition from './components/proposition/Proposition';
import Homepage from './components/homepage/Homepage';
import Moderators from './components/moderators/Moderators';
import Complaint from './components/proposition/Complaint/Complaint';
import CreateComplaint from './components/proposition/Complaint/CreateComplaint';
import Notifications from './components/notifications/Notifications';
import Education from './components/education/Education';
import User from './components/education/User';
import Authorization from './UI/Authorization';
import ErrorAuthorization from './UI/ErrorAuthorization';


function App() {


  return (
    <HashRouter basename='/'>
      <div className="App">
        <Routes>
          <Route path='/proposition' element={<Proposition/>} />
          <Route path='/proposition/complaint' element={<Complaint/>} />
          <Route path='/proposition/createcomplaint' element={<CreateComplaint/>} />
          <Route path='/moderators' element={<Moderators/>} />
          <Route path='/notification' element={<Notifications/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/education/user' element={<User/>} />
          <Route path='/homepage' element={<Homepage/>} />
          <Route path='/errorauthorization' element={<ErrorAuthorization/>} />
          <Route path='/' element={<Authorization/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
