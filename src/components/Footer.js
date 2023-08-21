/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from '../css/footer.module.css'

const imgTiktok = 'https://www.bocajuniors.com.ar/rebrand/images/tik-tok.svg';
const imgInstagram = 'https://www.bocajuniors.com.ar/rebrand/images/ico-instagram.svg';
const imgYoutube = 'https://www.bocajuniors.com.ar/rebrand/images/ico-youtube.svg';
const imgFacebook = 'https://www.bocajuniors.com.ar/rebrand/images/ico-facebook.svg'
const imgTwitter = 'https://www.bocajuniors.com.ar/rebrand/images/ico-twitter.svg'

function Footer() {
  return (
    <div className={styles.footer}>
            <a href='https://www.tiktok.com/@bocajuniors'><img src={imgTiktok}></img></a>
            <a href='https://www.instagram.com/bocajrsoficial/'><img src={imgInstagram}></img></a>
            <a href='http://www.youtube.com/bocaentretenimientos'><img src={imgYoutube}></img></a>
            <a href='https://www.facebook.com/BocaJuniors/'><img src={imgFacebook}></img></a>
            <a href='https://twitter.com/BocaJrsOficial'><img src={imgTwitter}></img></a>
        <a href='#'>ig del Admin</a>
    </div>
  )
}

export default Footer