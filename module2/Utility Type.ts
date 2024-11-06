{
    //******** Pick Type ********
    type Person = {
        name: string;
        age: number;
        email?:string;
        contactNo: string
    }

    type Name = Pick<Person,"name">
    type NameAge = Pick<Person,"name" | "age">
    

    //******** Omit Type ********
    type ContactInfo = Omit<Person,"name" | "age">


    //******** Required Type ********
    type PersonRequired = Required<Person>


    //******** Partial Type ********
    type PersonPartial = Partial<Person>


    //******** ReadOnly Type ********
    type PersonReadOnly = Readonly <Person>
    const person1 : PersonReadOnly = {
        name: "Miss Sakina",
        age: 150,
        contactNo: "102"
    }
    person1.name = "Miss jorina"


    //******** Record Type ********
    // type MyObj = {
    //     a: string,
    //     b: string
    // }
    type MyObj = Record<string,string>
    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc'
    }

    const EmptyObj : Record<string,unknown> = {}

}