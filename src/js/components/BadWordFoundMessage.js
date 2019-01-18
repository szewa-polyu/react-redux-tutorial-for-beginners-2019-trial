import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { isBadWordFound: state.isBadWordFound };
}

const ConnectedBadWordFoundMessage = ({ isBadWordFound }) => {
    if (!isBadWordFound) {
        return null;
    }

    return (
        <div>
            Bad words found!
        </div>
    );
};

const BadWordFoundMessage = connect(mapStateToProps)(ConnectedBadWordFoundMessage);

export default BadWordFoundMessage;
