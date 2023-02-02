let bike = {
    age:0,
    wear:0, 
    color: "red",
    make: "huffy"
} // object properties
function ageUp(someBike){
    bike.age ++;
    if(someBike >=5) {
        someBike.wear=100;
    }
} //Function: //if age is >= 5, then wear = 100
ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);

console.log(bike);
function setup(){
    createCanvas(1000,1000);
}

//bicycle 

//let age = bicycleAge


