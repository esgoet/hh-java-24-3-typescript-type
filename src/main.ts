type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: Grade[];
}

type Grade = 1 | 2 | 3 | 4 | 5 | 6;

const student1: Student = {
    firstName: "Eva",
    lastName: "Goetzke",
    age: 27,
    grades: [1,2,1]
};
console.log(student1);

const outputStudent = (student: Student) => {
    let output: string = `${student.firstName} ${student.lastName} (${student.age})\n`;
    for (let i:number = 0; i < 30; i++) {
        output += "="
    }
    output += `\nGrades: ${student.grades.join(",")}`
    console.log(output);
}

outputStudent(student1);