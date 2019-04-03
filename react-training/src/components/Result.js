import React, { Component } from 'react';

class Result extends Component{
    render() {
        const {result} = this.props;

        return (
            <p className={'result'}>
                {result}
            </p>
        )
    }
}

export default Result;