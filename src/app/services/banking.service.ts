import { Injectable } from '@angular/core';
import { LoginModel } from '../login/loginModel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { USERS } from '../.././mocks/mock-users';
@Injectable()
export class BankingService {
constructor() { }

authenticateUser(loginModel: LoginModel): boolean {
let userData: any ;
let returnValue: boolean = false;

this.getUsers().subscribe(data => {
userData =(data);
});

for(let i = 0; i < userData.length; i++) {

if(userData[i].userName === (loginModel.userName)){
return returnValue = true;
}
}

return returnValue;
}


getUsers(): Observable<LoginModel[]> {
// Todo: send the message _after_ fetching the heroes
return of(USERS);



}
}