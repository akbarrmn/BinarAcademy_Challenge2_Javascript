// NO 6
function getAngkaTerbesarKedua(dataAngka) {
    if (Array.isArray(dataAngka)) {
        let sorting = dataAngka.sort(function(a, b) { return a - b })

        let uniqueChars = sorting.filter((x, index) => { //Memfilter angka yang sama
            return sorting.indexOf(x) === index
        })

        let result = uniqueChars[uniqueChars.length - 2]
        return result
    } else if (dataAngka === undefined) {
        return 'ERROR : No input detected'
    } else {
        return 'ERROR : Invalid data type '
    }

};
let dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

// console.log(getAngkaTerbesarKedua(dataAngka));
// console.log(getAngkaTerbesarKedua(0));
// console.log(getAngkaTerbesarKedua());