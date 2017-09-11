// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import 'rxjs/add/observable/of';
// import { SingleTeamComponent } from './single-team.component';
// import {Pipe, PipeTransform} from '@angular/core';
// import { Observable } from "rxjs/Observable";
// import { RouterTestingModule } from "@angular/router/testing";
// import { TopTeamsService } from "../services/teams.service";

// @Pipe({name: 'pipename'})
// class MockPipe implements PipeTransform {
//     transform(value: number): number {
//         //Do stuff here
//         return value;
//     }
// }


// describe('SingleTeamComponent', () => {
//   let component: SingleTeamComponent;
//   let fixture: ComponentFixture<SingleTeamComponent>;
//   let collection;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         declarations: [SingleTeamComponent, MockPipe]
//     })
//     .compileComponents();
//   }));

//   beforeEach(async(() => {
//     collection = [];


//     const mockService = {
//       getAdvertisementsList: () => {
//         return Observable.of(collection);
//       }
//     };

//     TestBed.configureTestingModule({
//       declarations: [
//         SingleTeamComponent,
//      ],
//       imports: [ 
//         RouterTestingModule 
//       ],
//       providers: [
//         { provide: TopTeamsService, useValue: mockService }
//       ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SingleTeamComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
