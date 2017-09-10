import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'hw-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient
    ) {}

    createForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
                this.validateEmail
            ])],
            password: ['', Validators.compose([
                Validators.required,
                //Validators.minLength(8),
                //Validators.maxLength(30),
                //this.validatePassword
            ])]
        })
    }

    onLoginSubmit(){
        const body = {
            email: this.loginForm.controls.email.value,
            password: this.loginForm.controls.password.value
        }

        //this.loginForm.reset();
        return this.http.post('http://localhost:3000/auth/sign-in', body)
            .subscribe(res => console.log(res));
    }

    validateEmail(controls) {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return { 'validateEmail': true }
        }
    }

    validatePassword(controls) {
        const regExp = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,30})$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return { 'validatePassword': true }
        }
    }

    ngOnInit(): void {
        this.createForm();
    }
}
