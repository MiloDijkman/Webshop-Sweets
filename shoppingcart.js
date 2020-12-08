function Dagomzet() {
    let omzet = 0;

    this.voegToeAanDagomzet = function (klantTotaal) {
        omzet = omzet + klantTotaal;
    }

}

function Winkelmand() {
    let totaalBedrag = 0;

    this.getTotaalBedrag = function () {
        return totaalBedrag;
    }

    this.vulWinkelmand = function (aantalSnoep, aantalChocola, aantalKoek) {

        let snoep = new Snoep(aantalSnoep);
        let chocola = new Chocola(aantalChocola);
        let koek = new Koek(aantalKoek);

        this.setWinkelmandBedrag(snoep, chocola, koek);
    }

    this.setWinkelmandBedrag = function (snoep, chocola, koek) {
        totaalBedrag = totaalBedrag + snoep.getTotaal();
    }

}

function Snoep(aantal) {
    let prijs = 2.45;
    let naam = "Haribo"
    let smaak = "Zoet", "Zuur", "Zout"
    let inhoud = "Kindermix", "Veel", "Family", "Weinig"

    let totaalBedrag = 0;

    this.berekenSnoepTotaal = function (aantal) {
        totaalBedrag =  prijs * aantal;
    }

    this.getTotaal = function () {
        return totaalBedrag;
    }

    this.berekenSnoepTotaal(aantal);
}

describe(description: 'Artikel test snoep', specDefinitions: function() {

  it('prijs', function () {
    let snoep = new Snoep();
    expect(snoep.getPrijs()).toBe(matchersUtil: 2.45);
  });

  it('Zoet', function() {
      let snoep = new Snoep();
      expect(snoep.getSoort()).toContain(
        matchersUtil: 'Zoet'
      );
  });
});

function Koek(aantal) {
}

function Chocola(aantal) {
}

function Klant() {
    let winkelmand = new Winkelmand();

    this.wijzigAankopen = function (snoep, chocola, koek) {
       winkelmand.vulWinkelmand(snoep, chocola, koek);
    };

    this.teBetalen = function () {
        return winkelmand.getTotaalBedrag();
    }
}

let klant = new Klant();
klant.wijzigAankopen(20,1,1);
console.log('Totaalbedrag in winkelmand: ' + klant.teBetalen());

let dagomzet = new Dagomzet();
console.log('De totale dagomzet bedraagt: ' + 0 );
