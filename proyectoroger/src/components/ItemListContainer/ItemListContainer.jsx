import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h2 className='titulo'>Esto es un saludito de nuevo creo: {props.greeting}</h2>
  )
}

export default ItemListContainer