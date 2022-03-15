function evensOddsChars(arrays) {

    let evens = [];
    let odds = [];
    let chars = [];
    let obj = {};

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] % 2 === 0) {
            evens.push();
        } else if (arrays[i] % 2 !== 0) {
            odds.push();
        } else { chars.push() }
    }

    obj.evens = "evens";
    obj.odds = "odds";
    obj.chars = "chars";

    return obj;

}

let arr = ['a', 'b', 'c', 'd', 1, 2, 3, 4, 6, 8];
evensOddsChars(arr);

//how to add new properties to an object Javascript
//