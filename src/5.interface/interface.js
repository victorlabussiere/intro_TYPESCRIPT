"use strict";
let pessoa = {
    firstName: 'Victor',
    lastName: "Labussiere"
};
function exemploInterface(param) {
    return {
        ...param,
        fullName: `${param.firstName} ${param.lastName}`
    };
}
module.exports = exemploInterface;
