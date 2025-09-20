import NavBar from "./NavBar.jsx"
import SignUp from "./SignUp.JSX"
import SignIn from "./SignIn.jsx"
import Home from "./Home.jsx"
import {Routes,Route} from 'react-router-dom'
function App() {


  return (
    
      <Routes>
 <Route path="/signup"element={<SignUp/>}/>
 <Route path="/signin"element={<SignIn/>}/>
 <Route path="/home"element={<Home/>}/>

      </Routes>

    
  )
}

export default App
