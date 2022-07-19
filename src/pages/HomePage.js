import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './NavBar'

const HomePage = () => {
 
  const [limit,setLimit]=useState(8)
  const[search,setSearch]=useState('')
  const[filteredProduct,setFilteredProduct]=useState([])
    const item_store=useSelector(store=>store.itemStore)
    const items_in_store=item_store.items
    const dispatch=useDispatch()
    const addToCart=(item)=>{
        dispatch({
            type:"ADD_TO_CART",payload:item
        })

    }
    useEffect(()=>{
      setFilteredProduct(items_in_store.filter(item=>item.name.toLowerCase().match(search.toLowerCase())))
    },[search])
  

  return (
    <>
     <NavBar/>
     <div className='container-fluid bg-light py-2'>
      <input type={'search'} className='form-control w-75 py-2 bg-info  mx-auto' placeholder='Enter your search here' onChange={(e)=>setSearch(e.target.value)}/>
     </div>

<div className='container-fluid'>

    <div className='row row-cols-1 row-cols-lg-4 g-5'>
{
    filteredProduct.slice(0,limit).map((item,i)=>{
        return <div className='col'  key={i}>
        <div className="card" >
        <img src={item.image}  height="250px "className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <h5 className="card-title">{item.price}</h5>
          <p className="card-text text-truncate" style={{height:"35px"}}>{item.description}</p>
          <button className='btn btn-warning' onClick={()=>addToCart(item)}>Add to Cart</button>
         
        </div>
      </div>
    </div>
    })
}
    </div>
    < div>     
    { limit< filteredProduct.length ?
  <button className='btn btn-warning ' onClick={()=>setLimit(limit+8)}>Load More</button>
  :
  <div className='alert alert-danger text-center'>All ITEMS LOADED</div>
  

  

  }
  </div>
 
    </div>

    
  
    
    
    </>
  )
}

export default HomePage