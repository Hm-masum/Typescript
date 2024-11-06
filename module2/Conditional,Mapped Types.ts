{
    //********Conditional Type********
    type a1 =number
    type b1 =undefined

    type x= a1 extends null ? true:false;
    type y= a1 extends null ? true: b1 extends undefined ?undefined: any;

    type Sheikh = {
        bike: string;
        car: string;
        ship:string;
        plane: string
    }

    //type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true: false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true: false;

    type HasBike = CheckVehicle<"car">

    
    //********Mapped Type********
    const arrOfNumbers : number[] = [1,2,3,4,5];
    const arrOfStrings : string[] = arrOfNumbers.map((number) => number.toString())
    
    type AreaNumber = {
        height: number;
        width: number
    }

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{height:string;width:number}> ={
        height: '100',
        width:50
    }

}