import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-nps',
  templateUrl: './processo-nps.component.html',
  styleUrls: ['./processo-nps.component.css']
})
export class ProcessoNPSComponent {

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
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[256]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[256]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[257]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[257]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[258]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[258]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[259]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[259]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[260]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[260]["Realizado"] || 0
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
