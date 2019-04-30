import React from 'react';
import { subscribe } from 'react-rxjs-provider';

import { INTERVAL_KEY } from '../observables/interval';

const Interval = props => (
    <div>
        {props.values[INTERVAL_KEY]}
    </div>
);

export default subscribe(INTERVAL_KEY)(Interval);