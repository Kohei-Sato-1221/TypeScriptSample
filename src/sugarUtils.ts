export const sayHello = (name: string) => {
    console.log(`Hello, ${name} !!`);
};


export const getEmpNumber = (employee: {empNum: number}) => {
    return employee.empNum;
};

//interface
export interface Employee {
    empNum: number;
    name: string;
    isSingle: boolean;
    position?: string;
}

export const getEmpName = (employee: Employee) => {
    return employee.name;
}

//可変長引数関数
export const showYourGirlFriends: (...names: string[]) => void = (...names) => {
    console.log('Your girls friends... ', names);
};

//Class
export class Student {
    private name: string;
    private seitoNum: number;

    public constructor(name:string, seitoNum:number){
        this.name = name;
        this.seitoNum = seitoNum;
    }

    public selfIntroduction(): void{
        console.log('Myname is ', this.name, ' Number is ', this.seitoNum);
    }
}
