import React, { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {

  const[loading, setLoading] = useState(false)
  const[posts, setPosts] = useState([])

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setLoading(true) 

    try {
      const res = await fetch(API_URL);
      const data = await res.json()

      setPosts(data)

    } catch (error) {
      console.log("error")
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData()
  }, [])
  

  return (
    <div className="my-8 mt-20 mb-10">
    {
      loading ? (<Spinner/>) : (
        posts.length > 0 ? (
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
           
            ))
          }
          </div>) : (
          <div className="flex justify-center items-center">
            <p>Post data not found</p>
          </div>
        )
      )
    } 
    </div>
  )
}

export default Home