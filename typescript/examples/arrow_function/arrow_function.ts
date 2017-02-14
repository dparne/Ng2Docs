class RandomNumber {

    constructor(private value: number) {

    }

    addValuesTraditionally = function(variableOne: number, variableTwo: number) {
        return this.value + variableOne + variableTwo
    }

    addValuesWithArrow = (variableOne: number, variableTwo: number) => { 
        return this.value + variableOne + variableTwo
    }
}

