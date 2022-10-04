/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function sort(students) {
    for (let i = 0; i < students.length - 2; i++) {
        for (let j = 0; j < students.length - 1; j++) {
            if (students[j].firstName > students[j + 1].firstName) {
                let tmp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = tmp;
            }
        }
    }

    return students;
}

function result(students, groups) {
    students = sort(students);
    let memberCount = students.length / groups;
    let studentGroups = [];

    for (let i = 0; i < groups ; i++) {
        let currentMemberCount;
        if (students.length >= groups) {
            currentMemberCount = Math.ceil(memberCount);
        } else {
            currentMemberCount = Math.floor(memberCount);
        }
        studentGroups.push(students.slice(0, currentMemberCount));
        students = students.slice(currentMemberCount);
    }

    return studentGroups;
}

console.log(result(students, groups));
