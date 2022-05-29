const greetHandleMixing = (name) => {
    let lowerName = [];
    let upperName = [];

    for (let i = 0; i < name.length; i++) {
        name[i] !== name[i].toUpperCase()
            ? lowerName.push(name[i])
            : upperName.push(name[i]);
    }

    let lowName = 'Hello,';
    let upName = '. AND HELLO ';

    for (let i = 0; i < lowerName.length; i++) {
        i !== lowerName.length - 1
            ? (lowName += ` ${lowerName[i]}`)
            : (lowName += ` and ${lowerName[i]}`);
    }

    for (let i = 0; i < upperName.length; i++) {
        upName += `${upperName[i]}!`;
    }
    return lowName + upName;
};

module.exports = {
    greetHandleMixing,
};
