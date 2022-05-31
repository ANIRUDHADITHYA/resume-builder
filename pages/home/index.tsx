import React from 'react';
import Link from 'next/link';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import { HeaderNavbar, Footer } from '@component';
import { motion } from "framer-motion"
import styles from './style.module.scss';

export default function Home() {
    return (
        <div className={styles.homePage}>
            <HeaderNavbar />

            <div className="container">
                <section className={['row', styles.first].join(' ')}>
                    <div className={['col-md-6', styles.firstLeft].join(' ')}>
                        <h1>Hi, Welcome to Resume Builder</h1>
                        <p>design your resume easier and faster</p>

                        <div className={styles.crBtn}>
                            <Link href="/resume-builder">
                                <a>Build My Resume</a>
                            </Link>
                        </div>
                    </div>
                    <div className={['col-md-6', styles.firstRight].join(' ')}>
                        {/*<img src="/images/bg.png" alt="first slide image home page" className="imgResponsive" />*/}
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_4DLPlW.json"
                            style={{ height: '600px', width: '600px' }}
                            >
                        </Player>
                    </div>
                </section>

                <section className={[styles.second].join(' ')}>
                    <div className={styles.secondTitle}>
                        <h2>Why Resume Builder ?</h2>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg1].join(' ')}>
                                        <img src="images/icons/signs.png" alt="100% free" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>100% free</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg4].join(' ')}>
                                        <img src="images/icons/body.png" alt="easy to use" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>Easy to use</p>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg2].join(' ')}>
                                        <img src="images/icons/time.png" alt="makes a minute" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>Real time design</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg3].join(' ')}>
                                        <img
                                            src="images/icons/register.png"
                                            alt="No need register"
                                            className="imgResponsive verticalCenter"
                                        />
                                    </div>
                                    <p>No Registeration Required</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={[styles.third].join(' ')}>
                    <div>
                    <div className={styles.servicesContainer}>
                    <h2>Features that We Provide</h2>


                        <div className={styles.servicesRow}>

                            <motion.div className={styles.servicesContentCol} whileInView={{ rotate: 360,transition:{ duration: 0.5 } }}
                    transition={{ duration: 0.2 }} >
                                <h3>Download Resume in one click</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt quos temporibus eos, totam est a alias. 
                                Cum, assumenda ipsam officiis debitis commodi iure placeat! Quia eveniet suscipit ratione. Dicta.</p>
                            </motion.div>
                            <motion.div className={styles.servicesContentCol}  whileInView={{ rotate: 360,transition:{ duration: 0.5 } }}
                    transition={{ duration: 0.2 }}>
                                <h3>Customisation</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores similique nobis tempore eveniet aliquid. Dolorem esse, 
                                magnam earum mollitia fugiat molestias modi deserunt totam, reprehenderit, debitis ex dignissimos fugit rerum!</p>
                            </motion.div>
                            <motion.div className={styles.servicesContentCol}  whileInView={{ rotate: 360,transition:{ duration: 0.5 } }}
                    transition={{ duration: 0.2 }}>
                                <h3>Upload and Edit Resume</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor molestias. Autem, quas possimus minima maxime 
                                sapiente molestias porro quos iste. Sequi culpa consequuntur voluptatibus nostrum odio, dolore beatae placeat.</p>
                            </motion.div>


                        </div>
                    </div>
                    </div>
                    
                </section>

                
            </div>

            <Footer />
        </div>
    );
}
