import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';

class FrontPage extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {
        text: 'Test'
    };

    state = {
        desc: 'Test 2'
    };

    updateText = () => {
        this.setState({
            desc: this.inputText ? this.inputText.value : ''
        });
    };

    render() {
        const { text } = this.props;
        const { desc } = this.state;

        return (
            <div className="App">
                <div className="App-header">
                    <input ref={(node) => { this.inputText = node; }} type="text" onBlur={this.updateText} />
                    <h2>{text}</h2>
                    <h2>{desc}</h2>
                    <Button>Submit</Button>
                </div>
            </div>
        );
    }
}

export default FrontPage;
