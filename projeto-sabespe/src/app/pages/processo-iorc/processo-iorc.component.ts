import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iorc',
  templateUrl: './processo-iorc.component.html',
  styleUrls: ['./processo-iorc.component.css']
})
export class ProcessoIORCComponent {

  legendPosition: LegendPosition = LegendPosition.Below;

  excelData = [];

  sentido = '';

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

        this.sentido = this.excelData[297]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[297]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[297]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[298]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[298]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[299]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[299]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[300]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[300]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[301]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[301]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[302]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[302]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[303]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[303]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[304]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[304]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[305]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[305]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[306]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[306]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[307]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[307]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[308]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[308]["Realizado"] || 0
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
