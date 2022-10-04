/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
    { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
    { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
    let notUniqueFields = [];
    let tmpValue;

    for (key in data[0]) {
        tmpValue = null;
        for (row of data) {
            if (
                tmpValue != null
                && tmpValue != row[key]
            ) {
                notUniqueFields.push(key);
                break;
            }
            tmpValue = row[key];
        }
    }

    return notUniqueFields;
}

console.log(result(data));
