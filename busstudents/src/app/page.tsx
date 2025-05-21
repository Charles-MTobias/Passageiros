"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import {Bus} from '@/components/Bus'
import {Students} from '@/data/students'

export const Page= ()=>{


  return(
    <div className='page container'>
      <Bus e={Students}/>
    </div>
  )
}

export default Page