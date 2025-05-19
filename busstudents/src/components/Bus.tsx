import {useState} from 'react'
import {Props} from "@/data/students"

type Students= {
    e: Props[]
}


export const Bus=({e}: Students )=>{
    const[secret, setSecret] = useState(false)
    function toggleItem(index){
        setSecret(!secret)
    }
    return(
    <div className='state'>
    
    {e.map(item =>(
        <button key={item.id} className='btn btn-dark w-100' onClick={() => toggleItem(index)}>{item.linha} /{item.placa}</button>
        {secret &&
            <div>
            ver area secreta
            </div>
        }
    ))}
    </div>)
}

{/* <div>
    <button className='btn btn-dark' onClick={area51}>area secreta</button>
</div> */}