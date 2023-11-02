
import { Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./views/Home"
import Products from "./views/Products"
import Contacto from "./views/Contacto.JSX"
import Container from "react-bootstrap/esm/Container"


function App() {
return(
  <Container className="my-3 px-3" >
    <Routes>
      <Route path="/home" element= {<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/Contacto" element={<Contacto />}/>
    </Routes>
  </Container>
)
}

export default App;