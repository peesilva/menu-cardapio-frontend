import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';


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

export function DeleteModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price] = useState(0);
    const [image] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();
    const [Id] = useState(1);


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
                <h2>Deletar veiculo aqui</h2> </div>
                <form className="input-container">
                    <Input label="insira  o id que deseja deletar" value={title} updateValue={setTitle}/>
                </form>
                <div className="botoes-container">
                <button onClick={handleVoltar} className="btn-voltar">
                    {isLoading ? 'voltando...' : 'voltar'}
                </button>
                <button onClick={handleSubmit} className="btn-postar">
                    {isLoading ? 'excluindo...' : 'excluir'}
                </button>
                </div>
            </div>
        </div>
    )
}