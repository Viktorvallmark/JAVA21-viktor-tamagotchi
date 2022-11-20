export class Tamagotchi{

    #happiness = 5;
    #hunger = 5;
    #name; 
    #type;

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    getHappiness(){
        return this.#happiness;
    }

    changeHappiness(num){
        this.#happiness += num;
    }

    getHunger(){
        return this.#hunger;
    }

    changeHunger(num){
        this.#hunger += num;
    }

    changeName(newName){
        this.#name = newName;
    }

    getName(){
        return this.#name;
    }

    getType(){
        return this.#type;
    }
    
    setType(type){
        this.#type = type;
    }
}