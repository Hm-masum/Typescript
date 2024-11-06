{
    //********Constrains******** 
    const addCourseToStudent = <T extends {id:number,name:string,email:string}>(student: T) =>{
        const course = 'Next level web deb'
        return{
            ...student,
            course
        }
    }
    const student1= addCourseToStudent({id:234,name: 'sakina', email: 'sakina@gmail.com'})
    const student2= addCourseToStudent({id:434,name: 'karina', email: 'karina@gmail.com'})
    const student3= addCourseToStudent({id:434,name: 'jarina', email: 'jarina@gmail.com'})


    //******** Key of ******** 
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    type Owner1 = "bike" | "car" | "ship"
    type Owner2 = keyof Vehicle
    const person1 : Owner2 = "ship"


    //********Constrains using Key of******** 
    const getPropertyValue =<X,Y extends keyof X> (obj: X, key : Y) => {
        return obj[key]
    }
    const user ={
        name: "sakina",
        age: 35,
        address: "ctg"
    }
    const car = {
        model: "Toyota",
        year:500
    }
    const result1 = getPropertyValue(user, 'name')
    const result2 = getPropertyValue(car, 'year')
}