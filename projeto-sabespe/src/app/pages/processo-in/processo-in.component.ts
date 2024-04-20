import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-in',
  templateUrl: './processo-in.component.html',
  styleUrls: ['./processo-in.component.css']
})
export class ProcessoINComponent {

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
                value: this.excelData[172]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[172]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[173]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[173]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[174]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[174]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[175]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[175]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[176]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[176]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[177]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[177]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[178]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[178]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[179]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[179]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[180]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[180]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[181]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[181]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[182]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[182]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[183]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[183]["Realizado"] || 0
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
