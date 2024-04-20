import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-cmc',
  templateUrl: './processo-cmc.component.html',
  styleUrls: ['./processo-cmc.component.css']
})
export class ProcessoCMCComponent {

  legendPosition: LegendPosition = LegendPosition.Below;

  excelData = [];

  customColors = [
    { name: 'Previsto', value: '#FFC601' },
    { name: 'Realizado', value: '#12D0FF' },
  ]
  
  data: { name: string, series: any[] }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/sabespe.xlsm', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[7];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData);

        this.data = [
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[84]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[84]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[85]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[85]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[86]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[86]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[87]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[87]["Realizado"] || 0
              },
            ]
          },
        ]    
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
