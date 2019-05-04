import React from 'react';
import { subscribe } from 'react-rxjs-provider';

import { INTERVAL_OBSERVABLE_KEY } from '../observables/interval';

const Interval = props => (
    <div>
        {props.values[INTERVAL_OBSERVABLE_KEY]}
    </div>
);

export default subscribe(INTERVAL_OBSERVABLE_KEY)(Interval);