import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <p>Copyright &copy; {year}. All rights reserved.</p>
            <p className={styles.notice}>All brand logos used in the site are for demonstration purpose only and they do not imply any indorsement, whatsoever.</p>
        </footer>
    )
}

export default Footer
