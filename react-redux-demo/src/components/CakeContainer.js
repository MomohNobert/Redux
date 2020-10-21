import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';


function CakeContainer({ buyCake, numOfCakes }) {
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick={buyCake}>Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
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
    (CakeContainer)

