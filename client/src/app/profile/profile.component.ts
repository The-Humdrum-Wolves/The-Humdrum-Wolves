import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthCheckService } from '../auth/authCheck/auth-check.service';

@Component({
    selector: 'hw-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    passwordForm: FormGroup;
    usernameForm: FormGroup;
    fullNameForm: FormGroup;
    emailForm: FormGroup;
    userId: string;
    user;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private authCheck: AuthCheckService
    ) {}

    createForm() {
        this.passwordForm = this.formBuilder.group({
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(30),
                this.validatePassword
            ])],
            confirm: ['', Validators.required]
        }, {
            validator: this.matchingPasswords('password', 'confirm')
        });

        this.usernameForm = this.formBuilder.group({
            username: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
                this.validateUsername
            ])]
        });

        this.fullNameForm = this.formBuilder.group({
            fullName: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
                this.validateFullName
            ])]
        });

        this.emailForm = this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
                this.validateEmail
            ])]
        });
    }

    onChangePassowrd() {
        const body = {
            username: this.user.username,
            email: this.user.email,
            password: this.passwordForm.controls.password.value,
            fullName: this.user.fullName,
            age: this.user.age
        }

        this.http.post('http://localhost:3000/users/update/' + this.authCheck.getIdToken(), body)
            .subscribe();

        this.http.get('http://localhost:3000/users/' + this.userId)
            .subscribe((user) => {
                return this.user = user
            });

        this.passwordForm.reset();
    }

    onChangeUsername() {
        const body = {
            username: this.usernameForm.controls.username.value,
            email: this.user.email,
            password: this.user.password,
            fullName: this.user.fullName,
            age: this.user.age
        }

        this.http.post('http://localhost:3000/users/update/' + this.authCheck.getIdToken(), body)
            .subscribe();

        this.http.get('http://localhost:3000/users/' + this.userId)
            .subscribe((user) => {
                return this.user = user
            });

        this.usernameForm.reset();
    }

    onChangeFullName() {
        const body = {
            username: this.user.username,
            email: this.user.email,
            password: this.user.password,
            fullName: this.fullNameForm.controls.fullName.value,
            age: this.user.age
        }

        this.http.post('http://localhost:3000/users/update/' + this.authCheck.getIdToken(), body)
            .subscribe();

        this.http.get('http://localhost:3000/users/' + this.userId)
            .subscribe((user) => {
                return this.user = user
            });

        this.fullNameForm.reset();
    }

    onChangeEmail() {
        const body = {
            username: this.user.username,
            email: this.emailForm.controls.email.value,
            password: this.user.password,
            fullName: this.user.fullName,
            age: this.user.age
        }

        this.http.post('http://localhost:3000/users/update/' + this.authCheck.getIdToken(), body)
            .subscribe();

        this.http.get('http://localhost:3000/users/' + this.userId)
            .subscribe((user) => {
                return this.user = user
            });

        this.emailForm.reset();
    }

    validateEmail(controls) {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return { 'validateEmail': true }
        }
    }

    validateUsername(controls) {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return { 'validateUsername': true }
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

    validateAge(controls) {
        const regExp = new RegExp(/^[0-9]+$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return { 'validateAge': true }
        }
    }

    validateFullName(controls) {
        const regExp = new RegExp(/^[a-zA-Z\s]+$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return { 'validateFullName': true }
        }
    }

    matchingPasswords(password, confirm) {
        return (group: FormGroup) => {
            if(group.controls[password].value === group.controls[confirm].value) {
                return null;
            } else {
                return { 'matchingPasswords': true }
            }
        }
    }

    ngOnInit(): void {
        this.userId = this.authCheck.getIdToken();
        // TODO: Delay view render until data is retrieved
        this.http.get('http://localhost:3000/users/' + this.userId)
            .subscribe((user) => {
                return this.user = user
            });
        console.log(this.user);
        this.createForm();
    }
}