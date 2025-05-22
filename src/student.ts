//write code to create a student class with properties name, regNo ,html ,js ,git, AVGMarks and grade
export class student {
    name: string;
    regNo: string;
    html: number;
    js: number;
    git: number;
 

    constructor(name: string, regNo: string, html: number, js: number, git: number) {
        this.name = name;
        this.regNo = regNo;
        this.html = html;
        this.js = js;
        this.git = git;
        
    }

}
