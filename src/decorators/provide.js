import React from 'react';

import Context from '../context';
import { getSubjects } from '../utils';

class Provide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: getSubjects(this.props.keys, this.props.subjects)
        };
    }

    render() {
        return (
            <this.props.WrappedComponent
                {...this.props.externalProps}
                subjects={this.state.subjects}
            />
        );
    }
}

export const provide = (...keys) => WrappedComponent => externalProps => (
    <Context.Consumer>
        {({subjects}) => (
            <Provide
                keys={keys}
                subjects={subjects}
                externalProps={externalProps}
                WrappedComponent={WrappedComponent}
            />
        )}
    </Context.Consumer>
);
