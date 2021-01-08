import React from 'react'
import classes from './Logo.css'


class logo extends React.Component{
    render(){
        return(
            <div className={classes.logoBox}>
                <div className={classes.mainLogo}>e</div>
                <div><div className={classes.entireText}> <span className={classes.logo1st}>Edu</span><span className={classes.logo2nd}>Kated</span></div></div>
            </div>
        )
    }
}

export default logo