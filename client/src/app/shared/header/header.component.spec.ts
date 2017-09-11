import { LogoutService } from './../../auth/logout/logout.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { AuthCheckService } from "../../auth/authCheck/auth-check.service";
import { async } from "@angular/core/testing";

describe('Header Component integration tests', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service;
  let serviceLogout: boolean;

  beforeEach(async(() => {
      // tslint:disable-next-line:one-line
      service =
      {
        isAuthenticated: () => {
          return true;
        }
      };

      serviceLogout=false;

    // service = {
    //     getAdvertisementsList: () => {
    //       return Observable.of(collection);
    //     }
    //   };

    TestBed.configureTestingModule({
      declarations:
      [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthCheckService, useValue: service },
        { provide: LogoutService, useValue: serviceLogout },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthCheckService, useValue: service },
        { provide: LogoutService, useValue: service },
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should render Home button', () => {
    let de = fixture.debugElement.query(By.css('.navbar-nav'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('Home');
  });

  it('should render Popular teams button', () => {
    let de = fixture.debugElement.query(By.css('.navbar-nav'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('Teams');
  });

  // it('should render not render Login form', () => {
  //   let de = fixture.debugElement.query(By.css('.navbar-right'));
  //   let el: HTMLElement = de.nativeElement;

  //   expect(el.innerText).toContain('');
  // });
});
