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
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm: ['', Validators.required],
            // image: ['', Validators.required],
            fullName: ['', Validators.required],
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
