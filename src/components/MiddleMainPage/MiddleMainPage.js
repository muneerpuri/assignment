import React from 'react'
import classes from './MiddleMainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH }  from '@fortawesome/free-solid-svg-icons'
import BigCard from '../BigCardVertic/BigCardVerdic'
import BigCardHori from '../BigCardHori/BigCardHori'
import SmallCard from '../SmallCardVer/SmallCardVer'
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import bg4 from '../../assets/bg4.jpg'
import bg5 from '../../assets/bg5.jpg'
class middleMainPage extends React.Component{
    render(){
        return(
            <div>
                <div className={classes.upperPart}>
                        <div > <span style={{marginBottom:'10px',fontWeight:'bold',textTransform:'capitalize'}}>Popular</span><span style={{ color:'rgb(184, 184, 184)'}}> This Week</span> </div>
                        <div > <FontAwesomeIcon style={{ cursor:'pointer',color:'rgb(184, 184, 184)'}} icon={faEllipsisH}/></div>
                    </div>
                <div className={classes.middlePart}>
                    <div className={classes.middlePart1}>
                        <BigCard 
                        bg={bg1}
                        title="Lana Marandina"
                        subtitle="@lanamara"
                        time="82 min"
                        para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin"
                        />
                        <BigCard 
                        bg={bg2}
                        title="Lana Marandina"
                        subtitle="@lanamara"
                        time="82 min"
                        para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin"
                        />
                        </div>
                    <div className={classes.middlePart2}>
                        <div style={{width:'100%'}}>
                        <BigCardHori
                        bg={bg3}
                        title="Lana Marandina"
                        subtitle="@lanamara"
                        time="82 min"
                        para="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin"
                        
                        /></div>
                        <div className={classes.smallCard}>
                               <SmallCard
                           bg={bg4}
                           title="Lana Marandina"
                           subtitle="@lanamara"
                           time="82 min"
                           para="Contrary to popular belief, Lorem Ipsum is"
                           
                           />
                               <SmallCard
                           bg={bg5}
                           title="Lana Marandina"
                           subtitle="@lanamara"
                           time="82 min"
                           para="Contrary to popular belief, Lorem Ipsum is "
                           
                           />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default middleMainPage