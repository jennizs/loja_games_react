import { Basket } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../contexts/AuthContext"


function Navbar() {


  const navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('o usuario foi desconectado!')
    navigate('/login')
  }




  return (
    <>
      <div className='w-full  bg-[#fca5a5] text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>JennizsGames.com</div>

          <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Login</Link>
            <Link to='/home' className='hover:underline'>Home</Link>
            <div className='hover:underline'>Produtos</div>
            <div className='hover:underline'>Categorias</div>
            <div className='hover:underline'>Nova Categoria</div>
            <div className='hover:underline'>Perfil</div>
            <div className='underline-basket'>
              <Basket size={25} weight='bold' />
            </div>
            <Link to="" onClick={logout} className='hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
