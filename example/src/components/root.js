import React from 'react';
import { Provider } from 'react-rxjs-provider';

import AddTodo from './add-todo';
import Todos from './todos';
import Interval from './interval';

import * as observables from '../observables';

const Root = () => {
    return (
        <Provider {...observables}>
            <Interval />
            <AddTodo/>
            <Todos/>
        </Provider>
    );
};

export default Root;
