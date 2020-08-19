import React, { Fragment } from 'react';

export default function Page(props) {
    const { suggestions} = props;
    //console.log(props);
    return (
        <Fragment>
            Results
            <h1>{suggestions}</h1>
        </Fragment>
    );
}