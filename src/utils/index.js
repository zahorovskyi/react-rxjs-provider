export const getValues = (keys, observables) => {
    return keys.reduce((accumulator, observableKey) => {
        accumulator[observableKey] = observables[observableKey].value;
        return accumulator;
    }, {});
};

export const getObservables = (keys, observables) => {
    return keys.reduce((accumulator, observableKey) => {
        accumulator[observableKey] = observables[observableKey];
        return accumulator;
    }, {});
};
