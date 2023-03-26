import React from 'react'
import Button from '@mui/material/Button';
import './Courses.scss'

const Courses = () => {
  return (
    <div className='section-courses'>
        <div className="container">
            <div className="courses">
                <h4>Bizning Kurslar</h4>
                <div className="courses__pages">
                    <Button className='btn__cart active' variant="text">Barcha kurslar</Button>
                    <Button  className='btn__cart' variant="text">Aniq fanlar</Button>
                    <Button  className='btn__cart' variant="text">Tabiy fanlar</Button>
                    <Button className='btn__cart' variant="text">Gumanitar</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses