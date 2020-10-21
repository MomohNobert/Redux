import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';


function IceCreamContainer({ numOfIcecream, buyIcecream}) {
    return (
        <div>
            <h2>Number of Ice-Cream - {numOfIcecream} </h2>
            <button onClick={buyIcecream}>Buy Ice-Cream</button>
        </div>
    )
}

const mapStateToProps = ({ iceCream }) => {
    return {
        numOfIcecream: iceCream.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (IceCreamContainer)


