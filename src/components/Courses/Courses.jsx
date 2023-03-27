import React from 'react'
import Button from '@mui/material/Button';
import './Courses.scss'
import Cours from '../../common/Cours';
import img from '../../Assets/img/coures/img.svg'
import Btn from '../../common/Btn/Btn';

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
                <div className="courses__list">
                    <Cours
                        img={img}
                        title='Tojiboyev Javohir '
                        text='Mentor'
                        accound='https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Cours
                        img={img}
                        title='Feruza Karimova '
                        text='Mentor'
                        accound='https://images.pexels.com/photos/2859368/pexels-photo-2859368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Cours
                        img={img}
                        title='Tojiboyev Javohir '
                        text='Mentor'
                        accound='https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Cours
                        img={img}
                        title='Tojiboyev Javohir '
                        text='Mentor'
                        accound='https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Cours
                        img={img}
                        title='Tojiboyev Javohir '
                        text='Mentor'
                        accound='https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                    <Cours
                        img={img}
                        title='Tojiboyev Javohir '
                        text='Mentor'
                        accound='https://images.pexels.com/photos/14737533/pexels-photo-14737533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    />
                </div>
                <Btn
                    text='Barcha kurslar'
                />
            </div>
        </div>
    </div>
  )
}

export default Courses