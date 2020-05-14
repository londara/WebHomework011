import React, { Component } from 'react'
import ListResult from './ListResult';
import {Button,Form,Row,Col, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Forms extends Component {
    constructor(){
        super();
        this.state={
            Num1:'',
            Num2:'',
            total: '',
            list:[],
            value: '+'
        }
    }
    OnCalculator = (e)=>{
        e.preventDefault();
        let totalValue = 0;
        let numberOne = this.state.Num1
        let numberTwo = this.state.Num2
        let sw = this.state.value
        if(!(numberOne==="" || numberTwo==="")){
            if(!isNaN(numberOne) && !isNaN(numberTwo)){
                let num1 = Number(numberOne)
                let num2 = Number(numberTwo)
                switch(sw){
                    case "+":
                        totalValue = num1 + num2
                        break;
                    case "-":
                        totalValue = num1 - num2
                        break;
                    case "*":
                        totalValue = num1 * num2
                        break;
                    case "/":
                        totalValue = num1 / num2
                        break;
                    case "%":
                        totalValue = num1 % num2     
                        break;             
                }
                this.setState({total:totalValue})
                this.setState({Num1:'',Num2:''})
                this.setState({list:[...this.state.list,totalValue]})
            }else{
                alert("value invalid");
            }
        }else{
            alert("Value Empty");
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Form style={{border:'1px solid #A09E9D',padding:'5px',margin:'10px',borderRadius:'5px'}}>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Col sm={12}>
                                        <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/education-196/52/EducationIcons__Maths__Calculate__Calculator__Button__Buttons__Four__Symbols__Machine-512.png" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Col sm={12}>
                                        <Form.Control type="number" value={this.state.Num1} onChange={(event)=>{this.setState({Num1:event.target.value})}}/>
                                        {/* <input type="text" value={this.state.Num1} onChange={(event)=>{this.setState({num1:event.target.value})}}/> */}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Col sm={12}>
                                        <Form.Control type="number" value={this.state.Num2} onChange={(event)=>{this.setState({Num2:event.target.value})}}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Col sm={12}>
                                            <Form.Control as="select" name="select" value={this.state.value} onChange={(event)=>{this.setState({value:event.target.value})}} custom>
                                                <option value="+">+ Puls</option>
                                                <option value="-">- Subtract</option>
                                                <option value="*">* Multiplied</option>
                                                <option value="/">/ Divide</option>
                                                <option value="%">% Module</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                <Form.Group as={Row}>
                                    <Col sm={5}>
                                        <Button type="submit" onClick={this.OnCalculator}>Calculate</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="col-4">
                            <h1>Result History</h1>
                            <ListResult value={this.state.list}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
