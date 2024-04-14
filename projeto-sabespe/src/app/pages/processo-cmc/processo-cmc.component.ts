import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-cmc',
  templateUrl: './processo-cmc.component.html',
  styleUrls: ['./processo-cmc.component.css']
})
export class ProcessoCMCComponent {

  excelData = [];

  customColors = [
    { name: 'Previsto', value: '#12D0FF' },
    { name: 'Realizado', value: '#FFC601' },
  ]

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

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[84]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[84]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[85]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[85]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[86]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[86]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[87]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[87]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
