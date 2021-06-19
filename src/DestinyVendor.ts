class destinyVendor{
    
    private vendorName: string = "";
    private vendorQuotes: string[] = [];
    private vendorLocaton: string = "";

    constructor(name: string, quotes: string[], location: string){
        this.vendorName = name;
        this.vendorQuotes = quotes;
        this.vendorLocaton = location;
    }
    public addQuote(quote: string): void{
        this.vendorQuotes.push(quote);
    } 
    public displayQuote(): void{
        let quoteIndex = Math.floor(Math.random() * (this.vendorQuotes.length));
        console.log(this.vendorQuotes[quoteIndex]);
    }
}

let saintQuotes: string[] = ["I love pigeons"];
const trialsVendor = new destinyVendor("Saint-14", saintQuotes, "Tower Hanger");

trialsVendor.addQuote("Are you ready to be miserable in trials again");
trialsVendor.addQuote("Look at all the little bords");
const quotes1: string[] = ["I wish you would go flawless", "Stop goosing", "Did Josh really waste another super?"];
for(let i = 0; i < quotes1.length; i++){
    trialsVendor.addQuote(quotes1[i]);
}
for(let i = 0; i < 10; i++)
    trialsVendor.displayQuote();