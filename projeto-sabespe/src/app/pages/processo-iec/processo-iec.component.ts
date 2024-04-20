import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iec',
  templateUrl: './processo-iec.component.html',
  styleUrls: ['./processo-iec.component.css']
})
export class ProcessoIECComponent {

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
                value: this.excelData[88]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[88]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[89]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[89]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[90]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[90]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[91]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[91]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[92]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[92]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[93]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[93]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[94]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[94]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[95]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[95]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[96]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[96]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[97]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[97]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[98]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[98]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[99]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[99]["Realizado"] || 0
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
