import React, { useState } from 'react'
function BoxShadow() {
    const [Hori, setHori] = useState(10);
    const [Veri, setVeri] = useState(10);
    const [Blur, setBlur] = useState(10);
    
  return (
    <>
    <h2 id='logo'> Box Shadow Generator Tool</h2>
    <div className='App'>
        <div className='controls'>
            <label>Horizontal Length</label>
            <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
            <label>Vertical Length</label>
            <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
            <label>Blur</label>
            <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
            
        </div>
        <div className='output'>
            <div className='box' style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px black `}}>
                <p>Box Shadow : {Hori}px {Veri}px {Blur}px </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default BoxShadow