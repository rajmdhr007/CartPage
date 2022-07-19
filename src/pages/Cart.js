import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'

const Cart = () => {
    const cartStore=useSelector(store=>store.cartStore)
    const cart_items =cartStore.cart_items
    const dispatch=useDispatch()
    const removeFromCart=(item)=>{
       return dispatch({
            type:"REMOVE_FROM_CART",
            payload:item
        })
    }
  return (

    <>
    <NavBar/>
    
    <div className='container'>
        {
            cart_items.length>0 ?
        
<table className='table'> 
    <thead>
        <tr>
            <th>
                S.no
            </th>
            <th>
                Product Image
            </th>
            <th >
                Product description
            </th>
            <th>
                Action
            </th>
           
        </tr>
        </thead>
        <tbody>
            {
                cart_items.map((item,i)=>{
                    return <tr  key={i}>
                        <td>{i+1}</td>
                        <td><img src={item.image} alt='mobile' height='150px'/></td>
                        <td>
                           <h4> {item.name}</h4>
                           <h5>{item.price}</h5>
                           <p>{item.description }</p>
                            
                            </td>
                          
                       

                        <td><button className='btn btn-danger' onClick={()=>removeFromCart(item)} >Remove</button></td>
                     
                    </tr>
                    
                })
            }
              <tr>
                <td colSpan={4}  className=' text-center'>
                    <button className='btn btn-danger' onClick={()=>{
                    return  dispatch( {
                                type: "CLEAR_ALL"
                            
                            })
                    
                }}>Clear Cart</button>
                </td>
            </tr>
      
        </tbody>
    
          
       
   
</table>
:
<div className='alert alert-danger text-center'>There are no items in cart</div>
}
    </div>
    
    </>
  )
}

export default Cart