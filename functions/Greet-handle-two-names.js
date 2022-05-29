const greetHandleTwoName = (name) => {
    let counter = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] === name[i].toUpperCase()) counter++;
    } 
    return counter;
};

module.exports = {
    greetHandleTwoName
};
