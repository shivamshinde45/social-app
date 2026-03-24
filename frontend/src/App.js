import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Feed from "./Feed";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
