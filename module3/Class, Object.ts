{
    class Animal{
        //public name: string;
        //public species: string;
        //public sound: string;

        constructor(public name: string,public species: string,public sound:string){
            // this.name = name;
            // this.species = species;
            // this.sound= sound;
        }

        makeSOUND(){
            console.log(`the ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German shepard","dag","gew gew");
    const cat = new Animal("Parsian","cat","mew mew");
    cat.makeSOUND()
    

}