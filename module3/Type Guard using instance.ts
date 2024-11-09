{
    class Animal{
        public name: string;
        public species: string;

        constructor( name: string, species: string){
             this.name = name;
             this.species = species;
        }
        makeSOUND(){
            console.log(`I am making sound`)
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name,species)
        }
        makeBark(){
            console.log("I am barking")
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name,species)
        }
        makeMeaw(){
            console.log("I am meawing")
        }
    }

    //******** Instance of ********
    const isDog = (animal: Animal):animal is Dog=>{
        return animal instanceof Dog
    }
    const isCat = (animal: Animal):animal is Cat=>{
        return animal instanceof Cat
    }

    const getAnimal = (animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if (isCat(animal)){
            animal.makeMeaw()
        }
        else{
            animal.makeSOUND
        }
    }

    const dog = new Dog("Abul","dag")
    const cat = new Cat("Sakina","cat")

    getAnimal(dog)

}