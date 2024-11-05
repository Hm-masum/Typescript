
//******* Primitive data type ********
let firstName : string = 'Habibullah'
let roll : number =123
let isAdmin : boolean = true;
let x : undefined = undefined
let y : null = null




//******* non primitive data type ********
// array
let friends : string[] = ['rasel','rojina']
let eligibleRoll : number[] = [123,12]
eligibleRoll.push(23)

// tuple
let coordinates : [number,number] = [1,5]
let ageName : [number,string]=[50, 'korim bodda']
let ageNameMale : [number,string,boolean]=[50, 'sokina hato',false]

// object
const user :{
    company:'metromoninal company';  //titeral type
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    readonly isMarried: boolean;
} = {
    company:'metromoninal company',
    firstName:'abdus',
    middleName:'salam',
    lastName:'company',
    isMarried: true
}