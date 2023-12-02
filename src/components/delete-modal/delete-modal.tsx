import { useEffect, useState } from 'react';
import { useDeleteFoodData } from '../../hooks/useFoodDataDELETE';


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
            <input
                value={value}
                onChange={event => updateValue(event.target.value)}
                placeholder="Insira o ID aqui" // Adicionando o placeholder
            ></input>
        </>
    )
}

export function DeleteModal({ closeModal }: ModalProps){
    const [carId, setCarId] = useState<number | null>(null); // Alteração no estado inicial para aceitar null
    const { mutate, isSuccess, isLoading } = useDeleteFoodData();

    const handleVoltar = () => {
        window.location.reload();
    };
    
    const handleSubmit = () => {
        if (carId !== null) { // Garante que o carId não seja null antes de chamar a mutação
            mutate(carId); // Passa apenas o número do ID
        }
    };

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess]);


    return(
        <div className="modal-overlay">
            <div className="subtitulo">
                <div className='titulo'>
                <h2>Deletar veiculo aqui</h2> </div>
                <form className="input-container">
                    <Input label="insira  o id que deseja deletar" value={carId || ''} updateValue={value => setCarId(Number(value))}/> {/* Converte o valor para número */}
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