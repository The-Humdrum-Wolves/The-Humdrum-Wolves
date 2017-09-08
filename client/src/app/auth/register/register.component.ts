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
                Validators.maxLength(20) 
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(30) 
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

    ngOnInit(): void {
        this.formControls = this.regForm.controls;
    }
}
