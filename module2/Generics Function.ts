{
    const createArray = (param : string): string[] => {
        return [param]
    }

    const createArrayWithGenerics = <T>(param : T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh')
    const res2 = createArrayWithGenerics<string>('Bangladesh')
    const res3 = createArrayWithGenerics<boolean>(true)
    type User = {id:number, name: string}
    const res4 = createArrayWithGenerics<User>({
        id: 2222,
        name: 'Jorina'
    })

    


    const createArrayWithTople = <T,Q>(param1 : T,param2: Q): [T,Q] => {
        return [param1,param2]
    }
    const res5 = createArrayWithTople<string,number>('Bangladesh',333)
    const res6 = createArrayWithTople<string,{name: string}>('Bangladesh',{name: "Asia"})
    


    const addCourseToStudent = <T>(student: T) =>{
        const course = 'Next level web deb'
        return{
            ...student,
            course
        }
    }
    const student1= addCourseToStudent({name: 'sakina', email: 'sakina@gmail.com'})
    const student2= addCourseToStudent({name: 'karina', gmail: 'karina@gmail.com'})
}