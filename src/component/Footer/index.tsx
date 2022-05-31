import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {

    let date =  new Date();
    let year = date.getFullYear();
    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.footerContainer}>
                    <div className={styles.waves}>
                        <div className={styles.wave} id={styles.wave1}></div>
                        <div className={styles.wave} id={styles.wave2}></div>
                        <div className={styles.wave} id={styles.wave3}></div>
                        <div className={styles.wave} id={styles.wave4}></div>
                    </div>
                    <div className={styles.footerContentContainer} >
                    <div className={styles.contentRow}>
                        <div className={styles.mainContent}>
                        <h3 className={styles.headerOne}>RESUME BUILDER</h3>

                        <p>The faster way to create professional-looking resumes</p>
                        <div className={styles.contactContainer}>
                            <div className={styles.developerContainer}>
                                <h5>Developed by: </h5>
                                <p>ANIRUDH ADITHYA - Full Stack Website Developer</p>
                                <p>AJAY KUMAR - </p>
                                <p>ABISHEK - </p>
                                <p>KIRUBANITHI - </p>
                            </div>
                        </div>
                        </div>
                        <ul className={styles.socialIcon}>
                        <h3>Social</h3>
                            <li><a href="#" ><i className="fa-brands fa-facebook-square"></i></a></li>
                            <li><a href="#" ><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#" ><i className="fa-brands fa-twitter-square"></i></a></li>
                            <li><a href="#" ><i className="fa-brands fa-telegram"></i></a></li>
                        </ul>
                        <ul className={styles.quickLinks}>
                        <h3>Quick Links</h3>
                            <li><a href="/" >Home</a></li>
                            <li><a href="/about" >About Us</a></li>
                            <li><a href="/resume-builder">Build Resume</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className={styles.footerCopyrights}>
                    <p>©{year} Resume Builder Online | All Rights Reserved</p>
                    </div>                
                </div>
            </div>
        </footer>
    );
}
