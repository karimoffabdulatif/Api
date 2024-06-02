import { useEffect, useState } from 'react'
import './comments.css'
import axios from 'axios'
const Comments = () => {
  const [comments, setComments] = useState ([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then(response=>{
      setComments(response.data)

    })

  },[])
  return (
    <div>
      <h1 className='text-center'>Comments</h1>
      <table className='table table-bordered table-hover table-stripped'>
        <thead>
          <tr>
            <th>postId</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map((item,index)=>(
              <tr key={index}>
                <td>{item.postId}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Comments