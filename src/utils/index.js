export const getValues = (keys, subjects) => {
    return keys.reduce((accumulator, subjectKey) => {
        accumulator[subjectKey] = subjects[subjectKey].value;
        return accumulator;
    }, {});
};

export const getSubjects = (keys, subjects) => {
    return keys.reduce((accumulator, subjectKey) => {
        accumulator[subjectKey] = subjects[subjectKey];
        return accumulator;
    }, {});
};
