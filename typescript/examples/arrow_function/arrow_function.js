var RandomNumber = (function () {
    function RandomNumber(value) {
        var _this = this;
        this.value = value;
        this.addValuesTraditionally = function (variableOne, variableTwo) {
            return this.value + variableOne + variableTwo;
        };
        this.addValuesWithArrow = function (variableOne, variableTwo) {
            return _this.value + variableOne + variableTwo;
        };
    }
    return RandomNumber;
}());
