import { useContext } from 'react'
import {FiTrash} from 'react-icons/fi'
import { ProductsContext } from '../../contexts/products/products'

const CardItem = ({item}) => {
    const {cards,setCards} =useContext(ProductsContext)
    const handleDeleteButton =()=>{
        let filterd = cards.filter((el)=> el.cardName !== item.cardName )
        console.log(filterd);
        setCards([...filterd])
    }
  return (
    <div className="bg-white p-6 space-x-20  rounded-lg flex justify-between items-center">
        <span className="text-2xl uppercase">{item.cardName}</span>
        <button onClick={handleDeleteButton} className="bg-[#f52b2be7] hover:bg-[#bd1e1e] transition-colors duration-300 p-3 rounded-lg text-white">
          <FiTrash/>
        </button>
      </div>
  )
}

export default CardItem