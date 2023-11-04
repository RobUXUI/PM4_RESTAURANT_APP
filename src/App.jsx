
import { Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./views/Home/Home"
import Products from "./views/Productos/Products"
import Reservas from "./views/Reservas.JSX"
import Container from "react-bootstrap/esm/Container"


function App() {
return(
  <Container>
    <Routes>
      <Route path="/Home" element= {<Home />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/Reservas" element={<Reservas />}/>
    </Routes>
  </Container>
)
}

export default App;