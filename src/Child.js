import React from 'react'
import { useState, useEffect } from "react"
import Axios from 'axios';

const Child = () => {
    const [userInfo, setuserInfo] = useState([])
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setuserInfo(res.data)
            console.log(res.data);
        });
    }, []);

  return (
      <div className='tablebox' style={{ display: "flex", justifyContent: "center",  border: "3px solid rgb(0, 0, 0)" }}>
          <table className='table'>
              <tr style={{ border: "3px solid rgb(0, 0, 0)", justifyContent: "center", backgroundColor: "rgb(123,89,96)" }}>
                  <th style={{ border: "3px solid rgb(0, 0, 0)", justifyContent: "center", backgroundColor: "rgb(101,120,120)", fontSize: "1.2rem" }}>User Id </th>
                  <th style={{ border: "3px solid rgb(0, 0, 0)", justifyContent: "center", backgroundColor: "rgb(101,120,120)", fontSize: "1.2rem" }}> Id </th>
                  <th style={{ border: "3px solid rgb(0, 0, 0)", justifyContent: "center", backgroundColor: "rgb(101,120,120)", fontSize: "1.2rem" }}> Title </th>
                  <th style={{ border: "3px solid rgb(0, 0, 0)", justifyContent: "center", backgroundColor: "rgb(101,120,120)", fontSize: "1.2rem" }}> Body </th>
              </tr>
              {userInfo.map((user) => (
                  <tr>
                      <td style={{ backgroundColor: "#ADD8E6", border: "3px solid rgb(0, 0, 0)" }}>{user.userId}</td>
                      <td style={{ backgroundColor: "#ADD8E6", border: "3px solid rgb(0, 0, 0)" }}>{user.id}</td>
                      <td style={{ backgroundColor: "#ADD8E6", border: "3px solid rgb(0, 0, 0)" }}>{user.title}</td>
                      <td style={{ backgroundColor: "#ADD8E6", border: "3px solid rgb(0, 0, 0)" }}>{user.body}</td>
                  </tr>
              ))}
          </table>
      {/* {userInfo} */}
    </div>
  )
}

export default Child
