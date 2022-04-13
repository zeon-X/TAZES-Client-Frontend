import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MemberSignup } from './components/membersignup/MemberSignup.js';
import { MemberSignIn } from './components/membersignin/MemberSignIn.js';
import { MemberProfile } from './components/memberprofile/MemberProfile';
import { MemberRequestAdmin } from './components/MemberRequestAdmin/MemberRequestAdmin';
import { MemberShowAllAdmin } from './components/MemberShowAllAdmin/MemberShowAllAdmin.js';
import { AddBook } from './components/AddBook/AddBook';

function App() {
  return (


    <div className="App">
      <Router>

        <Routes>

          <Route path='/' exact element={<AddBook/>} />
          <Route path='/acc' exact element={<MemberShowAllAdmin/>} />
          <Route path='/req' exact element={<MemberRequestAdmin />} />
          <Route path='/api/member/signup' element={<MemberSignup />} />
          <Route path='/api/member/signin' element={<MemberSignIn />} />
          <Route path='/api/member/showProfile/:rollId' element={<MemberProfile />} />





        </Routes>

      </Router>
    </div>


  );
}

export default App;
