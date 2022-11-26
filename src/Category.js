import React from 'react'

const Category = ({categories,filterCategories}) => {
  return (
    <section>
       <article className='category center'>
      {
        categories.map((category,index)=>{
          return <button key={index} onClick={()=>filterCategories(category)}>{category}</button>
        })
      }
    </article>

    </section>
   
  )
}

export default Category
