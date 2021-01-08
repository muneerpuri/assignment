import React from 'react'
import classes from './MenuSmallAside.css'
import MenuItems from './MenuItems/Menuitems'

class menuSmallAside extends React.Component{
    render(){
        return(
            <div className={classes.mainAsideBOx}>
                <MenuItems/>
               
            </div>
             
        )
    }
}

export default menuSmallAside