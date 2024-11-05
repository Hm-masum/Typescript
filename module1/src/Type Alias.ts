{
    type Student ={
        name: string;
        age:number;
        gender:string;
        contactNo?:string;
        address:string
    }

    const student1: Student ={
        name: 'abul',
        age: 101,
        gender: 'male',
        contactNo: '123456',
        address: 'uganda'
    };

    const student2: Student={
        name: 'bolbul',
        age: 103,
        gender: 'male',
        address: 'Bot gas tola'
    }

    const student3: Student={
        name: 'babul',
        age: 105,
        gender: 'male',
        address: 'Akaser tara'
    }

    type UserName = string
    type IsAdmin = boolean
    const userName : UserName = 'sakina'
    const isAdmin: IsAdmin = true

    type Add = (num1:number, num2:number) => number
    const add: Add=(num1,num2) => num1+num2;
}