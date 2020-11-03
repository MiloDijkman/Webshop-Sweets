function Dagomzet(dagomzettotaal) {
    let omzet = 0;

    this.voegToeAanDagomzet = function (klantTotaal) {
        omzet = omzet.teBetalen();
    }
}

function Winkelmand() {
    let totaalBedrag = 0;
    this.getTotaalBedrag = function () {
        return totaalBedrag;
    }

    let totaalAantal = 0;
    this.getTotaalAantal = function () {
        return totaalAantal;
    }

    this.vulWinkelmand = function (aantalSnoep, aantalChocola, aantalKoek) {

        let snoep = new Snoep(aantalSnoep);
        let chocola = new Chocola(aantalChocola);
        let koek = new Koek(aantalKoek);

        this.setWinkelmandBedrag(snoep, chocola, koek);
    }

    this.setWinkelmandBedrag = function (snoep, chocola, koek) {
        totaalBedrag = snoep.getTotaal() + koek.getTotaal() + chocola.getTotaal();
        totaalAantal = koek.getAantal() + snoep.getAantal() + chocola.getAantal();
        console.log('Snoep Totaal: ' + '$' + snoep.getTotaal());
        console.log('Koek Totaal: ' + '$' + koek.getTotaal());
        console.log('Chocola Totaal: ' + '$' + chocola.getTotaal());

        console.log('Totaal Snoep: ' + snoep.getAantal());
        console.log('Totaal Koek: ' + koek.getAantal());
        console.log('Totaal Chocola: ' + chocola.getAantal());


    }

}

function Snoep(aantal) {
    let snoep = 2.45;
    let totaalBedrag = 0;

    this.berekenSnoepTotaal = function (aantal) {
        totaalBedrag = snoep * aantal;
    }

    this.getTotaal = function () {
        return totaalBedrag;
    }

    this.getAantal = function () {
       totaalAantal = aantal;
        return totaalAantal;
    }

    this.berekenSnoepTotaal(aantal);
}

function Koek(aantal) {
  let koek = 1.95;
  let totaalBedrag = 0;

  this.berekenKoekTotaal = function (aantal) {
      totaalBedrag = koek * aantal;
  }

  this.getTotaal = function () {
      return totaalBedrag;
  }

  this.getAantal = function () {
     totaalAantal = aantal;
      return totaalAantal;
  }

  this.berekenKoekTotaal(aantal);
}

function Chocola(aantal) {
  let chocola = 3.95;
  let totaalBedrag = 0;

  this.berekenChocolaTotaal = function (aantal) {
      totaalBedrag = chocola * aantal;
  }

  this.getTotaal = function () {
      return totaalBedrag;
  }

  this.getAantal = function () {
     totaalAantal = aantal;
      return totaalAantal;
  }

  this.berekenChocolaTotaal(aantal);
}

function Klant() {
    let winkelmand = new Winkelmand();

    this.wijzigAankopen = function (snoep, chocola, koek) {
       winkelmand.vulWinkelmand(snoep, chocola, koek);
    };

    this.teBetalen = function () {
        return winkelmand.getTotaalBedrag();
    }

    this.teAantal = function () {
        return winkelmand.getTotaalAantal();
    }

}

let klant = new Klant();
klant.wijzigAankopen(20,1,1);
console.log('Totaalbedrag in winkelmand: ' + '$' + klant.teBetalen());
console.log('Totaal aantal producten in Aantal: ' + klant.teAantal());

console.log('-----------------------------------------------------------------');

let klant2 = new Klant();
klant2.wijzigAankopen(5,100,40);
console.log('Totaalbedrag in winkelmand: ' + '$' + klant2.teBetalen());
console.log('Totaal aantal producten in Aantal: ' + klant2.teAantal());

console.log('==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==');

let dagomzet = new Dagomzet();

function Dagomzet(){
  let klantTotaal = klant2.teBetalen() + klant.teBetalen();
  console.log('De totale dagomzet bedraagt: ' + klantTotaal );
}
