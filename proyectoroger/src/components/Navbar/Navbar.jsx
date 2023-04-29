import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
  return (
    <header>
      <div>
      <h1> La casita del té</h1>
      </div>
       

        <nav>
            <ul>
                <li>té</li>
                <li>Cafe</li> 
                <li>Plantas</li>
                <li>libros</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default Navbar
