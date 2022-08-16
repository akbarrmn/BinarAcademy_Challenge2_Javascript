// No 3
function checkEmail(email) {
    let filterEmail = /^[a-zA-Z0-9_\.]+@+[a-zA-Z]+\./g
    if (typeof email == 'string') {
        if (filterEmail.test(email)) {
            return `VALID`
        } else {
            return `INVALID`
        }
    } else if (email === undefined) {
        return 'ERROR : No input detected'
    } else {
        return 'ERROR : Invalid data type '
    }
};
// console.log(checkEmail('apranata@binar.co.id'))
// console.log(checkEmail('apranata@binar.com'))
// console.log(checkEmail('apranata@binar'))
// console.log(checkEmail('apranata'))
// console.log(checkEmail(3322));
// console.log(checkEmail())