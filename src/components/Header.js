/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styles from '../css/header.module.css'
import cabjLogo from '../img/cabjLogo.svg'

function Nav(){
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img className={styles.imgLogo} src={cabjLogo}></img>
            <div className={styles.txtLogo}>
                Club Atlético <br/>
                <span>BOCA JUNIORS</span>
            </div>
        </div>
        <div className={styles.fanSite}>
            <div className={styles.txtFanSite}>
                Fan Site by Gustavo Olmos
            </div>
        </div>
    </div>
  )
}

export default Nav