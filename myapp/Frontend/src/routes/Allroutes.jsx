import { Route, Routes } from "react-router-dom"
import Navbars from "../Componants/Navbar"
import Search from "../Componants/Search"
function Allroutes() {

  return (
    <div>
        <Navbars/>
        <Routes>
            <Route path="/" element={<Search/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes