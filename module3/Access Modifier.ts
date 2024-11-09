{
    //******** Access Modifier ********
    class BankAccount{
        public readonly id: number;
        public name: string;
        private _balance:number;
        protected discount:Number

        constructor(id:number, name:string, _balance:number, discount:number){
            this.id= id;
            this.name= name;
            this._balance = _balance;
            this.discount = discount
        }
        public addDeposit(amount : number){
            this._balance = this._balance + amount
        }
        public getBalance(){
            return this._balance
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.discount
        }
    }

    const sakinasAccount = new BankAccount (111,"Miss Sakina", 20, 0)
    sakinasAccount.addDeposit(120)
    const sakinasBalance = sakinasAccount.getBalance()
    console.log(sakinasBalance)
}