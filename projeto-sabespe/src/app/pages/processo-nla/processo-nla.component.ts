import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-nla',
  templateUrl: './processo-nla.component.html',
  styleUrls: ['./processo-nla.component.css']
})
export class ProcessoNLAComponent {

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

        this.sentido = this.excelData[24]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[24]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[24]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[25]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[25]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[26]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[26]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[27]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[27]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[28]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[28]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[29]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[29]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[30]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[30]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[31]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[31]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[32]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[32]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[33]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[33]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[34]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[34]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[35]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[35]["Realizado"] || 0
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
