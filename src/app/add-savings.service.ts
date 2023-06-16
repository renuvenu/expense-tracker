import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddSavingsService {
  constructor(private http: HttpClient) {}

  addSaving(data: any) {
    return this.http.post(
      `https://648c27378620b8bae7ec55df.mockapi.io/savings`,
      data
    );
  }

  getSaving() {
    return this.http.get('https://648c27378620b8bae7ec55df.mockapi.io/savings');
  }

  editSaving(id: string, data: any) {
    return this.http.put(
      `https://648c27378620b8bae7ec55df.mockapi.io/savings/${id}`,
      data
    );
  }

  deleteSaving(id: string) {
    return this.http.delete(
      `https://648c27378620b8bae7ec55df.mockapi.io/savings/${id}`
    );
  }

  getSavingDetail(id: string) {
    return this.http.get(
      `https://648c27378620b8bae7ec55df.mockapi.io/savings/${id}`
    );
  }
}
