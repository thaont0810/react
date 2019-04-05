import React, {Component} from 'react';
import '../calc.css';
import Result from './Result'
import KeyNumber from "./KeyNumber";

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '0'
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (btn) => {
        if (btn === '=') {
            this.calculate();
        } else if (btn === 'C') {
            this.reset();
        } else if (btn === 'CE') {
            this.clear();
        } else {
            if (this.state.result === '0' && btn !== '0') {
                this.setState({
                    result: btn
                })
            } else if (this.state.result !== '0') {
                this.setState({
                    result: this.state.result + btn
                })
            }

        }
    };


    calculate = () => {
        const {result} = this.state;

        let checkResult = '';
        if (result.includes('--')) {
            checkResult = result.replace('--', '+')
        } else {
            checkResult = result
        }

        try {
            this.setState({
                // turn result to string
                result: (eval(checkResult)) + ""
            })

        } catch (e) {
            this.setState({
                result: 'error'
            })
        }
    };


    reset = () => {
        this.setState({
            result: '0'
        })
    };

    clear = () => {
        const {result} = this.state;

        this.setState({
            result: result.slice(0, -1) || '0'
            // result: result.substring(0, result.length - 1) || '0'
        })
    };

    render() {

        return (
            <div className={'container'}>
                <Result result={this.state.result}/>
                <KeyNumber onClick={e => this.handleClick(e)}/>
            </div>
        )
    }
}

export default Calc;