import React from 'react';
import {connect} from 'react-redux';
import Apple from "../Apple/Apple";
import Tree from "../Tree/Tree";
import _ from 'lodash';
import $ from "jquery";
import {setBasket} from "../../Utils/locations";
import PropTypes from "prop-types";
import '../../Style/shake.scss';

class AppleTree extends React.Component {

    state = {
        basket: []
    };

    static propTypes = {
        apples: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.startDropping = this.startDropping.bind(this);
        this.tree = React.createRef(); // for catch the tree element
    }

    startDropping() {
        // All apples will drop in different times
        const {basket, apples} = this.props;
        let length = Math.floor(Math.random() * apples.length)  //number of apples that will fall
        Array(length).fill().map((item,index) => {
            let time = ((Math.random() * length) / 2) * 1000;
            let apple = $('.Tree .apple:eq(' + index + ')');
            // drop apple to ground
            apple.animate({
                top: '100%'  //apples on the floor
            }, time, () => {
                setTimeout(() => {
                    apple.remove(); 
                    basket.push(index); //apple on the basket
                    setBasket([...basket]); //set basket state
                }, 1000);
            });
            return true;
        })

    }


    shakeTree() {
        if(this.tree.current.className === 'content jiggle')
            return;
        // shake chosen element for 3 sec, rot
        this.tree.current.classList.add('jiggle');
        // after 3 sec, we will stop shake
        setTimeout(() => {
            this.tree.current.classList.remove('jiggle');
            // start dropping
            this.startDropping();
        }, 3000);
    }


    render() {
        const {apples} = this.props;
        return (
            <div className={'content'} onClick={this.shakeTree.bind(this)} ref={this.tree}> 
                <div className="Tree" ref={this.apples}>
                    {
                        _.map(apples, (n, index) => {
                                return <Apple key={index} style={n}/>
                            }
                        )
                    }
                </div>
                <Tree />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    basket: state.basket.basket
});

AppleTree = connect(mapStateToProps)(AppleTree);

export default AppleTree;