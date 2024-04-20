import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iord',
  templateUrl: './processo-iord.component.html',
  styleUrls: ['./processo-iord.component.css']
})
export class ProcessoIORDComponent {

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
                value: this.excelData[309]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[309]["Realizado"]
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[310]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[310]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[311]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[311]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[312]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[312]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[313]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[313]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[314]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[314]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[315]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[315]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[316]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[316]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[317]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[317]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[318]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[318]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[319]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[319]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[320]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[320]["Realizado"] || 0
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
