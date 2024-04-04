import Allroutes from "./routes/Allroutes";
import { BrowserRouter } from "react-router-dom";
 import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Allroutes />
      </BrowserRouter>
    </div>
  );
}

export default App