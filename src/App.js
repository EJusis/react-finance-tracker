import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import {useAuthContext} from "./hooks/useAuthContext";

function App() {
    const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
        { authIsReady && (
            <BrowserRouter>
                <Navbar />
                <Routes>

                        <Route
                            index
                            path='/'
                            element={user ? <Home /> : <Login/>}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/signup' element={<Signup />}/>


                </Routes>


            </BrowserRouter>
        )}

    </div>
  );
}

export default App;
