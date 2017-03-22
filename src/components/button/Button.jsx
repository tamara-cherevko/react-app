import React, { Component } from 'react';
import './button.less';

class Button extends Component {
    static propTypes = {
        children: React.PropTypes.node.isRequired
    };

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    onSubmit = () => {
        console.log('onSubmit');
    };

    render() {
        const { children } = this.props;

        return (
            <button onClick={this.onSubmit}>{children}</button>
        );
    }
}

export default Button;
