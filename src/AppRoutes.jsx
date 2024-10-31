import { Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import App from "./App"
import Listagem from "./pages/Listagem"
import Formulario from "./pages/Formulario"
import DetalheProduto from "./pages/DetalheProduto"
import Alterar from "./pages/Alterar"

const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/formulario" element={<Formulario />} />
        </Routes>
    )
}

export default AppRoutes