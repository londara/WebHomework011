import React, { Component } from 'react'
import {Form,Col,Button,Card,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Result';
export default class CalculatorFrom extends Component {
    constructor(){
        super();
        this.state={
            Number1: '',
            Number2: '',
            value: '+',
            total:'',
            result: []
        }
    }
    GetValue = (event)=>{
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name] : value
        })
    }
    OnCalculator=(event)=>{
        event.preventDefault();
        let totalValue = 0;
        let number1 = this.state.Number1
        let number2 = this.state.Number2
        let val = this.state.value
        if(!(number1 ==="" || number2 ==="") ){
            let num1 = Number(number1)
            let num2 = Number(number2)
            if(!isNaN(num1) && !isNaN(num2)){
                switch(val){
                    case "+":
                            totalValue = num1 + num2
                            break;
                    case "-":
                            totalValue = num1 - num2
                            break;
                    case "*":
                            totalValue = num1 * num2;
                            break;
                    case "/":
                            totalValue = num1 / num2;
                            break;
                    case "%":
                            totalValue = num1 % num2;
                            break;                        
                }
                this.setState({total:totalValue})
                this.setState({Number1:'',Number2:''})
                this.setState({result:[...this.state.result,totalValue]})
            }else{
                alert("value Invalid!")
            }
        }else{
            alert("value Empty!")
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
                                        <Form.Control type="number" value={this.state.Number1} name="Number1" onChange={this.GetValue}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Col sm={12}>
                                        <Form.Control type="number" value={this.state.Number2} name="Number2" onChange={this.GetValue}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                        <Col sm={12}>
                                            <Form.Control as="select" name="value" onChange={this.GetValue} custom>
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
                            <Result value={this.state.result}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
