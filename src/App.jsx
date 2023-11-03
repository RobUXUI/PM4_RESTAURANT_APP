
import { Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./views/Home"
import Products from "./views/Products"
import Contacto from "./views/Contacto.JSX"
import Container from "react-bootstrap/esm/Container"


function App() {
return(
  <Container>
    <Routes>
      <Route path="/Home" element= {<Home />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/Contacto" element={<Contacto />}/>
    </Routes>
  </Container>
)
}

export default App;