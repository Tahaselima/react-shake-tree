import React from 'react';
import PropTypes from 'prop-types';

export default class Apple extends React.Component {

    static propTypes = {
        style: PropTypes.object.isRequired,
        alt: PropTypes.string
    };

    static defaultProps = {
        alt: 'Drop-Apple'
    };


    render() {
        const {style, alt} = this.props;
        return (
            <img style={style} alt={alt} src={require('./Apple.svg')}
                 className="apple"/>
        )
    }
}

