import { useEffect, useState } from 'react'
import './albums.css'
import axios from 'axios'
const Albums = () => {
  const [albums, setAlbums] = useState ([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/albums").then(response=>{
      setAlbums(response.data)

    })

  },[])
  return (
    <div>
      <h1 className='text-center'>Albums</h1>
      <table className='table table-bordered table-hover table-stripped'>
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {
            albums.map((item,index)=>(
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Albums