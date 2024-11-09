{
    //******** Getter Setter ********
    class BankAccount{
        public readonly id: number;
        public name: string;
        private _balance:number;

        constructor(id:number, name:string, _balance:number){
            this.id= id;
            this.name= name;
            this._balance = _balance;
        }
        // setter
        set deposit(amount : number){
            this._balance = this._balance + amount
        }
        // getter
        get Balance(){
            return this._balance
        }
    }


    const sakinasAccount = new BankAccount (111,"Miss Sakina", 20)
    sakinasAccount.deposit = 50
    const sakinasBalance = sakinasAccount.Balance;
    console.log(sakinasBalance)
}