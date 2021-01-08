import React from 'react'
import classes from './Layout.css'
import Logo from '../../components/Logo/Logo'
import MenuSmallAside from '../../components/MenuSmallAside/MenuSmallAside'
import CardMenuAside from '../../components/cardMenuAside/cardMenuAside'
import VerticalAsideCards from '../../components/VericalAsideCards/VerticalAsideCards'
import { faMedal,faBatteryFull }  from '@fortawesome/free-solid-svg-icons'
import CardMenuAside2 from '../../components/CardMenuAside2/CardMenuAside2'
import TopMainPage from '../../components/TopMainPage/TopMainPage'
import MiddleMainPage from '../../components/MiddleMainPage/MiddleMainPage'
import BottomMainPage from '../../components/BottomMainPage/BottomMainPage'

const Layout = (props)=>{
    
    return(<div className={classes.mainBox}>
        


        <div className={classes.asideBox}>
            

           <div className={classes.upperAside}>
               <Logo/>
               
           </div> 
           <div className={classes.middleAside}>
           <MenuSmallAside/>
           <CardMenuAside/>
           </div> 
           <div className={classes.bottomAside}>
             <div className={classes.verticalWrapper}>  
                 <VerticalAsideCards icon={faMedal} text1="1800" text2="points" color="lightgreen"/>
                 <VerticalAsideCards icon={faBatteryFull} text1="45.3%" text2="complete" color="rgb(131, 47, 244)"/>
               </div> 
               <CardMenuAside2/>
           </div> 
        </div>
        <div className={classes.mainPage}>
        <div className={classes.NavSmall}>
        <Logo/>
        <MenuSmallAside/>
        </div>
            <div className={classes.topMain}>
                <TopMainPage/>
            </div>
            <div className={classes.middleMain}>
                <MiddleMainPage/>
            </div>
            <div className={classes.bottomMain}>
                <BottomMainPage/>
            </div>


        </div>
    </div>)
}
export default Layout