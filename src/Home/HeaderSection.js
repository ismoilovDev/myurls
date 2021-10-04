import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'reactstrap';
import telephoneImg from '../img/home-img1.jpg';
import personImg from '../img/home-img1-human.jpg';
import {motion} from 'framer-motion';
import { pageAnimation } from "../animation";
import data from '../Data/data';
import data1 from '../Data/data1';
import data2 from '../Data/data2';
import data3 from '../Data/data3';

function HeaderSection() {
    const [lists, setLists] = useState(data);
    const [lists1, setLists1] = useState(data1);
    const [lists2, setLists2] = useState(data2);
    const [lists3, setLists3] = useState(data3);
    const [index, setIndex] = useState(0);
    let [i, setI] = useState(0);
    let [j, setJ] = useState(0);
    let [k, setK] = useState(0);

    // Counter
    let [count, setCount] = useState(0);

    function inc() {
        if(count < 3643) {
            setCount(++count);
            setTimeout(() => {
                inc()
            }, 0.05)
        }
    }
    useMemo(() => {
        inc()
    }, []);

//  Hooks-------------->
    useEffect (() => {
        const lastList = lists.length - 1;
        if (index < 0) {
            setIndex(lastList);
        }
        if(index > lastList) {
            setIndex(0)
        }
    }, [index, lists]);

    useEffect (() => {
        const lastList1 = lists1.length - 1;
        if (i < 0) {
            setI(lastList1);
        }
        if(i > lastList1) {
            setI(0)
        }
    }, [i, lists1]);

    useEffect (() => {
        const lastList2 = lists2.length - 1;
        if (j < 0) {
            setJ(lastList2);
        }
        if(j > lastList2) {
            setJ(0)
        }
    }, [j, lists2]);

    useEffect (() => {
        const lastList3 = lists3.length - 1;
        if (k < 0) {
            setK(lastList3);
        }
        if(k > lastList3) {
            setK(0)
        }
    }, [k, lists3]);


    // SetInterval----------->
    useEffect(() => {
        let slider1 = setInterval(() => {
            setI(i + 1);
        }, 1500);
        return () => clearInterval(slider1)
    },[i])

    useEffect(() => {
        let slider2 = setInterval(() => {
            setJ(j + 1);
        }, 2100);
        return () => clearInterval(slider2)
    },[j])

    useEffect(() => {
        let slider3 = setInterval(() => {
            setK(k + 1);
        }, 2000);
        return () => clearInterval(slider3)
    },[k])
    
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 2350);
        return () => clearInterval(slider)
    }, [index])


    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className="header">
            <Container fluid>
                <Row className="align-items-center">
                    <Col md="12" lg="5">
                        <div className="header-discription">
                            <h1 className="main-title">Now, you only need one link.</h1>
                            <p className="discription">
                                Share more with your followers in a single click. Myurls makes it easy to link to all of your content in one place.
                            </p>
                            <div className="button sign-up-btn">
                                <a className href="/signup">Use myurl for Free</a>
                            </div>
                            <p className="home-counter">
                                <span className="counter">{count}</span>
                                <span>people have signed up this week!</span>
                            </p>
                        </div>
                    </Col>
                    <Col md="12" lg="7">
                        <div className="header-img">
                            <div className="overflow-img">
                                <img src={telephoneImg} alt="home-img" id="phone" />
                                <img src={personImg} alt="home-person" id="person" />
                                <div className="phone-animation">
                                    <div className="anime-links">
                                        <ul className="one">
                                            {
                                            lists.map((list, listIndex) => {
                                                
                                                let positions = "nextList";
                                                if (listIndex === index) {
                                                    positions = "activeList"
                                                }
                                                if (listIndex === index - 1 || 
                                                    (index === 0 && listIndex === lists.length - 1 )    
                                                ) {
                                                    positions = "lastList";
                                                }
                                                
                                                return (
                                                    <li className={positions} key={list.id}>
                                                        <div className={list.title}>
                                                            <i className={"bx " +  list.class}></i>
                                                            <p>{list.title}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            }
                                        </ul>
                                        <ul className="two">
                                            {
                                            lists1.map((list, listIndex) => {
                                                
                                                let positions = "nextList";
                                                if (listIndex === i) {
                                                    positions = "activeList"
                                                }
                                                if (listIndex === i - 1 || 
                                                    (i === 0 && listIndex === lists1.length - 1 )    
                                                ) {
                                                    positions = "lastList";
                                                }
                                                
                                                return (
                                                    <li className={positions} key={list.id}>
                                                        <div className={list.title}>
                                                            <i className={"bx " +  list.class}></i>
                                                            <p>{list.title}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            }
                                        </ul>
                                        <ul className="three">
                                            {
                                            lists2.map((list, listIndex) => {
                                                
                                                let positions = "nextList";
                                                if (listIndex === j) {
                                                    positions = "activeList"
                                                }
                                                if (listIndex === j - 1 || 
                                                    (j === 0 && listIndex === lists2.length - 1 )    
                                                ) {
                                                    positions = "lastList";
                                                }
                                                
                                                return (
                                                    <li className={positions} key={list.id}>
                                                        <div className={list.title}>
                                                            <i className={"bx " +  list.class}></i>
                                                            <p>{list.title}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            }
                                        </ul>
                                        <ul className="two four">
                                            {
                                            lists3.map((list, listIndex) => {
                                                
                                                let positions = "nextList";
                                                if (listIndex === k) {
                                                    positions = "activeList"
                                                }
                                                if (listIndex === k - 1 || 
                                                    (k === 0 && listIndex === lists3.length - 1 )    
                                                ) {
                                                    positions = "lastList";
                                                }
                                                
                                                return (
                                                    <li className={positions} key={list.id}>
                                                        <div className={list.title}>
                                                            <i className={"bx " +  list.class}></i>
                                                            <p>{list.title}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default HeaderSection;
