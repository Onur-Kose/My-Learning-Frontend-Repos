import React, { useState } from 'react'
import '../scss/form.scss'

const Form = ({yeniKurs}) => {
    
    const [corseTitle, setCourseTitle]=useState("");
    const [courseImg, setCourseImg]=useState("");
    const [courseSubTitle, setCourseSubTitle]=useState("");
    const [courseDescription, setCourseDescription]=useState("");


 const formSubmit = (e) => {
 e.preventDefault();
 yeniKurs(
    {
        id: Math.round((Math.random()*10000)),
        corseTitle: corseTitle,
        courseImg: courseImg,
        courseSubTitle: courseSubTitle,
        courseDescription: courseDescription
    }
 )
 }

  return (
    <div className='formBox'>
        <form onSubmit={formSubmit}>
            <h2>Yeni Kurs Eklemek için yaklaş</h2>
            <input value={corseTitle} onChange={(e)=> {setCourseTitle(e.target.value)}} type="text" placeholder='Kurs Adı'/>
            <input value={courseImg} onChange={(e)=> {setCourseImg(e.target.value)}} type="text" placeholder='Fotoğraf URL'/>
            <input value={courseSubTitle} onChange={(e)=> {setCourseSubTitle(e.target.value)}} type="text" placeholder='Kurs Açıklaması'/>
            <input value={courseDescription} onChange={(e)=> {setCourseDescription(e.target.value)}} type="text" placeholder='Kurs Açıklası'/>
            <input type="submit" value="Add Course" />
        </form>

    </div>

  )
}

export default Form