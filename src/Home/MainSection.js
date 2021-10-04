import React, { useEffect, useState,useMemo } from 'react';
import { Container, Row, Col } from 'reactstrap';
function MainSection() {


    const [index, setIndex] = useState(0);

//  Hooks-------------->

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 2350);
        return () => clearInterval(slider)
    }, [index])
    
    // Counter
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);
    let [count5, setCount5] = useState(0);

    function inc() {
        if(count < 746) {
            setCount(++count);
            setTimeout(() => {
                inc()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc()
    }, []);


    function inc1() {
        if(count1 < 946) {
            setCount1(++count1);
            setTimeout(() => {
                inc1()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc1()
    }, []);


    function inc2() {
        if(count2 < 658) {
            setCount2(++count2);
            setTimeout(() => {
                inc2()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc2()
    }, []);


    function inc3() {
        if(count3 < 760) {
            setCount3(++count3);
            setTimeout(() => {
                inc3()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc3()
    }, [])
    function inc4() {
        if(count3 < 582) {
            setCount4(++count4);
            setTimeout(() => {
                inc4()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc4()
    }, [])

    function inc5() {
        if(count5 < 916) {
            setCount5(++count5);
            setTimeout(() => {
                inc5()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc5()
    }, [])
    return (
        <div className="main">
            <div className="circleIcon">
                <Container>
                    <Row className="align-items-center center">
                        <Col className="main-figure" lg="6">
                            <div className="figure">
                                <img src="https://cdn.myurls.co/packs/media/images/website/features/blob-3-ba1e3baf682ca49e31eb337cb83da983.svg" alt="figure" />
                                <div className="services-anime-box">
                                    <div className="services-title">
                                        <img src="https://cdn.myurls.co/packs/media/images/icon-6452a1579b7d6d55d5f4dcab86b72695.svg" alt="logo" />
                                        <span>myurls.co/nick</span>
                                    </div>
                                    <div className="anywhere-box">
                                        <div className="services-anime">
                                            <div className="spans">
                                                <span>
                                                    <i className='bx bxl-youtube' ></i>
                                                </span>
                                                <span>
                                                    <i className='bx bxl-twitter' ></i>
                                                </span>
                                                <span>
                                                    <i className='bx bxl-tiktok' ></i>
                                                </span>
                                                <span>
                                                    <i className='bx bxl-telegram' ></i>
                                                </span>
                                                <span>
                                                    <i className='bx bxl-snapchat' ></i>
                                                </span>
                                                <span>
                                                    <i className='bx bxl-facebook-circle' ></i>
                                                </span>
                                                <span>
                                                    <i className='bx bxs-disc'></i>
                                                </span>
                                                <span>
                                                    <i className='bx bx-mail-send' ></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="main-circle-drt" lg="6">
                            <div className="circle-drt">
                                <h3>Use Anywhere</h3>
                                <p>
                                    Share all of your content, everywhere. There is no limit to where your myurls link can be used.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="personalize">
                <Container>
                    <Row className="align-items-center center">
                        <Col className="main-figure" lg="6">
                            <div className="figure">
                                <div className="figure-box">
                                    <img src="https://cdn.myurls.co/packs/media/images/website/features/blob-1-397cbfb92a3da664d50e3aefe3b56243.svg" alt="figure" />
                                    <img id="themes" src="https://cdn.myurls.co/packs/media/images/website/features/profile-customization-98db6a630573d53bb5ce230a2ad555f4.png" alt="themes" />
                                </div>
                            </div>
                        </Col>
                        <Col className="main-circle-drt" lg="6">
                            <div className="circle-drt">
                                <h3>Personalize Your Profile</h3>
                                <p>
                                    Make your profile as unique as you are. Customize colors, fonts, background images, and more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="analytics">
            <Container>
                    <Row className="align-items-center center">
                        <Col className="main-figure" lg="6">
                            <div className="figure">
                                <img src="https://cdn.myurls.co/packs/media/images/website/features/blob-2-8d120348e00fe31bea7190ea1291a7b8.svg" alt="figure" />
                                <div className="social-anime">
                                    <ul>
                                        <li>
                                            <i className='bx bxl-facebook-circle'></i>
                                            <div className="counter">
                                                {count}
                                            </div>
                                        </li>
                                        <li>
                                            <i className='bx bxl-tiktok' ></i>
                                            <div className="counter">
                                                {count1}
                                            </div>
                                        </li>
                                        <li>
                                            <i className='bx bxl-instagram' ></i>
                                            <div className="counter">
                                                {count2}
                                            </div>
                                        </li>
                                        <li>
                                            <i className='bx bx-podcast' ></i>
                                            <div className="counter">
                                                {count3}
                                            </div>
                                        </li>
                                        <li>
                                            <i className='bx bxl-youtube' ></i>
                                            <div className="counter">
                                                {count4}
                                            </div>
                                        </li>
                                        <li>
                                            <i className='bx bxl-messenger' ></i>
                                            <div className="counter">
                                                {count5}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className="main-circle-drt" lg="6">
                            <div className="circle-drt">
                                <h3>Get Real-Time Analytics</h3>
                                <p>
                                    Track profile views and individual link clicks to see what content your audience is most interested in.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="go-features">
                <h3>
                    <span>
                        Not seeing everything you want? View the rest of our  
                    </span>
                    <a href="/features">features</a>
                </h3>
            </div>
        </div>
    )
}

export default MainSection;