import ToastContainers from "./Utils/ToastContainer";
import PageNotFound404 from "./Errors/PageNotFound404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Pages/Base";
import './App.css';
import Home from "./Pages/Home";
import Sidebar from "./Pages/Sidebar";
import Tbase from "./teacher-portal/Tbase";
import TDashboard from "./teacher-portal/TDashboard";


function App() {
  return (
    <>
      <BrowserRouter>

        {/* ToastContainer */}
        <ToastContainers />

        {/* Routes */}
        <Routes>

          {/* Web Routes */}
          <Route path='/' element={<Base><Home/></Base>} />
          <Route path='/side-bar' element={<Base><Sidebar/></Base>} />
                    <Route path='/teacher-portal' element={<Base><TDashboard/></Base>} />
 


          <Route path='*' element={<PageNotFound404 />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
