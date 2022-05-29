const greetMoreThanTwoName = (name) => {
    let result = `Hello, `;
        for (let i = 0; i < name.length; i++) {
            i !== name.length - 1
                ? (result = result + `${name[i]}, `)
                : (result = result + `and ${name[i]}`);
        }  return result;
    };
   
module.exports = {
    greetMoreThanTwoName,
};
