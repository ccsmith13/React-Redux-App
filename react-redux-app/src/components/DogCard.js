import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const DogCard = props => {
    useEffect(() => {
        props.getData();
    }, []);
    if (props.dogImgUrl === "") {
        return (
            <div>Please be patient while the doggos load!</div>
        )
    }
    return (

        <div>
            <h1>Look at this nice dog...</h1>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    <div>
                        <img src={props.dogImgUrl} alt="doggo" />
                    </div>
                )}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        dogImgUrl: state.dogImgUrl,
        error: state.error,
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(DogCard);