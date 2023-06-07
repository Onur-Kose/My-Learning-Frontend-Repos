import React from 'react'
import '../scss/card.scss'

const Card = ({data}) => {
  return (
    <div className='bigBox'>

        {
        data.map((kurs) =>     
        
            <div className='Box'>
                <h1> {kurs.corseTitle} </h1>
                <img width={"100px"} src={kurs.courseImg} alt="resim" />
                <h4>{kurs.courseSubTitle}</h4>
                <p>{kurs.courseDescription}</p>
                <button>More İnfo...</button>
            </div>)
            }
    </div>

  )
}

export default Card