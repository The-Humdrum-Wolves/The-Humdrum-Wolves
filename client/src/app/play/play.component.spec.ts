// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { PlayComponent } from './play.component';
// import { DebugElement }    from '@angular/core';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Observable } from 'rxjs/Observable';
// import { LoadingSpinnerComponent } from "../shared/loading-spinner/loading-spinner.component";
// import { PlayService } from "./play.service";
// import 'rxjs/add/observable/of';


// describe('PlayComponent', () => {
//   let component: PlayComponent;
//   let spinner: LoadingSpinnerComponent;
//   let fixture: ComponentFixture<PlayComponent>;
//   let de:      DebugElement;
//   let el:      HTMLElement;
//   let service;
//   let loading: string;
//   let collection

//   const result = [{
//     awayTeamId: 92,
//     awayTeamName: "Real Sociedad de Fútbol",
//     competitionId:455,
//     date: "2017-09-10T10:00:00Z",
//     homeTeamId: 560,
//     homeTeamName: "RC Deportivo La Coruna",
//     id: 163197,
//     matchday: 3,
//     odds: null,
//     result: {goalsHomeTeam: 2, goalsAwayTeam: 4, halfTime: {} },
//     status: "FINISHED"
// }];


//   beforeEach(async(() => {
//     collection = [];
//     service =
//     // tslint:disable-next-line:one-line
//     {
//       getAllFixtures: ({orderByChild: propertyType}) => {
//           return result;
//       }
//     };
//     loading="loading";

//     // service = {
//     //     getAllFixtures: () => {
//     //       return Observable.of(collection);
//     //     }
//     //   };

//     TestBed.configureTestingModule({
//       declarations: 
//       [ PlayComponent, LoadingSpinnerComponent ],
//       imports: [ RouterTestingModule ],
//       providers: [
//         { provide: PlayService, useValue: service }
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PlayComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });

//   it('ngOnInit() should call getAllFixtures once', () => {
//     spyOn(service, 'getAllFixtures');
//     component.ngOnInit();
//     component.ngOnInit();
//     expect(service.getAllFixtures).toHaveBeenCalledTimes(2);
//   });

//   it('ngOnInit() should call getAllFixtures once with correct parameters', () => {
//     spyOn(service, 'getAllFixtures');
//     component.ngOnInit();

//     expect(service.getAllFixtures).toHaveBeenCalledWith(
//       {
//         orderByChild: 'awayTeamId',
//         equalTo: 92
//       }
//     );
//    });

//    it('ngOnInit() should create the component, return correct result and inicialize correctly', () => {
//     component.ngOnInit();
//     expect(service.getAllFixtures).toBeTruthy();
//   });

//   it('ngOnInit() should create the component and return correct awayTeamName', () => {
//     component.ngOnInit();
//     expect(service.getAllFixtures[0].awayTeamName).toEqual('Real Sociedad de Fútbol');
//   });

//   it('ngOnInit() should create the component and return correct status', () => {
//     component.ngOnInit();
//     expect(service.getAllFixtures[0].status).toEqual('FINISHED');
//   });
// });
