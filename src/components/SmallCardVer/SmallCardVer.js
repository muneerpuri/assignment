import React from 'react'
import classes from './SmallCardVer.css'
import imf1 from '../../assets/p1.png'

class smallCard extends React.Component{
    render(){
        return(
            <div style={{background:"url(" + this.props.bg + ")",backgroundPosition:'fixed',backgroundSize:'cover'}} className={classes.BigCardFrame}>
               <div style={{textAlign:'left',width:'100%'}} className={classes.upperBox}>
                <div style={{textAlign:'left',width:'100%'}} className={classes.upperBoxIn}>
                    <div className={classes.logoUpper}>
                        <img className={classes.img} src={imf1} alt="ima"/>
                    </div>
                    <div style={{textAlign:'left',width:'100%'}} className={classes.textBox}>
                    <p style={{fontWeight:'bold', fontSize: '12px'}}> {this.props.title}</p>
                    <p style={{ fontSize: '11px',color:'rgb(184, 184, 184)'}}> {this.props.subtitle}</p>
                </div>
                </div>
                <div className={classes.upperBoxdown}>
                    <button>{this.props.time}</button>

                </div>
               </div>
               <div className={classes.bottomBox}>
               {this.props.para}
               </div>
            </div>

        )
    }
}

export default smallCard