/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    // Return false if target class is not valid or object is null/undefined
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }

    let currentPrototype = Object.getPrototypeOf(obj);

    while (currentPrototype !== null) {
        if (currentPrototype === classFunction.prototype) {
            return true;
        }
        currentPrototype = Object.getPrototypeOf(currentPrototype);
    }

    return false;
};