import './App.css';
import {Routes , Route } from 'react-router-dom'
import { UserInfoPage } from './Pages/userInfoPage';
import { SingleUserPage } from './Pages/singleUserPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<UserInfoPage />} />
        <Route path = '/users' element = {<UserInfoPage />} />
        <Route path = {`/users/:userId`} element = {<SingleUserPage />} />


      </Routes>

      

      
    </div>
  );
}

export default App;