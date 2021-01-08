import React from 'react'
import classes from './BottomMainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH }  from '@fortawesome/free-solid-svg-icons'
import MainBottomCard from '../MainBottomCard/MainBottomCard'
import Advertisement from '../Adevrtisement/Advertisement'
import img1 from '../../assets/p1.png'
import img2 from '../../assets/p2.png'
import img3 from '../../assets/p3.png'
import img4 from '../../assets/p4.png'
class bottomMainPage extends React.Component{
    render(){
        return(
            <div className={classes.MainBox}>
  <div className={classes.box1}>
                    <div className={classes.upperPart}>
                        <div > <span style={{fontWeight:'bold',textTransform:'capitalize'}}>Top</span><span style={{ color:'rgb(184, 184, 184)'}}> Tutors</span> </div>
                        <div > <FontAwesomeIcon style={{ cursor:'pointer',color:'rgb(184, 184, 184)'}} icon={faEllipsisH}/></div>
                    </div>
                    <div className={classes.downPart}>
                    <MainBottomCard title="Melanie Gutt" imgbgcolor="lightpink" subtitle="@melgrutt" img={img1}/>
                    <MainBottomCard title="Melanie Gutt" imgbgcolor="lightblue" subtitle="@melgrutt" img={img2}/>
                    <MainBottomCard title="Melanie Gutt" imgbgcolor="lightpink" subtitle="@melgrutt" img={img3}/>
                    <MainBottomCard title="Melanie Gutt" imgbgcolor="lightgreen" subtitle="@melgrutt" img={img4}/>

                    </div>

                </div>
                <div className={classes.box2}>
                <div className={classes.upperPart}>
                        <div > <span style={{fontWeight:'bold',textTransform:'capitalize'}}>Special Offers</span> </div>
                        <div > <FontAwesomeIcon style={{ cursor:'pointer',color:'rgb(184, 184, 184)'}} icon={faEllipsisH}/></div>
                    </div>
                    <div className={classes.FormBox}>
                       <Advertisement title="50 days of Premium!" subtitle="get it before 01.01.2020" buttonText="learn more"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default bottomMainPage