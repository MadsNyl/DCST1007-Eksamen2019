class Ingrediens {
    private _navn: string;
    private _måleenhet: string;
    private _mengde: number;
    private _innkjøpspris: number;
    private _holdbarhetsdato?: string;

    constructor(navn: string, måleenhet: string, mengde: number, innkjøpspris: number, holdbarhetsdato?: string) {
        this._navn = navn;
        this._måleenhet = måleenhet;
        this._mengde = mengde;
        this._innkjøpspris = innkjøpspris;
        this._holdbarhetsdato = holdbarhetsdato;
    }

    get navn(): string { return this._navn; }
    get måleenhet(): string { return this._måleenhet; }
    get mengde(): number { return this._mengde; }
    get innkjøpspris(): number { return this._innkjøpspris; }
    get holdbarhetsdato(): string | undefined { if (this._holdbarhetsdato) return this._holdbarhetsdato; }

    toString(): string { 
        let utskrift = `Det er ${this._mengde}${this._måleenhet} på lager`;

        if (this._holdbarhetsdato) utskrift += `med holdbarhet til ${this._holdbarhetsdato}.`;
        else utskrift += ".";

        return utskrift;
    }

    utsalgspris(): number { return this._innkjøpspris * 1,25; }
}

const mel = new Ingrediens("mel", "kg", 15, 10);
const smør = new Ingrediens("smør", "kg", 20, 20, "24. juni");

console.log(mel.toString(), mel.utsalgspris());
console.log(smør.toString(), smør.utsalgspris());