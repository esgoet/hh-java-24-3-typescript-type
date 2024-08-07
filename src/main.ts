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
    lastName: "Goetzke",
    age: 27,
    grades: [1,"B",1,undefined, "A", "B"]
};
console.log(student1);

const outputStudent = (student: Student) => {
    let output: string = `${student.firstName} ${student.lastName} (${student.age})\n`;
    for (let i:number = 0; i < 30; i++) {
        output += "="
    }
    output += `\nGrades: ${student.grades.map((grade) => grade === undefined ? "*" : grade ).join(",")}`
    console.log(output);
}

outputStudent(student1);