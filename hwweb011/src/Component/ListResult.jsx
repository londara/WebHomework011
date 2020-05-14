import React, { Component } from 'react'
import {Card,ListGroup} from 'react-bootstrap'
export default class ListResult extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        {this.props.value.map((arr)=><ListGroup.Item key={arr}>{arr}</ListGroup.Item>)}
                    </ListGroup>
                </Card>
            </div>
        )
    }
}
