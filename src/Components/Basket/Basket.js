import React from 'react';
import {connect} from 'react-redux';
import _ from "lodash";
import Apple from "../Apple/Apple";
import PropTypes from 'prop-types';
import '../../Style/basket.scss'

class Basket extends React.Component
{

    static propTypes = {
        basket: PropTypes.array
    };


    render() {
        const {basket} = this.props;
        return(
            <div className={"basket"}>
                <div className="apples">
                    <img alt='Apple-Basket' className="basket" src={require('./basket.svg')} />
                    {basket.length > 0 &&
                        // Place apples in basket
                    _.map(basket, (index,indis) =>
                        <Apple key={index} style={{top: `${100 - ((indis - indis % 5) / 5 * 15) - 50}%`,left:`${((indis % 5) * 11) + 20}%`,zIndex: 3}} />)
                    }
                </div>
            </div>
        )
    }
}

// Setup Redux
const mapStateToProps = (state, ownProps) => ({
    basket: state.basket.basket
});

Basket = connect(mapStateToProps)(Basket);

export default Basket;