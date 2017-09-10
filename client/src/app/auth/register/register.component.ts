import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'hw-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    regForm: FormGroup;
    formControls;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient
    ) {
        this.createForm();  
    }

    createForm() {
        this.regForm = this.formBuilder.group({
            username: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
                this.validateUsername
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30),
                this.validateEmail
            ])],
            password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(30),
                this.validatePassword
            ])],
            confirm: ['', Validators.required],
            fullName: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
                this.validateFullName
            ])],
            age: ['', Validators.compose([
                Validators.required,
                this.validateAge
            ])]
        }, {
            validator: this.matchingPasswords('password', 'confirm')
        })
    }

    onRegisterSubmit() {
        const body = {
            username: this.regForm.controls.username.value,
            email: this.regForm.controls.email.value,
            password: this.regForm.controls.password.value,
            fullName: this.regForm.controls.fullName.value,
            age: this.regForm.controls.age.value            
        }
        this.regForm.reset();
        //redirect to home
        //store user id
        return this.http.post('http://localhost:3000/users', body).subscribe(res => console.log(res));
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
        this.formControls = this.regForm.controls;
    }
}
