import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const DogRefresh = props => {
    const handleRefresh = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <div>
            {props.isFetchingData ? (
                <div><p>Loading...</p></div>
            ) : (
                    <button onClick={handleRefresh}>New Dog Pls</button>
                )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(DogRefresh);