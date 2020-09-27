import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call API', () => {
    service.getUser().subscribe();
    httpMock.expectOne('https://run.mocky.io/v3/8e5d16a6-3434-4ed1-a3f5-20bf16aac7ba');
    httpMock.verify();
  });

  it('should return user Mac', () => {
    const userApiResponse = {
      name: 'Mac'
    };
    service.getUser().subscribe(response => {
      expect(response.name).toEqual(userApiResponse.name);
    });
    const request = httpMock.expectOne('https://run.mocky.io/v3/8e5d16a6-3434-4ed1-a3f5-20bf16aac7ba');
    request.flush(userApiResponse);
    httpMock.verify();
  });
});
