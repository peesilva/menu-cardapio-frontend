import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
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
      <button onClick={handleOpenModal}><h4>novo carro</h4></button>
    </div>
  )
}

export default App