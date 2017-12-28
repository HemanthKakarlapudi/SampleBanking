import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login/loginModel';
import { BankingService } from '../services/banking.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginModel:  LoginModel = {
id:null,
userName:'',
passWord:'',
firstName:'',
lastName:''
};
isAuthenticateValid: boolean;
constructor(
private bankingService : BankingService,
private router: Router
) {}
ngOnInit() {}
onClickFormLogin() : void {
this.isAuthenticateValid = this.bankingService.authenticateUser(this.loginModel);
console.log(this.loginModel );

if(this.isAuthenticateValid){
this.router.navigate(['/acc-summary',this.loginModel.userName]);
}else{
this.router.navigate(['/login']);
}
}
}