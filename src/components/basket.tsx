import { useContext } from "react"
import { ProductContext } from "./context"

export const Basket = () => {
    const context = useContext(ProductContext)

   

    if(!context) {
        throw new Error("out of provider")
    }

    const {state, dispatch} = context



    const getSubtotal = (productId: number, count: number) => {
        const product = state.products.find(p => p.id === productId)
        if (product) {
            return product.price * count
        }
    }
    

    return  <div className= "col">
        <h3>Basket</h3>
<table className="table table-dark table-bordered">
    <thead>
        <tr>
            <th>product</th>
            <th>price</th>
            <th>count</th>
            <th>subtotal</th>
            <th>actions</th>
        </tr>
    </thead>
    <tbody>
        {
             state.basket.map(item => {
                const product = state.products.find(p => p.id === item.id)
                if (!product) return null; //es pahy nayel em bayc chem jokum

                return (
                    <tr key={item.id}>
                        <td>{product.name}</td>
                        <td>{product.price} USD</td>
                        <td>{item.count}</td>
                        <td>{getSubtotal(item.id, item.count)} USD</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    dispatch({
                                        type:"basket/add",
                                        payload: item.id
                                    })
                                }>+</button>
                                <button
                                className="btn btn-danger"
                                onClick={() =>
                                    dispatch({
                                        type:"basket/decrease",
                                        payload: item.id
                                    })
                                }>-</button>
                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    dispatch({
                                        type: "basket/remove",
                                        payload: item.id,
                                    })
                                }
                            >x</button>
                        </td>
                    </tr>
                );
            })}

        

    
    </tbody>
</table>
</div>
    
    
}