import { TestBed } from '@angular/core/testing';

import { DataMahasiswaService } from './data-mahasiswa.service';

describe('DataMahasiswaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMahasiswaService = TestBed.get(DataMahasiswaService);
    expect(service).toBeTruthy();
  });
});
