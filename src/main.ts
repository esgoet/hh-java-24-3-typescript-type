type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: { subject : string, grades: (GermanGrade | AmericanGrade | undefined)[]}[];
}

type GermanGrade = 1 | 2 | 3 | 4 | 5 | 6;
type AmericanGrade = "A" | "B" | "C" | "D" | "E" | "F";


const student1: Student = {
    firstName: "Eva",
    lastName: "Rippe",
    age: 15,
    grades: [
        {subject: "Chemistry", grades: [1,"B",1]},
        {subject: "Math", grades: [undefined, "A", "B"]},
        {subject: "Art", grades: [1,3,5]}
    ]
};
const student2: Student = {
    firstName: "Adam",
    lastName: "Apfel",
    age: 17,
    grades: [
        {subject: "Chemistry", grades: [5,"E",3]},
        {subject: "Math", grades: ["D", "B", 3, 4]},
        {subject: "Art", grades: [undefined,3,undefined]}
    ]
}

const student3: Student = {
    firstName: "Lilith",
    lastName: "Eden",
    age: 17,
    grades: [
        {subject: "Chemistry", grades: [1,"A",undefined]},
        {subject: "Math", grades: [undefined, "A", "B"]},
        {subject: "Art", grades: [1,2,2]}
    ]
}

const outputStudent = (student: Student) : string => {
    let output: string = `${student.firstName} ${student.lastName} (${student.age})\n`;
    for (let i:number = 0; i < 30; i++) {
        output += "="
    }
    output += `\nGrades:\n${student.grades.map((grade) => grade.subject + ": " + grade.grades.map((grade) => grade === undefined ? "*" : grade).join(",")).join("\n")}`;
    return output;
}

const outputStudentList = (students: Student[]) : string => {
    return students.map(student => outputStudent(student)).join("\n\n");
}

console.log(outputStudentList([student1, student2, student3]));
