
import { Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./componentes/home"
import Products from "./componentes/Products"


function App() {
return(
  <div>
    <Routes>
      <Route path="/home" element= {<Home />}/>
      <Route path="/products" element={<Products />}/>
    </Routes>
  </div>
)
}

export default App;