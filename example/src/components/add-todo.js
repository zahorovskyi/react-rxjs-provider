import React from 'react';
import { observe } from 'react-rxjs-provider';

import { TODOS_KEY } from '../observables/todos';

class AddTodo extends React.Component {
    addTodo = (event) => {
        event.preventDefault();

        if (event.target[0].value) {
            const todos$ = this.props.observables[TODOS_KEY];

            todos$.next([
                ...todos$.value,
                event.target[0].value
            ]);

            event.target[0].value = '';
        }
    };

    render() {
        return (
            <form onSubmit={this.addTodo}>
                <input type="text"/>
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default observe(TODOS_KEY)(AddTodo);