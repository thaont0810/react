import React, { Component } from 'react';

class KeyNumber extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
     <div>
       <button className={'reset'} value={'C'} onClick={e => this.props.onClick(e.target.value)}>C</button>
       <button className={'clear'} value={'CE'} onClick={e => this.props.onClick(e.target.value)}>CE</button>
       <button className={'oper divide'} value={'/'} onClick={e => this.props.onClick(e.target.value)}>/</button>

       <button className={'num'} value={'7'} onClick={e => this.props.onClick(e.target.value)}>7</button>
       <button className={'num'} value={'8'} onClick={e => this.props.onClick(e.target.value)}>8</button>
       <button className={'num'} value={'9'} onClick={e => this.props.onClick(e.target.value)}>9</button>
       <button className={'oper multiply'} value={'*'} onClick={e => this.props.onClick(e.target.value)}>x</button>

       <button className={'num'} value={'4'} onClick={e => this.props.onClick(e.target.value)}>4</button>
       <button className={'num'} value={'5'} onClick={e => this.props.onClick(e.target.value)}>5</button>
       <button className={'num'} value={'6'} onClick={e => this.props.onClick(e.target.value)}>6</button>
       <button className={'oper minus'} value={'-'} onClick={e => this.props.onClick(e.target.value)}>-</button>

       <button className={'num'} value={'1'} onClick={e => this.props.onClick(e.target.value)}>1</button>
       <button className={'num'} value={'2'} onClick={e => this.props.onClick(e.target.value)}>2</button>
       <button className={'num'} value={'3'} onClick={e => this.props.onClick(e.target.value)}>3</button>
       <button className={'oper plus'} value={'+'} onClick={e => this.props.onClick(e.target.value)}>+</button>

       <button className={'num zero'} value={'0'} onClick={e => this.props.onClick(e.target.value)}>0</button>
       <button className={'oper equal'} value={'='} onClick={e => this.props.onClick(e.target.value)}>=</button>
     </div>
    );
  }
}

export default KeyNumber;
