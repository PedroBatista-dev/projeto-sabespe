import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ieam',
  templateUrl: './processo-ieam.component.html',
  styleUrls: ['./processo-ieam.component.css']
})
export class ProcessoIEAMComponent {

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
                value: this.excelData[244]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[244]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[245]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[245]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[246]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[246]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[247]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[247]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[248]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[248]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[249]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[249]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[250]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[250]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[251]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[251]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[252]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[252]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[253]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[253]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[254]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[254]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[255]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[255]["Realizado"] || 0
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
