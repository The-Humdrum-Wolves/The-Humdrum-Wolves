import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'hw-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    regForm: FormGroup;
    formControls;

    constructor(
        private formBuilder: FormBuilder
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
                Validators.minLength(5),
                Validators.maxLength(30) 
            ])],
            confirm: ['', Validators.required],
            fullName: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50) 
            ])],
            age: ['', Validators.required]
        })
    }

    onRegisterSubmit() {
        console.log(this.regForm);
    }

    validateEmail(controls) {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return {'validateEmail': true}
        }
    }

    validateUsername(controls) {
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        if(regExp.test(controls.value)) {
            return null;
        } else {
            return {'validateUsername': true}
        }
    }

    ngOnInit(): void {
        this.formControls = this.regForm.controls;
    }
}
