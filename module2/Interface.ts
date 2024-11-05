{
    //********Interface********
    //Interface can't work in primitive data.
    // type
    type rollNumber = number;
    type User1 = {
        name:string;
        age:number
    }

    type UserWithRole1 = User1 & {role: string}
    const user1: UserWithRole1 = {
        name: "sakina",
        age:150,
        role: 'jadodar'
    }

    //object interface
    interface User2{
        name:string;
        age:number
    }
    const user2: User2 = {
        name: "sakina",
        age:150
    }
    interface UserWithRole2 extends User2 {role: string}
    const user3: UserWithRole2 = {
        name: "babul",
        age:150,
        role:"darowan"
    }

    
    // array interface
    type Roll1 = number[]
    const rollNumber1 : Roll1 = [1,2,3,4,5]

    interface Roll2 {
        [index : number] : number
    }
    const rollNumber2 : Roll2 = [1,2,3,4,5]


    // function interface
    type Add = (num1:number, num2:number) => number;
    const add : Add = (num1, num2) => num1+num2;

    interface Sum {
       (num1:number, num2:number) : number
    }
    const sum : Sum = (num1, num2) => num1+num2;
}