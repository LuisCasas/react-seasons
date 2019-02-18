import React from 'react';

const getSeason = (lat) => {

    const month = new Date().getMonth;

    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat);

    return (
        <div>Time of the year: {season}</div>
    );
};

export default SeasonDisplay;