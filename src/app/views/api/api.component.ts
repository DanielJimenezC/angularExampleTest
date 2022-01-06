import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  myData: any[] = [];
  displayedColumns: string[] = ['Id', 'Nombre', 'Pais'];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe({
      next: result => {
      this.myData = result;
      }
    });
  }
}
