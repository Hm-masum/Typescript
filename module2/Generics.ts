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

}