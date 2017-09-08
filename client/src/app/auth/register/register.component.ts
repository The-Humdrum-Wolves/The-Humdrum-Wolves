import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'hw-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    regForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.createForm();  
    }

    createForm() {
        this.regForm = this.formBuilder.group({
            username: '',
            email: '',
            password: '',
            confirm: '',
            // image: '',
            fullName: '',
            age: ''
        })
    }
}
