var Ingrediens = /** @class */ (function () {
    function Ingrediens(navn, måleenhet, mengde, innkjøpspris, holdbarhetsdato) {
        this._navn = navn;
        this._måleenhet = måleenhet;
        this._mengde = mengde;
        this._innkjøpspris = innkjøpspris;
        this._holdbarhetsdato = holdbarhetsdato;
    }
    Object.defineProperty(Ingrediens.prototype, "navn", {
        get: function () { return this._navn; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ingrediens.prototype, "m\u00E5leenhet", {
        get: function () { return this._måleenhet; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ingrediens.prototype, "mengde", {
        get: function () { return this._mengde; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ingrediens.prototype, "innkj\u00F8pspris", {
        get: function () { return this._innkjøpspris; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ingrediens.prototype, "holdbarhetsdato", {
        get: function () { if (this._holdbarhetsdato)
            return this._holdbarhetsdato; },
        enumerable: false,
        configurable: true
    });
    Ingrediens.prototype.toString = function () {
        var utskrift = "Det er ".concat(this._mengde).concat(this._måleenhet, " p\u00E5 lager");
        if (this._holdbarhetsdato)
            utskrift += "med holdbarhet til ".concat(this._holdbarhetsdato, ".");
        else
            utskrift += ".";
        return utskrift;
    };
    Ingrediens.prototype.utsalgspris = function () { return this._innkjøpspris * 1, 25; };
    return Ingrediens;
}());
var mel = new Ingrediens("mel", "kg", 15, 10);
var smør = new Ingrediens("smør", "kg", 20, 20, "24. juni");
console.log(mel.toString(), mel.utsalgspris());
console.log(smør.toString(), smør.utsalgspris());
