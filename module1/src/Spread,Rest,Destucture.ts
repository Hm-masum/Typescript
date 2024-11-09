{
    //******** spread operator ********
    const friends1: string[] =["sakina","jarina","rokaiya"];
    const friends2: string[] =["abol","babul","tabul"];
    friends1.push(...friends2)

    const mentors1 ={
        typescript: 'jarina',
        redux: 'sakina',
        dbms: 'rokaiya'
    }

    const mentors2 ={
        prisma: 'modon ali',
        next: 'cikon ali',
        cloud: 'kotob ali'
    }

    const mentorList ={
        ...mentors1,
        ...mentors2
    }


    //******** Rest operator********
    const greetFriends = (...friends: string[]) =>{
        friends.forEach((friend:string)=> console.log(`Hi ${friend}`))
    }

    greetFriends("abol","babul","tabul","kabul")


    //******** Destructuring ********
    // Object destructuring
    const user ={
        id:1234,
        name:{
            firstName:'Abul',
            middleName:'Uddin',
            lastName:'Babul'
        },
        contactNo: "018000000",
        address: "uganda"
    }

    const {contactNo, name:{middleName: midName}}=user

    // Array destructuring
    const myFriends = ['hafiz','hasib','sakib','rakib']
    const [,, bestFriend,...rest]=myFriends

}