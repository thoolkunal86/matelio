
import LoginForm from './app/components/LoginForm';
import Layout from './app/components/Layout';
import { Route, Routes } from 'react-router-dom';
import "primeflex/primeflex.css";    
import "./App.css";
import Profile from './app/components/Profile';
import PrivateRoute from './features/auth/PrivateRoute';
import ProfileEdit from './app/components/ProfileEdit';

function App() {
  return (
    <Routes>
        <Route  element={<Layout/>}>
          <Route path='login' element={<LoginForm/>}/>
        </Route>

        <Route path='/' element={<PrivateRoute/>}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='profile-edit' element={<ProfileEdit/>}/>
        </Route>
    </Routes>
    
  );
}

export default App;
