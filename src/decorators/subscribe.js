import React from 'react';

import Context from '../context';
import { getValues } from '../utils';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: getValues(this.props.keys, this.props.observables)
        };
        this.subscribers = [];
    }

    componentDidMount() {
        this.props.keys.forEach(observableKey => {
            const subscriber = this.props.observables[observableKey].subscribe(value => {
                // prevent double rendering when subscriber fires first time
                if (this.state.values[observableKey] !== value) {
                    this.setState({
                        values: {...this.state.values, [observableKey]: value}
                    });
                }
            });

            this.subscribers.push(subscriber);
        });
    }

    render() {
        return (
            <this.props.WrappedComponent
                {...this.props.externalProps}
                values={this.state.values}
            />
        );
    }
}

export const subscribe = (...keys) => WrappedComponent => externalProps => (
    <Context.Consumer>
        {({observables}) => (
            <Subscribe
                keys={keys}
                observables={observables}
                externalProps={externalProps}
                WrappedComponent={WrappedComponent}
            />
        )}
    </Context.Consumer>
);
