import { Component, Input } from "@angular/core";

@Component({

    selector: 'bank-account',
    template: `
    
    Bank Name:{{bankName}}
    Account Id: {{id}}`
})

export class BankAccount {
    @Input() bankName: any;
    @Input('account-id') id:any;
}

@Component({
    selector: 'app',
    template: `
    <bank-account bankName="SBU" account-id="5461"></bank-account>
    `
})

export class App{}