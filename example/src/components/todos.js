import React from 'react';
import { subscribe } from 'react-rxjs-provider';

import { TODOS_KEY } from '../observables/todos';

const Todos = (props) => (
    <ul>
        {props.values[TODOS_KEY].map((todo, key) => <li key={key}>{todo}</li>)}
    </ul>
);

export default subscribe(TODOS_KEY)(Todos);