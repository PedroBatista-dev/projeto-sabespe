import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-nps',
  templateUrl: './processo-nps.component.html',
  styleUrls: ['./processo-nps.component.css']
})
export class ProcessoNPSComponent {

  excelData = [];

  customColors = [
    { name: 'Previsto', value: '#12D0FF' },
    { name: 'Realizado', value: '#FFC601' },
  ]

  janeiro: { name: string, value: number }[] = [];
  marco: { name: string, value: number }[] = [];
  junho: { name: string, value: number }[] = [];
  setembro: { name: string, value: number }[] = [];
  dezembro: { name: string, value: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/sabespe.xlsm', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[7];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData);

        this.janeiro = [
          {
            name: "Previsto",
            value: this.excelData[256]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[256]["Realizado"]
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[257]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[257]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[258]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[258]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[259]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[259]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[260]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[260]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
