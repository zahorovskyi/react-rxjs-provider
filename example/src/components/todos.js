import React from 'react';
import { subscribe } from 'react-rxjs-provider';

import { TODOS_OBSERVABLE_KEY } from '../observables/todos';

const Todos = props => (
    <ul>
        {props.values[TODOS_OBSERVABLE_KEY].map((todo, key) => <li key={key}>{todo}</li>)}
    </ul>
);

export default subscribe(TODOS_OBSERVABLE_KEY)(Todos);