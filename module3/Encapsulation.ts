{
    //******** Encapsulation ********
    class BankAccount{
        public readonly id: number;
        public name: string;
        private _balance:number;

        constructor(id:number, name:string, _balance:number){
            this.id= id;
            this.name= name;
            this._balance = _balance;
        }
        public addDeposit(amount : number){
            this._balance = this._balance + amount
        }
        private getBalance(){
            return this._balance
        }
        getHiddenMethod(){
            return this.getBalance()
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.getHiddenMethod
        }
    }

    const sakinasAccount = new BankAccount (111,"Miss Sakina", 20)
    sakinasAccount.addDeposit(120)
    const sakinasBalance = sakinasAccount.getHiddenMethod()
    console.log(sakinasBalance)
}