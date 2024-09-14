import './App.css'
import { initialState, ProductContext } from './components/context'
import { Basket } from './components/basket'
import { ProductList } from './components/productList'
import { useReducer } from 'react'
import { reducer } from './components/reducer'

function App() {

  const[state,dispatch] = useReducer(reducer,initialState)

  console.log(state)
  

  return(

   <>
   <h1>Online Shop</h1>
  <ProductContext.Provider value ={{state,dispatch}}>
  <Basket/>
  <ProductList/>
  </ProductContext.Provider>
  </>
  )
  
}

export default App
