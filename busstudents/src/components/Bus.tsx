import {useState} from 'react'
import {Props, Passageiro} from "@/data/students"

type Students= {
    e: Props[]
}


export const Bus=({e}: Students )=>{
    const [secret, setSecret] = useState<Students[]>([])

    function toggleItem(id){
        setSecret([
            ...secret,
            secret[item.id].checked = !secret[item.id].checked
        ])
    }
    return(
    <div className='state'>
    
    {e.map(item =>(
        <button key={item.id} className='btn btn-dark w-100' onClick={() => toggleItem(item.id)}>{item.linha} /{item.placa}</button>
    ))}
    </div>)
}

{/* <div>
    <button className='btn btn-dark' onClick={area51}>area secreta</button>
</div> */}