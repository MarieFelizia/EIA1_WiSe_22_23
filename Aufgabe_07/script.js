var A7;
(function (A7) {
    let EuPopulation2022 = 446.83;
    let DePopulation2022 = 83.24;
    let ItPopulation2022 = 58.98;
    let FrPopulation2022 = 67.43;
    let SpPopulation2022 = 47.43;
    const EuPopulation2008 = 438.73;
    const DePopulation2008 = 82.11;
    const ItPopulation2008 = 58.83;
    const FrPopulation2008 = 64.37;
    const SpPopulation2008 = 45.95;
    console.log("Im Jahr 2022 leben insgesamt " + DePopulation2022 + " Mio EinwohnerInnen in Deutschland");
    let ErgebnisDe = parseFloat(DePopulation2022 / EuPopulation2022 * 100 + " %").toFixed(0);
    console.log("Das sind " + ErgebnisDe + " % relativ zur Gesamtzahl in der EU");
    let ErgebnisDe2 = parseFloat((DePopulation2022 - DePopulation2008) / DePopulation2008 * 100 + " %").toFixed(1);
    console.log("Die Wachstumsrate in Deutschland seit 2008 liegt bei " + ErgebnisDe2 + " %");
    let ErgebnisDe3 = (DePopulation2022 - DePopulation2008).toFixed(2);
    console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisDe3 + " Mio");
    console.log("Im Jahr 2022 leben insgesamt " + ItPopulation2022 + " Mio EinwohnerInnen in Italien");
    let ErgebnisIt = parseFloat((ItPopulation2022 / EuPopulation2022) * 100 + " %").toFixed(0);
    console.log("Das sind " + ErgebnisIt + " % relativ zur Gesamtzahl in der EU");
    let ErgebnisIt2 = parseFloat((ItPopulation2022 - ItPopulation2008) / ItPopulation2008 * 100 + " %").toFixed(1);
    console.log("Die Wachstumsrate in Italien seit 2008 liegt bei " + ErgebnisIt2 + " %");
    let ErgebnisIt3 = parseFloat(ItPopulation2022 - ItPopulation2008 + " Mio").toFixed(2);
    console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisIt3 + " Mio");
    console.log("Im Jahr 2022 leben insgesamt " + FrPopulation2022 + " Mio EinwohnerInnen in Frankreich");
    let ErgebnisFr = parseFloat((FrPopulation2022 / EuPopulation2022) * 100 + " %").toFixed(0);
    console.log("Das sind " + ErgebnisFr + " % relativ zur Gesamtzahl in der EU");
    let ErgebnisFr2 = parseFloat((FrPopulation2022 - FrPopulation2008) / FrPopulation2008 * 100 + " %").toFixed(1);
    console.log("Die Wachstumsrate in Frankreich seit 2008 liegt bei " + ErgebnisFr2 + " %");
    let ErgebnisFr3 = parseFloat(FrPopulation2022 - FrPopulation2008 + " Mio").toFixed(2);
    console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisFr3 + " Mio");
    console.log("Im Jahr 2022 leben insgesamt " + SpPopulation2022 + " Mio EinwohnerInnen in Spanien");
    let ErgebnisSp = parseFloat((SpPopulation2022 / EuPopulation2022) * 100 + " %").toFixed(0);
    console.log("Das sind " + ErgebnisSp + " % relativ zur Gesamtzahl in der EU");
    let ErgebnisSp2 = parseFloat((SpPopulation2022 - SpPopulation2008) / SpPopulation2008 * 100 + " %").toFixed(1);
    console.log("Die Wachstumsrate in Spanien seit 2008 liegt bei " + ErgebnisSp2 + " %");
    let ErgebnisSp3 = parseFloat(SpPopulation2022 - SpPopulation2008 + "Mio").toFixed(2);
    console.log("Die gesamte Wachstumsrate seit 2008 bis 2022 liegt bei " + ErgebnisSp3 + " Mio");
    let ErgebnisEu = parseFloat((EuPopulation2022 / EuPopulation2022) * 100 + " %").toFixed(0);
    let ErgebnisEu2 = parseFloat((EuPopulation2022 - EuPopulation2008) / EuPopulation2008 * 100 + " %").toFixed(1);
    let ErgebnisEu3 = parseFloat(EuPopulation2022 - EuPopulation2008 + "Mio").toFixed(2);
    function Funktion(Population2022, RelativEU, Prozentzahl, Differenz, Land) {
        Einwohnerzahl.innerHTML = Population2022 + " Mio";
        Relativ.innerHTML = RelativEU + " %";
        Wachstumsrate.innerHTML = Prozentzahl + " %";
        WachstumP.innerHTML = Differenz + " Mio";
        Ort.innerHTML = "Einwohnerzahl in " + Land;
        Wo.innerHTML = "Gesamtzahl Einwohner und Einwohnerinnen in " + Land;
    }
    function Balkendiagramm(Prozentnummer) {
        chart.setAttribute('style', Prozentnummer);
    }
    const DeImg = document.querySelector("#Deutschland");
    const Einwohnerzahl = document.querySelector("#Einwohnerzahl");
    const Relativ = document.querySelector("#Relativ");
    const Wachstumsrate = document.querySelector("#Wachstumsrate");
    const WachstumP = document.querySelector("#WachstumP");
    const Ort = document.querySelector("#Land");
    const Wo = document.querySelector("#Wo");
    const chart = document.querySelector('.chart');
    DeImg.addEventListener("click", function () {
        Funktion(DePopulation2022, ErgebnisDe, ErgebnisDe2, ErgebnisDe3, "Deutschland");
        Balkendiagramm('height: ' + ErgebnisDe + '%');
    });
    const ItImg = document.querySelector("#Italien");
    ItImg.addEventListener("click", function () {
        Funktion(ItPopulation2022, ErgebnisIt, ErgebnisIt2, ErgebnisIt3, "Italien");
        Balkendiagramm(ErgebnisIt);
    });
    const SpImg = document.querySelector("#Spanien");
    SpImg.addEventListener("click", function () {
        Funktion(SpPopulation2022, ErgebnisSp, ErgebnisSp2, ErgebnisSp3, "Spanien");
        Balkendiagramm(ErgebnisSp);
    });
    const FrImg = document.querySelector("#Frankreich");
    FrImg.addEventListener("click", function () {
        Funktion(FrPopulation2022, ErgebnisFr, ErgebnisFr2, ErgebnisFr3, "Frankreich");
        Balkendiagramm(ErgebnisFr);
    });
    const EuImg = document.querySelector("#EU");
    EuImg.addEventListener("click", function () {
        Funktion(EuPopulation2022, ErgebnisEu, ErgebnisEu2, ErgebnisEu3, "EU");
        Balkendiagramm(ErgebnisEu);
    });
})(A7 || (A7 = {}));
//# sourceMappingURL=script.js.map