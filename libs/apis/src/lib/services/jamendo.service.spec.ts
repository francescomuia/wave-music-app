/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JamendoService } from './jamendo.service';

describe('Service: Jamendo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JamendoService]
    });
  });

  it('should ...', inject([JamendoService], (service: JamendoService) => {
    expect(service).toBeTruthy();
  }));
});
