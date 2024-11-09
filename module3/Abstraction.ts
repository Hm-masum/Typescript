{
    //******** Abstraction using interface ********
    // idea
    interface Vehicle{
        startEngine(): void;
        stopEngine(): void;
        move(): void
    }
    // implement
    class Car implements Vehicle{
        startEngine(): void {
            console.log(`I am starting the car engine`)
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`)
        }
        move(): void {
            console.log(`I am moving the car engine`)
        }
        test(){
            console.log(`I am just testing`)
        }
    }
    const toyotaCar = new Car()
    toyotaCar.startEngine()



    //******** Abstraction using abstract Class ********
    abstract class Plane{
        abstract startEngine(): void ;
        abstract stopEngine(): void ;
        abstract move(): void 
        test(){
            console.log(`I am just testing`)
        }
    }

    class IndianBiman extends Plane {
        startEngine(): void {
            console.log(`I am starting the car engine`)
        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`)
        }
        move(): void {
            console.log(`I am moving the car engine`)
        }
    }
    const bangladeshBiman = new IndianBiman()
    bangladeshBiman.startEngine()



}