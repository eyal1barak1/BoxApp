import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

// This component renders a box with a random background color
// It will change the color each x ms that will be passed by prop
// Prop
// colorChangeInterval - number - positive integer for the ms of the interval
// State
// color - string - the css color of the bg (e.g. "#FF0000")
class ProgressBars extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            now1: 0,
            now2: 0,
            now3: 0,
        }

    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                now1: Math.floor(Math.random() * 101),
                now2: Math.floor(Math.random() * 101),
                now3: Math.floor(Math.random() * 101),
            });
        }, 1000);
        
        
    }

    componentDidUpdate(prevProps, prevState) {
        // 1) Stop the current interval
        clearInterval(this.myInterval);

        // 2) create a new interval with the new time
        this.myInterval = setInterval(() => {
            
            if (this.state.now1 < 100) {
                this.setState({
                    now1: this.state.now1 + Math.floor(Math.random() * 5) + 1
                });
            }
            if (this.state.now2 < 100) {
                this.setState({
                    now2: this.state.now2 + Math.floor(Math.random() * 5) + 1
                });
    
            }
            if (this.state.now3 < 100) {
                this.setState({
                    now3: this.state.now3 + Math.floor(Math.random() * 5) + 1
                });
            }
        }, 1000);
        
    }


    render() {
        
        
        const style = { marginTop: 50 }
        const now1 = this.state.now1;
        const now2 = this.state.now2;
        const now3 = this.state.now3;

        return (
            <div>
                <Row className="progressRow">
                    <Col>
                        <Card className="cardBody" style={{ width: '12rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">General</Card.Title>
                                <div className="circle_p"><span className="span_p">{`${now1}%`}</span></div>
                                <div style={{ width: '12rem' }}>
                                    <ProgressBar id="my_progress" striped variant="success" now={40} style={style} label={`${now1}%`} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardBody" style={{ width: '12rem' }}>
                            <Card.Body >
                                <Card.Title className="cardTitle">Uploading</Card.Title>
                                <div className="circle_p"><span className="span_p">{`${now2}%`}</span></div>
                                <div style={{ width: '12rem' }}>
                                    <ProgressBar id="my_progress" striped variant="success" now={40} style={style} label={`${now2}%`} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardBody" style={{ width: '12rem' }}>
                            <Card.Body>
                                <Card.Title className="cardTitle">Tasks Status</Card.Title>
                                <div className="circle_p"><span className="span_p">{`${now3}%`}</span></div>
                                <div style={{ width: '12rem' }}>
                                    <ProgressBar id="my_progress" striped variant="success" now={40} style={style} label={`${now3}%`} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default ProgressBars;