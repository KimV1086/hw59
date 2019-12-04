import React, {PureComponent} from 'react';
import './Button.css'

class Button extends PureComponent {

    componentDidUpdate() {
        console.log('btn updated')
    }

    render() {
        return (
            <button onClick={this.props.onClick} className="btn">
                {this.props.label}
            </button>
        );
    }

};

export default Button;
