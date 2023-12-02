import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { DeleteModal } from './components/delete-modal/delete-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teste2, teste1] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const teste = () => {
    teste1(prev => !prev)
  }


  return (
    <div className="container">
      <h1>Veja o estoque</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
            Id={foodData.Id}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      {teste2 && <DeleteModal closeModal={teste}/>}
      <button className='excluir' onClick={teste}>excluir carro</button>
      <button className='novo' onClick={handleOpenModal}><h4>novo carro</h4></button>
    </div>
  )
}

export default App