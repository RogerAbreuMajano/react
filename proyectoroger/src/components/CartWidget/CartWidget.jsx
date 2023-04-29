import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3050/3050238.png"
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
        <strong>3</strong>

    </div>
  )
}

export default CartWidget