import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/signIn/sign-in";
import { SignUp} from "./pages/sign-up"
import { LandingPage } from "./pages/landing-page";
import { Events } from "./pages/events";
import { HonorStudents } from "./pages/honor-students";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/honor-students" element={<HonorStudents/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
