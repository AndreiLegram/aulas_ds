import React from 'react';

class PrimeiroComponente extends React.Component {
    render() {
        return <p>{this.props.children}</p>;
    }
}
    
export default PrimeiroComponente;
