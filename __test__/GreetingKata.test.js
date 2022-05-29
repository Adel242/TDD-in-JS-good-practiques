const { greet } = require('../greetinKata');

describe('greet kata example', () => {
    it('must show message hello name', () => {
        // arrage
        const name = 'Brian';
        const resultExpect = `Hello, ${name}`;
        // act
        const resultGreet = greet(name);
        // assert
        expect(resultGreet).toBe(resultExpect);
    });
    it('must be show "Hello, my friend" if name is null', () => {
        //arrage
        const name = null;
        const resultExpected = 'Hello, my friend';
        //act
        const resultGreet = greet(name);
        //assert
        expect(resultGreet).toBe(resultExpected);
    });
    it('must show message in uppercase', () => {
        // arrage
        const name = 'BRIAN';
        const resultExpect = `HELLO, ${name}`;
        // act
        const resultGreet = greet(name);
        // assert
        expect(resultExpect).toBe(resultGreet);
    });
    it('must be show then both names if name is an array of two names', () => {
        //arrage
        const name = ['Brian', 'Crist'];
        const resultExpect = `Hello, ${name[0]} and ${name[1]}`;
        //act
        const resultGreet = greet(name);
        //assert
        expect(resultExpect).toBe(resultGreet);
    });
    it('must be show common bettwen the name to array', () => {
        // arrage
        const name = ['Francisco', 'Brian', 'Cristian'];
        const resultExpect = `Hello, ${name[0]}, ${name[1]}, and ${name[2]}`;  
        // act
        const resultGreet = greet(name); 
        // assert
        expect(resultGreet).toBe(resultExpect);
    });
    it('must show mixing of normal and shouted names', () => {
        // arrage
        const name = ['Francisco', 'BRIAN', 'Cristian']
        const resultExpect = `Hello, ${name[0]} and ${name[2]}. AND HELLO ${name[1]}!`
        // act
        const resultGreet = greet(name);
        // assert
        expect(resultGreet).toBe(resultExpect);
    });
    it('must show commas beetwen names ', () =>{
        // arrage
        const name = ['Franciso', 'Brian, Cristian']
        const resultExpect = `Hello, ${name[0]}, ${name[1]}`;
        // act
        const resultGreet = greet(name);
        // assert 
        expect(resultGreet).toBe(resultExpect);
    });
});
