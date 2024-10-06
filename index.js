// Helper function to convert object to array
function toArray(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
}

function myEach(collection, callback) {
    const arr = toArray(collection);
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, collection);
    }
    return collection;
}

function myMap(collection, callback) {
    const arr = toArray(collection);
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i], i, collection));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    const arr = toArray(collection);
    let startIndex = 0;

    if (acc === undefined) {
        acc = arr[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
        acc = callback(acc, arr[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const arr = toArray(collection);
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, collection)) {
            return arr[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const arr = toArray(collection);
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i, collection)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });
}

function myFlatten(array, shallow, newArr = []) {
    if (!Array.isArray(array)) return newArr.push(array), newArr;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && !shallow) {
            myFlatten(array[i], shallow, newArr);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
