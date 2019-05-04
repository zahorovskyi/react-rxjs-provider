# react-rxjs-provider

#### Examples:
[Example based on create-react-app](https://github.com/zahorovskyi/react-rxjs-provider/tree/master/example)

#### API:
`react-rxjs-provider` providers ```<Provider />```, which makes observables available to the rest of your app:
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-rxjs-provider';
import * as observables from '../observables';

import App from './App';

ReactDOM.render(
  <Provider {...observables}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

`react-rxjs-provider` providers ```@subscribe()``` HOC to subscribe your component to observables:
``` javascript
import React from 'react';
import { subscribe } from 'react-rxjs-provider';

import { TODOS_OBSERVABLE_KEY } from '../observables/todos';

const Todos = props => (
    <ul>
        {props.values[TODOS_OBSERVABLE_KEY].map((todo, key) => <li key={key}>{todo}</li>)}
    </ul>
);

export default subscribe(TODOS_OBSERVABLE_KEY)(Todos);
```

`react-rxjs-provider` providers ```@inject()``` HOC to inject observables in your component:
``` javascript
import React from 'react';
import { inject } from 'react-rxjs-provider';

import { TODOS_OBSERVABLE_KEY } from '../observables/todos';

class AddTodo extends React.Component {
    addTodo = () => {
        // ...
        this.props.observables[TODOS_OBSERVABLE_KEY].next(
            // ...
        );
        // ...
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

export default inject(TODOS_OBSERVABLE_KEY)(AddTodo);
```