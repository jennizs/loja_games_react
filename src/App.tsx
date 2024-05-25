import Home from './pages/Home';
import './App.css';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import FormularioCategoria from './components/categorias/formCategoria/FormCategoria';
import DeleteCategoria from './components/categorias/deleteCategoria/DeleteCategoria';
import ListarCategoria from './components/categorias/listarCategoria/ListarCategoria';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategoria />} />
              <Route path="/cadastrar-Categoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeleteCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;