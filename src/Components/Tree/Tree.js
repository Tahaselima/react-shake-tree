import React from 'react';
import '../../Style/tree.scss';

export default class Tree extends React.Component {


    render() {
        return (
            <img className="tree" src={require('./tree-1.svg')} alt={"Tree"}/>
        )
    }
}

