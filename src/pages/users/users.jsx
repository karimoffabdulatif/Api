import { useEffect, useState } from 'react'
import './users.css'
import axios from 'axios'
const Users = () => {
  const [users, setUsers] = useState ([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
      setUsers(response.data)

    })

  },[])
  return (
    <div>
      <h1 className='text-center'>Users</h1>
      <table className='table table-bordered table-hover table-stripped'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>company</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item,index)=>(
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.company.name}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users