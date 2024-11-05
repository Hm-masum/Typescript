{
    //*******Ternary Operator*******
    const age:number = 15;

    if(age >= 18){
        console.log("adult");
    } else{
        console.log("not adult");
    }

    const isAdult = age >= 18? "adult" : "not adult"
    console.log({isAdult})

    
    //*******Nullish Coalescing operator*******
    const isAuthenticated = null;
    const result1= isAuthenticated ?? 'Guest'
    const result2= isAuthenticated ? isAuthenticated : 'Guest'

    console.log({result1}, {result2})


    //*******Optional Chain*******
    type User = {
        name: string;
        address: {
            city:string;
            road: string;
            presentAddress: string;
            permanentAddress?: string
        }
    }

    const user : User ={
        name :"sakina",
        address:{
            city: 'ctg',
            road: 'bot gas tola',
            presentAddress: 'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No permanent address"
    console.log(permanentAddress)

}