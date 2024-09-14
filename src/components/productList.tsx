import { useContext } from "react"
import { ProductContext } from "./context"

export const ProductList = () => {

    const context = useContext(ProductContext)

    if(!context) {
        throw new Error("out of provider")
    }

    const {state, dispatch} = context

    return <div className="col">
    <h3>Product List</h3>
    <div className="row">
        {
            state.products.map(product => 
                <div className="col-md-4" key = {product.id}>
                     <img
                    src = {product.photo}
                    style = {{width:200, height:200, objectFit:'cover'}}
                />
               <p>{product.name}</p>
               <p><strong>{product.price} USD</strong></p>
               <button onClick = {() => dispatch({type:"products/add",payload:product.id})} className="btn btn-primary">move</button>

                </div>
            )
        }
    </div>
    </div>
}