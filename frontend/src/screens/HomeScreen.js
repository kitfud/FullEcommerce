import React, { useEffect, useState } from 'react'
import data from '../data';
import Product from '../components/Product'
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {

  const [products,setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error,setError] = useState(false);

   
  useEffect(()=>{
    setLoading(true);
    const fetchData = async () =>{
      try{
        const {data} = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      }
      catch(err){
        setError(err.message)
        setLoading(false);
      }
   
    };
    fetchData();
   },[])



    return (
        <div>
          {loading ? (
          <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
              ):(
        <div className="row center">
          {
            data.products.map(product =>(
          <Product key={product._id} product ={product}></Product>
            ))}
        </div>
        )}
        </div>
            );
}
