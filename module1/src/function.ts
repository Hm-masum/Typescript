
//******* Normal function ********
function add(num1: number, num2: number):number{
    return num1+num2;
}
add(2,2)


//******** arrow function ********
const addArrow= (num1:number, num2:number):number => num1+num2


//******** object --> function --> method ********
const poorUser = {
    name: 'sakina',
    balance:0,
    addBalance(balance:number):string{
        return `sakina's new balance is : ${this.balance + balance}`;
    }
}

//******** callback function ********
const arr:number[]=[1,4,10];
const newArray: number[] = arr.map((ele:number):number => ele*ele)