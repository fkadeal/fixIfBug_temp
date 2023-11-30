import React, { useState } from 'react'
import './pizza.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
const Pizza = ({ pizza}) => {
    const [varient, setVarient] = useState('Small')
    const [quantity, setQuantity] = useState(1);
    const[show,setShow]=useState(false)
    const dispatch=useDispatch()
    // console.log(pizza.prices[0].Small)
    const handleClick=()=>{
        console.log(pizza.name)
        console.log(varient)
        console.log(quantity)
        console.log(pizza.prices[0][varient] * quantity)
        dispatch(addToCart(pizza,quantity,varient))
    }
    return (
        <div className='pizza'>
            <div className="container" >
                <p className="name">{pizza.name}</p>
                <img src={pizza.image.filePath} alt="" className="image" onClick={()=>{
                setShow(true)
            }} />
                <div className="pizzaOptions">
                    <div className="varient">
                        <label htmlFor="varients">Varients:</label>

                        <select name="varients" id="varients"
                            value={varient}
                            onChange={(e) => {
                                setVarient(e.target.value)
                            }}
                            style={{ padding: "5px", fontSize: "20px" }}
                        >
                          
                            {pizza.varients.map((varient) => {
                                return (
                                    <option value={varient}>{varient}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="number">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number"

                            min={1}
                            id='quantity'
                            style={{ padding: "5px", fontSize: "20px" }}
                            value={quantity}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                setQuantity(value)
                            }}
                        />
                    </div>
                </div>
                <div className="orderPizza">
                    <p>Price:{pizza.prices[0][varient] * quantity}Rs/-</p>
                    <button className='addToCart' onClick={()=>{handleClick()}}>Add to Cart</button>
                </div>
            </div>
            {show&&<div className="detailed">
                <p className='title'>{pizza.name}</p>

                <img src={pizza.image.filePath} alt="" />
                {pizza.category==='veg'?<p style={{color:"green",textTransform:"uppercase"}} >{pizza.category}</p>:<p style={{color:"red",textTransform:"uppercase"}}>{pizza.category}</p>}
                <p>{pizza.description}</p>
                <button 
                onClick={()=>{
                    setShow(false)
                }}
                >Close</button>
            </div>
}        </div>
    )
}

export default Pizza