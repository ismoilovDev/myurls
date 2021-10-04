import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function ToSignUp() {

    const [changed, setChanged] = useState(false);
    const hendleChange = () => setChanged(!changed)
    let x = ['to-signup-btn'];
    if(changed) {
        x.push('active');
    }

    return (
        <div className="to-signup">
            <Container>
                <Row className="align-items-center">
                    <Col sm="12">
                        <div className="to-signup-dicr">
                            <h2 className="title">Get your myurls handle</h2>
                            <p>Enter your username below to claim your link.</p>
                        </div>
                        <div className="to-signup-input">
                            <div className="input-content">
                                <div className="input-ditr">
                                    <img src='https://cdn.myurls.co/packs/media/images/icon-6452a1579b7d6d55d5f4dcab86b72695.svg' alt="logo" />
                                    <p>myurl.co/</p>
                                    <input placeholder="yourhandle" onClick={hendleChange} />
                                </div>
                                <a className={x.join(" ")} href="/signup" >
                                    <ArrowForwardIcon />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ToSignUp
