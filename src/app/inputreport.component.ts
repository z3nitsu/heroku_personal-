import { Component, Input } from "@angular/core";

@Component({

    selector: 'report',
    template: `
    <p>candidate  Details</p><br>
    <p>{{Name}}</p>
    <p>{{RegistrationNo}}</p>
    <p>{{date}}</p>
    <p>{{time}}</p>
    `
})

export class report {
    @Input() Name: any;
    @Input() RegistrationNo: any;
    @Input() date: any;
    @Input() time: any;
}

@Component({
    selector: 'Details',
    template: `
    <report Name="Lovepreet" RegistrationNo="1190991" date="16-OCt-20" time="9:00 AM"></report>
    `
}) 

export class App{}