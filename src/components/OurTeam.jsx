import React from 'react'
import '../components/ourteam.css'
import team01 from '../components/team-01.png'
import team02 from '../components/team-02.png'
import team03 from '../components/team-03.png'
import team04 from '../components/team-04.png'

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Joshua Kurniawan',
        position: 'Team Leader'
    },

    {
        imgUrl: team02,
        name: 'Fajar Chresty',
        position: 'Team Member'
    },

    {
        imgUrl: team03,
        name: 'David Lin',
        position: 'Team Member'
    },

    {
        imgUrl: team04,
        name: 'Karen yapranata',
        position: 'Team Member'
    },
]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>About Us</h6>
                    <h2>
                        <span className='highlight'>Our Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Team;