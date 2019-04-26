import React from 'react';

import Context from '../context';
import { getValues } from '../utils';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: getValues(this.props.keys, this.props.subjects)
        };
        this.subscribers = [];
    }

    componentDidMount() {
        this.props.keys.forEach(subjectKey => {
            const subscriber = this.props.subjects[subjectKey].subscribe(value => {
                // prevent double rendering when subscriber fires first time
                if (this.state.values[subjectKey] !== value) {
                    this.setState({
                        values: {...this.state.values, [subjectKey]: value}
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
        {({subjects}) => (
            <Subscribe
                keys={keys}
                subjects={subjects}
                externalProps={externalProps}
                WrappedComponent={WrappedComponent}
            />
        )}
    </Context.Consumer>
);
