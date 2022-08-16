// NO 5
function getSplitName(name) {
    let obj = {}
    if (typeof name == "string" && name !== undefined) {
        let words = name.split(' ')
        if (words.length <= 3 && words.length != 2) {
            obj.firstName = words[0]
            obj.middleName = words[1] || null
            obj.lastName = words[2] || null
        } else if (words.length == 2) {
            obj.firstName = words[0]
            obj.middleName = null
            obj.lastName = words[1] || null
        } else {
            return 'ERROR : This function is only for 3 characters name'
        }
        return obj
    } else {
        return `ERROR : You're make the wrong input`
    }
};
// console.log(getSplitName('Aldi Daniela Pranata'));
// console.log(getSplitName('Dwi Kuncoro'));
// console.log(getSplitName('Aurora'));
// console.log(getSplitName('Aurora Aureliya Sukma Darma'));
// console.log(getSplitName(0));