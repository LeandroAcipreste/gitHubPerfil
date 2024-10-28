import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setMaetiaA] = useState(0);
    const [materiaB, setMaetiaB] = useState(0);
    const [materiaC, setMaetiaC] = useState(0);
    const [nome, setNome] = useState ('');

    useEffect(() => {
        console.log('O componente inicializou');

        return () => {
            console.log('O componente finalizou')
        }
    }, []);
    
    useEffect(() => {
        console.log('O estado mudou');
    }, [nome]);

    useEffect(() => {
        console.log("o estado mudou para" + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        setNome(estadoanterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome}, Você foi aprovado</p>
            )
        } else {
            return(
                <p>Olá {nome}, Você foi reprovado</p>
            )
        }
    }

    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => 
                    <li key={item}>{item}</li>
                )}
            </ul>

            <input type="string" placeholder="Aluno" onChange={({target}) => setNome(target.value)}/>
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMaetiaA(parseFloat(target.value))}/>
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMaetiaB(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMaetiaC(parseFloat(evento.target.value))}/>
            {renderizaResultado()};
            
        </form>
    )
}

export default Formulario