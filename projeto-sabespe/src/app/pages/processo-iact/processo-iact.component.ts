import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iact',
  templateUrl: './processo-iact.component.html',
  styleUrls: ['./processo-iact.component.css']
})
export class ProcessoIACTComponent {

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
                value: this.excelData[196]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[196]["Realizado"]
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[197]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[197]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[198]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[198]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[199]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[199]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[200]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[200]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[201]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[201]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[202]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[202]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[203]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[203]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[204]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[204]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[205]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[205]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[206]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[206]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[207]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[207]["Realizado"] || 0
              },
            ]
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
