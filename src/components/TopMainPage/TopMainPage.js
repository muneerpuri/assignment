import React from 'react'
import classes from './TopMainPage.css'
import ImageBox from '../imageBox/imageBox'
import img1 from '../../assets/p1.png'
import img2 from '../../assets/p2.png'
import img3 from '../../assets/p3.png'
import img4 from '../../assets/p4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH }  from '@fortawesome/free-solid-svg-icons'
import img5 from '../../assets/p5.png'
class topMainPage extends React.Component{
    render(){
        return(
            <div className={classes.topMainBox}>
                <div className={classes.box1}>
                    <div className={classes.upperPart}>
                        <div > <span style={{marginBottom:'10px', fontWeight:'bold',textTransform:'capitalize'}}>streaming</span><span style={{ color:'rgb(184, 184, 184)'}}> Now</span> </div>
                        <div > <FontAwesomeIcon style={{ cursor:'pointer',color:'rgb(184, 184, 184)'}} icon={faEllipsisH}/></div>
                    </div>
                    <div className={classes.downPart}>
                    <ImageBox color="lightblue"imgsrc={img2}/>
                    <ImageBox color="lightpink"imgsrc={img1}/>
                    <ImageBox color="lightblue"imgsrc={img1}/>
                    <ImageBox color="lightpink"imgsrc={img3}/>
                    <ImageBox color="lightblue"imgsrc={img4}/>
                    <ImageBox color="lightpink"imgsrc={img5}/>
                    <ImageBox color="lightblue"imgsrc={img3}/>
                    <ImageBox color="lightpink"imgsrc={img4}/>
                    <ImageBox color="lightblue"imgsrc={img5}/>

                    </div>

                </div>
                <div className={classes.box2}>
                <div className={classes.upperPart}>
                        <div > <span style={{marginBottom:'10px',fontWeight:'bold',textTransform:'capitalize'}}>Advanced</span><span style={{ color:'rgb(184, 184, 184)'}}> Search</span> </div>
                        <div > <FontAwesomeIcon style={{ cursor:'pointer',color:'rgb(184, 184, 184)'}} icon={faEllipsisH}/></div>
                    </div>
                    <div className={classes.FormBox}>
                        <input type="text" placeholder="start writing something"/>
                        <button>Find</button>
                    </div>

                </div>

            </div>

        )
    }
}

export default topMainPage