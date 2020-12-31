import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';

function ProgressCol(props) {

    const {titel, now, style} = props;
    return (
        <Col>
            <Card className="cardBody" style={{ width: '12rem' }}>
                <Card.Body>
                    <Card.Title className="cardTitle">{titel}</Card.Title>
                    <div className="circle_p"><span className="span_p">{`${now}%`}</span></div>
                    <div style={{ width: '12rem' }}>
                        <ProgressBar id="my_progress" striped variant="success" now={40} style={style} label={`${now}%`} />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProgressCol