{
    //********Generics type********
    //const rollNumbers : number[] = [3,6,8]
    const rollNumbers : Array<number> = [3,6,8]

    //const mentors : string[] = ["Abul","babul","bolbul"]
    const mentors : Array<string> = ["Abul","babul","bolbul"]

    //const boolArray: boolean[] = [true,false,true]
    const boolArray: Array<boolean> = [true,false,true]

    type GenericsArray<T> = Array<T>
    const idNumbers : GenericsArray<number> = [3,6,8]
    const teachers :  GenericsArray<string> = ["Abul","babul","bolbul"]

    const user : GenericsArray<{name:string, age: number}> = [
        {
            name: 'sakina',
            age:100
        },
        {
            name: 'abul',
            age: 100
        },
    ]

    // Generic tuple
    type GenericTuple<X,Y> = [X,Y]
    const Manush : GenericTuple<string,string> = ['Abul','sakina']

    const UserWithId : GenericTuple<number,{name:string,email:string}> = [1234,{name: 'rehana', email: 'rehana@gmail.com'}]


    //********Generics Interface********
    interface Developer <T, X=null>{
        name: string;
        computer: {
            brand:string;
            model:string;
            releaseYear:number
        };
        smartWatch: T;
        bike? : X
    }

    type EmiLabWatch = {
        brand: string;
        model: string;
        display: string
    }
    const poorDeveloper : Developer<EmiLabWatch> = {
        name: 'abul',
        computer:{
            brand: 'Asus',
            model: 'x-255r',
            releaseYear:2020
        },
        smartWatch:{
            brand: 'EmiLab',
            model: 'x-245r',
            display: 'OLED'
        }
    }
 
    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean,
        sleepTrack: boolean
    }
    interface RoyelBike{
        model: string;
        color: string
    }
    const richDeveloper : Developer<AppleWatch,RoyelBike> = {
        name: 'sakina',
        computer:{
            brand: 'Hp',
            model: 'x-255r',
            releaseYear:2020
        },
        smartWatch:{
            brand: 'Apple',
            model: 'x-2435r',
            heartTrack: true,
            sleepTrack: true
        },
        bike:{
            model: 'Royel Enfield',
            color: 'red'
        }
    }
}