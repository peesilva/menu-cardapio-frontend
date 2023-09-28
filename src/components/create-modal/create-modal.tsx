import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();
    const [Id] = useState(0);


    const handleVoltar = () => {
        window.location.reload();
      };
      const handleSubmit = () => {
          const foodData: FoodData = {
              title, 
              price,
              image,
              Id
          }
          mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="subtitulo">
                <div className='titulo'>
                <h2>Anuncie um novo carro</h2> </div>
                <form className="input-container">
                    <Input label="titulo" value={title} updateValue={setTitle}/>
                    <Input label="preco" value={price} updateValue={setPrice}/>
                    <Input label="imagem" value={image} updateValue={setImage}/>
                </form>
                <div className="botoes-container">
                <button onClick={handleVoltar} className="btn-voltar">
                    {isLoading ? 'voltando...' : 'voltar'}
                </button>
                <button onClick={handleSubmit} className="btn-postar">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
                </div>
            </div>
        </div>
    )
}