import React from 'react' 
import TeamItem from '../../common/TeamItem'
import './Team.scss'

const Team = () => {
  return (
    <div className='section-team'>
        <div className="container">
            <div className="team">
                <h3>Bizning jamoa</h3>
                <div className="team__list">
                    <TeamItem
                        img='https://images.pexels.com/photos/2859368/pexels-photo-2859368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Abdullayev Bahodir'
                        text='Boha9989@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/1727280/pexels-photo-1727280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Svetlana N'
                        text='Svetlana1122@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/4039724/pexels-photo-4039724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Abdullayev Bahodir'
                        text='Boha9989@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/2829367/pexels-photo-2829367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Nargiza Asadova'
                        text='Boha9989@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Abdullayev Bahodir'
                        text='Boha9989@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/814049/pexels-photo-814049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Svetlana N'
                        text='Svetlana1122@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/3214779/pexels-photo-3214779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Abdullayev Bahodir'
                        text='Boha9989@gmail.com'
                    />
                    <TeamItem
                        img='https://images.pexels.com/photos/3609704/pexels-photo-3609704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        title='Nargiza Asadova'
                        text='Boha9989@gmail.com'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team