import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';


function IceCreamContainer({ buyIcecream, numOfIcecream }) {
    return (
        <div>
            <h2>Number of Ice-Cream - {numOfIcecream} </h2>
            <button onClick={buyIcecream}>Buy Ice-Cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecream: state.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (IceCreamContainer)


