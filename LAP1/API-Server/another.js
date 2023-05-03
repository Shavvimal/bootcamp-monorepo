class Animal {
    constructor(name, dob, owner=null){
        this.name = name; 
        this.dob = dob; 
        this.owner = owner;
        console.log('this is', this);    
    }
    adopt(newOwner){
        this.owner = newOwner;
    }

    speak(){
        console.log(`${this.name} says hello`);
    }
}

class cat extends Animal {
    speak(){
        console.log(`${this.name} says Meow`);
    }
}
class dog extends Animal {
    speak(){
        console.log(`${this.name} says Woof`);
    }
}




let zelda = new cat("Zelda", 271198); 
zelda.adopt('Shav Vimalendiran')
console.log(zelda.owner)
zelda.speak()
let mochi = new dog("Mochi", 201099); 
zelda.adopt('Beth')

console.log(zelda instanceof Animal)
mochi.speak()
