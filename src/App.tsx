
import { useEffect, useState } from 'react'
import './App.scss'
import type { DataItem } from './types/types';

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err)
    )
  },[])

  return (
    
   <div className='App' >
      {
        data.map((elem)=>{
        return(
          <h1 key={elem.id}>{elem.title}</h1>
        )
        })
      }
   </div>
    
  )
}

export default App
