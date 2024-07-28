import React from 'react'
import {data} from '../restApis.json'

const Menu = () => {
  return (
    <section className=' menu' id='menu'>
      <div className="container">
        <div className="heading_section">
            <h1 className='heading'>POUPLER DISHES</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt vitae obcaecati, doloremque fugit aliquid, ullam cumque voluptatibus, hic quos maxime quaerat veritatis qui molestias fuga optio consectetur ipsum laboriosam? Aperiam exercitationem, voluptatem ut id autem accusantium nisi excepturi perferendis tempore?</p>
        </div>
        <div className="dishes_container">
          {
            data[0].dishes.map(element=>{
                return(
                    <div className="card" key={element.id}>
                      <img src={element.image} alt={element.title} />
                      <h3>{element.title}</h3>
                      <button>{element.category}</button>
                    </div>
                )
            })
          }
        </div>
      </div>
    </section >
  )
}

export default Menu
