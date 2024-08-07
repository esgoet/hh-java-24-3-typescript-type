type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: (GermanGrade | AmericanGrade | undefined)[];
}

type GermanGrade = 1 | 2 | 3 | 4 | 5 | 6;
type AmericanGrade = "A" | "B" | "C" | "D" | "E" | "F";

const student1: Student = {
    firstName: "Eva",
    lastName: "Rippe",
    age: 15,
    grades: [1,"B",1,undefined, "A", "B"]
};
const student2: Student = {
    firstName: "Adam",
    lastName: "Apfel",
    age: 17,
    grades: [5,undefined,3,undefined, "C", "B"]
}

const student3: Student = {
    firstName: "Lilith",
    lastName: "Eden",
    age: 17,
    grades: [2,1,undefined,"C", "A", 2]
}

const outputStudent = (student: Student) : string => {
    let output: string = `${student.firstName} ${student.lastName} (${student.age})\n`;
    const charCount : number = student.firstName.length + student.lastName.length + student.age.toString().length + 4;
    for (let i:number = 0; i < charCount; i++) {
        output += "="
    }
    output += `\nGrades: ${student.grades.map((grade) => grade === undefined ? "*" : grade ).join(",")}`
    return output;
}

const outputStudentList = (students: Student[]) : string => {
    return students.map(student => outputStudent(student)).join("\n\n");
}

console.log(outputStudentList([student1, student2, student3]));
