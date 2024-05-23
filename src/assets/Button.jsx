import { useState } from "react";

const Button = ()=>{
  const [color,setColor] = useState('#46a07d')
  

  const handleColor = (e)=>{
    setColor(e.target.value)
  }
  
 
  return(
    <>
      <p style={{backgroundColor: color, color: 'white'}}>Selected Color: {color} </p>
      <div className="inpt">
        <label htmlFor="picker">
        :Click
        </label>
        <input type="color" value={color} id="picker" onChange={handleColor} />
      </div>
    </>
  )
}

export default Button