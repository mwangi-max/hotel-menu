import React from 'react'

const Menu = ({items}) => {
  return(
    <section>

      <article className='center'>
      {
        items.map((item)=>{
          const {id,category,price,info,image}= item;
          return <div key={id} className='single'>
            
            <img src={image} className='image' alt={info}/>
            <div className='description'>
              <h4>{category}</h4>
              <h4>Ksh.{price}</h4>
            </div>
            <p>{info}</p>
          </div>
        })
      }
    </article>

    </section>
    
  )
}

export default Menu
