const { greetSingle } = require('./functions/Greet-a-single');
const { greetHandleNull } = require('./functions/Greet-handle-nulls');
const { greetHandleShouting } = require('./functions/Greet-handle-shouting');
const { greetHandleTwoName } = require('./functions/Greet-handle-two-names');
const { greetMoreThanTwoName } = require('./functions/Greet-more-than-two-name');
const { greetHandleMixing } = require('./functions/Greet-handle-mixing');

const greet = (name) => {
    if ('string' === typeof name) {
        if (name === name.toUpperCase()) return greetHandleShouting(name);
        if (name !== name.toUpperCase()) return greetSingle(name);
    }
    if (name === null) return greetHandleNull(name);

    if (Array.isArray(name)) {
        let counter = greetHandleTwoName(name);
        if (counter === 0) {
            if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}`;
            if (name.length >= 3) {
                return (result = greetMoreThanTwoName(name));
            }
        } else {
            return result = greetHandleMixing(name);
        }
    }
};

module.exports = {
    greet,
};
