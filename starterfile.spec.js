describe('Artikel test', function() {
    it('Prijs', function () {
        let snoep = new Snoep();
        expect(snoep.getPrijs()).toBe(2.45);
    });

    it('Naam', function () {
        let snoep = new Snoep();
        expect(snoep.getNaam()).toBe("Haribo");
    });

    it('Beren', function () {
      let snoep = new Snoep();
      expect(snoep.getSmaak()).toContain("Beren");
    });

    it('Dropveter', function () {
      let snoep = new Snoep();
      expect(snoep.getSmaak()).toContain("Dropveter");
    });

    it('Klein', function () {
      let snoep = new Snoep();
      expect(snoep.getInhoud()).toContain("Klein");
    });

    it('Groot', function () {
      let snoep = new Snoep();
      expect(snoep.getInhoud()).toContain("Groot");
    });

});

function Snoep(aantal) {
    let prijs = 2.45;
    const naam = "Haribo";
    const smaak = ['Dropveter', 'Beren'];
    const inhoud = ["Klein", "Groot"];

    this.getPrijs = function() {
      return prijs;
    }

    this.getNaam = function() {
      return naam;
    }

    this.getSmaak = function() {
      return smaak;
    }

    this.getInhoud = function() {
      return inhoud;
    }

}
