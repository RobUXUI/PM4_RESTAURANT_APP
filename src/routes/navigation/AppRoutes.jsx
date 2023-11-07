// import { Routes,Route} from "react-router-dom";
// import Layout  from "./src/componentes/layout/layout";
// import Home  from "./src/views/Home/Home";
// import Nosotros  from "./src/views/Nosotros/Nosotros";
// import Products from "./src/views/Products/Products";
// import Reservas from "./src/views/Reservas/Reservas";



// const AppRoutes = () => {
//   return (
//     <>
 
//  <Routes>
//     <Route path="/" element={<Layout/>}> 
//       <Route path="/Home" element= {<Home />}/>
//       <Route path="/Nosotros" element={<Nosotros />}/>
//       <Route path="/Menu" element={<Products />}/>
//       <Route path="/Reservas" element={<Reservas />}/>
//     </Route>
//     </Routes>

//     </>
//   )
// }

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import Layout from "../../componentes/layout/layout";
import Home from "../../views/Home/Home";
import Nosotros from "../../views/Nosotros/Nosotros";
import Products from "../../views/Menu/Products";
import Reservas from "../../views/Reservas/Reservas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="Home" element={<Home />} />
        <Route path="Nosotros" element={<Nosotros />} />
        <Route path="Menu" element={<Products />} />
        <Route path="Reservas" element={<Reservas />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
