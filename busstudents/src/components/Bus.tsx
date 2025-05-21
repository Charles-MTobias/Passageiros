import {useState} from 'react'
import {Props, Passageiro} from "@/data/students"

type Students= {
    e: Props[]
}


export const Bus=({e}: Students )=>{
    const [secret, setSecret] = useState<{ id: number; checked: boolean }[]>([]);
    const [handlebtn, setHandleBtn] = useState(false)

    function toggleItem(id: number) {
        setSecret(prev =>
            prev.some(item => item.id === id)
                ? prev.map(item =>
                    item.id === id ? { ...item, checked: !item.checked } : item
                  )
                : [...prev, { id, checked: true }]
        );
    }

    function active(){
        setHandleBtn(!handlebtn)
    }
    return (
        <div>
            {e.map(item => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <button
                        className='btn btn-dark w-100'
                        onClick={() => toggleItem(item.id)}
                    ><div><h1>{item.linha}</h1> Motorista: {item.motorista} / {item.placa}</div>
                        
                    </button>
                    {/* Exibe os passageiros se o botão estiver "checked" */}
                    {secret.find(s => s.id === item.id && s.checked) && (
                        <div>
                        <table className='w-100'>
                            <thead>
                            <tr className='bg-success border border-secondary text-white'>
                            <th className='p-3'>Nome</th>
                            <th className='p-3'>Veio</th>
                            <th className='p-3'>Sala</th>
                            </tr>
                            </thead>
                            <tbody>
                                {item.passageiro?.map((passageiro: Passageiro, idx: number) => (
                                    <tr key={idx} className='bg-white'>
                                        <td className='p-3'>{passageiro.aluno}</td>
                                        <td>
                                            <button onClick={ () => active()}>
                                                {/* {passageiro.veio ? 'veio' : 'não veio'} */}
                                                {passageiro.veio && <div className='btn btn-success'>Active</div>}
                                                {!passageiro.veio && <div className='btn btn-danger'>inactive</div>}
                                            </button>
                                            
                                        </td>
                                        <td className='p-3'>{passageiro.sala}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
    /*
    <div className='state'>
    
    {e.map(item =>(
        <button key={item.id} className='btn btn-dark w-100' onClick={() => toggleItem(item.id)}>{item.linha} /{item.placa}</button>
    ))}
    </div>)*/
}

{/* <div>
    <button className='btn btn-dark' onClick={area51}>area secreta</button>
</div> */}