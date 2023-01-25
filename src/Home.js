import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
  return (
    <div style={{ justifyContent: "center", display: "flex", marginTop: "3rem", fontSize: "2.5rem", fontWeight: "600" }}>
        <button onClick={() => navigate('/child')}>Display Data</button>
    </div>
  )
}

export default Home
