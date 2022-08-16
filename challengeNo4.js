// No 4
function CheckPassword(password) {
    let filterPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/g
    if (typeof password == 'string') {
        if (password.match(filterPassword)) {
            return true
        } else {
            return false
        }
    } else if (password === undefined) {
        return 'ERROR : No input detected'
    } else {
        return 'ERROR : Invalid data type '
    }

};
// console.log(CheckPassword('Meong2021'));
// console.log(CheckPassword('meong123'));
// console.log(CheckPassword('@eong'));
// console.log(CheckPassword('Meong2'));
// console.log(CheckPassword(25));
// console.log(CheckPassword());