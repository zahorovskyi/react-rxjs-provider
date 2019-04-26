import React from 'react';

import Context from './context';

export class Provider extends React.Component {
    constructor(props) {
        super(props);

        const {children, ...subjects} = props;

        this.state = {
            subjects
        };
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
