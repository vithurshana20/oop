//write code to create a student class with properties name, regNo ,html ,js ,git, AVGMarks and grade
export class student {
    name: string;
    regNo: string;
    html: number;
    js: number;
    git: number;
    AVGMarks: number;
    grade: string;

    constructor(name: string, regNo: string, html: number, js: number, git: number) {
        this.name = name;
        this.regNo = regNo;
        this.html = html;
        this.js = js;
        this.git = git;
        this.AVGMarks = (html + js + git) / 3;
        this.grade = this.calculateGrade();
    }

    calculateGrade(): string {
        if (this.AVGMarks >= 90) {
            return 'A+';
        } else if (this.AVGMarks >= 80) {
            return 'A';
        } else if (this.AVGMarks >= 70) {
            return 'B';
        } else if (this.AVGMarks >= 60) {
            return 'C';
        } else if (this.AVGMarks >= 50) {
            return 'D';
        } else {
            return 'F';
        }
    }
}
