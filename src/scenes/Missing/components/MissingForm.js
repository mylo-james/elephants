import React from 'react';
import { withRouter } from 'react-router-dom';

function Missingform(props) {
    return (
        <form>
            <div />
            <button onClick={() => props.history.push('/')}>
                Get back to the herd!
            </button>
            <div />
        </form>
    );
}

export default withRouter(Missingform);
