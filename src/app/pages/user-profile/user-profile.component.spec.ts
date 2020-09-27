import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserProfileComponent} from './user-profile.component';
import {of} from 'rxjs';
import {UserService} from '../../services/user.service';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  const mockUserService = jasmine.createSpyObj('mockUserService', ['getUser']);
  mockUserService.getUser.and.returnValue(of({name: 'Mac'}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserProfileComponent
      ],
      providers: [
        {provide: UserService, useValue: mockUserService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user from API', () => {
    expect(mockUserService.getUser).toHaveBeenCalled();
  });

  it('should display user name', () => {
    expect(fixture.nativeElement.querySelector('div').textContent.trim()).toEqual('Name : Mac');
    expect(fixture.nativeElement.querySelector('div').textContent).toContain('Mac');
  });

  it('should display title', () => {
    component.title = 'This is title';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h1').textContent).toEqual('This is title');
  });

});
