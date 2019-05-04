import React from 'react';

import Context from '../context';
import { getObservables } from '../utils';

class Inject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            observables: getObservables(this.props.keys, this.props.observables)
        };
    }

    render() {
        return (
            <this.props.WrappedComponent
                {...this.props.externalProps}
                observables={this.state.observables}
            />
        );
    }
}

export const inject = (...keys) => WrappedComponent => externalProps => (
    <Context.Consumer>
        {({observables}) => (
            <Inject
                keys={keys}
                observables={observables}
                externalProps={externalProps}
                WrappedComponent={WrappedComponent}
            />
        )}
    </Context.Consumer>
);
