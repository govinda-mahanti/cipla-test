import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import AllDoctors from "./Pages/AllDoctors";
import { ToastContainer } from "react-toastify";
import Upload from "./Components/Upload";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/all-doctors" element={<AllDoctors />} />
            <Route path="/upload" element={<Upload/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
