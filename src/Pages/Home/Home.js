import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pizza from '../../components/Pizza/Pizza'

// import { data } from '../../data.js'
import './home.css'
import { getPizza } from '../../actions/pizzaActions'
import Loader from '../../components/Loading'
const Home = () => {

  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const { pizza, loading, error } = pizzastate
  useEffect(() => {
    dispatch(getPizza())
    // setPizzas(pizza?.pizza)
  }, [dispatch])
  // console.log(pizza)
 
  // if(!loading)
  // {setPizzas(pizza?.pizza)}

  return (
    <div className='home'>
      <div className="row">
        {loading ?(
        <Loader/>
      )  : error ? (<h1>Something went wrong</h1>) : (pizza?.map((pizza) => {

          return (
            <div className='column' key={pizza.id}>
              <div className='pizz' key={pizza.id} >
                <Pizza pizza={pizza} key={pizza.id} />
              </div>
            </div>
          )
        }))}
      </div>


    </div>
  )
}

export default Home