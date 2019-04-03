import React, { Component } from 'react';
import '../calc.css';
import Result from './Result'
import KeyNumber from "./KeyNumber";

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0',
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (value) => {
        if (value === '=') {
            this.calculate();
        }
        else if (value === 'C') {
            this.reset();
        }
        else if (value === 'CE') {
            this.clear();
        }
        else {
           if (this.state.result === '0' && value !== '0') {
               this.setState({
                   result: value
               })
           }
           else if (this.state.result !== '0') {
               this.setState({
                   result: this.state.result + value
               })
           }

        }
    };

    calculate = () => {
        this.setState({
            result: eval(this.state.result)
        })
    };

    reset = () => {
        this.setState({
            result: '0'
        })
    };

    clear = () => {
        const { result } = this.state;

        this.setState({
            result: result.slice(0,-1)
            // result: result.substring(0, result.length - 1)
        })
    };

    render() {

        return (
            <div className={'container'}>
                <Result result = {this.state.result}/>
                <KeyNumber onClick = { e => this.handleClick(e)}/>
            </div>
        )
    }
}

export default Calc;