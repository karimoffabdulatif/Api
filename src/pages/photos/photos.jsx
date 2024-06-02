import { useEffect, useState } from 'react'
import './photos.css'
import axios from 'axios'
const Photos = () => {
  const [photos, setPhotos] = useState ([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
      setPhotos(response.data)

    })

  },[])
  return (
    <div>
      <h1 className='text-center'>Photos</h1>
      <table className='table table-bordered table-hover table-stripped'>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {
            photos.map((item,index)=>(
              <tr key={index}>
                <td>{item.albumId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.thumbnailUrl}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Photos