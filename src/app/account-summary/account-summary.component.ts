import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-account-summary',
templateUrl: './account-summary.component.html',
styleUrls: ['./account-summary.component.css']
})

export class AccountSummaryComponent implements OnInit {
id: number;
lat: number = 51.678418;
lng: number = 7.809007;
constructor(private route: ActivatedRoute) { }

ngOnInit() {

this.route.params.subscribe(params => {
this.id = params['id']; 
console.log('***',this.id);
});
}
}