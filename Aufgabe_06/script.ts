let EuPopulation2022 :number = 446.83;
let DePopulation2022 :number = 83.24;
let ItPopulation2022 :number = 58.98;
let FrPopulation2022 :number = 67.43;
let SpPopulation2022 :number = 47.43; 

const EuPopulation2008 :number = 438.73;
const DePopulation2008 :number = 82.11;
const ItPopulation2008 :number = 58.83;
const FrPopulation2008 :number = 64.37;
const SpPopulation2008 :number = 45.95; 


console.log("Im Jahr 2022 leben insgesamt " + DePopulation2022 + " Mio EinwohnerInnen in Deutschland");

let ErgebnisDe= (DePopulation2022 / EuPopulation2022) * 100; 
console.log("Das sind " + ErgebnisDe + " % relativ zur Gesamtzahl in der EU");

let ErgebnisDe2= ((DePopulation2022 - DePopulation2008) / DePopulation2008) * 100;
console.log("Die Wachstumsrate in Deutschland seit 2008 liegt bei " + ErgebnisDe2 + " %");

let ErgebnisDe3= DePopulation2022 - DePopulation2008; 
console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisDe3 + " Mio");





console.log("Im Jahr 2022 leben insgesamt " + ItPopulation2022 + " Mio EinwohnerInnen in Italien");

let ErgebnisIt= (ItPopulation2022 / EuPopulation2022) * 100; 
console.log("Das sind " + ErgebnisIt + " % relativ zur Gesamtzahl in der EU");

let ErgebnisIt2= ((ItPopulation2022 - ItPopulation2008) / ItPopulation2008) * 100;
console.log("Die Wachstumsrate in Italien seit 2008 liegt bei " + ErgebnisIt2 + " %");

let ErgebnisIt3= ItPopulation2022 - ItPopulation2008; 
console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisIt3 + " Mio");





console.log("Im Jahr 2022 leben insgesamt " + FrPopulation2022 + " Mio EinwohnerInnen in Frankreich");

let ErgebnisFr= (FrPopulation2022 / EuPopulation2022) * 100; 
console.log("Das sind " + ErgebnisFr + " % relativ zur Gesamtzahl in der EU");

let ErgebnisFr2= ((FrPopulation2022 - FrPopulation2008) / FrPopulation2008) * 100;
console.log("Die Wachstumsrate in Frankreich seit 2008 liegt bei " + ErgebnisFr2 + " %");

let ErgebnisFr3= FrPopulation2022 - FrPopulation2008; 
console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisFr3 + " Mio");





console.log("Im Jahr 2022 leben insgesamt " + SpPopulation2022 + " Mio EinwohnerInnen in Spanien");

let ErgebnisSp= (SpPopulation2022 / EuPopulation2022) * 100; 
console.log("Das sind " + ErgebnisSp + " % relativ zur Gesamtzahl in der EU");

let ErgebnisSp2= ((SpPopulation2022 - SpPopulation2008) / SpPopulation2008) * 100;
console.log("Die Wachstumsrate in Spanien seit 2008 liegt bei " + ErgebnisSp2 + " %");

let ErgebnisSp3= SpPopulation2022 - SpPopulation2008; 
console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisSp3 + " Mio");
