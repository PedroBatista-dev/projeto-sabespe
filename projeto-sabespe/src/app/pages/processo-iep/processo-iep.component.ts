import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iep',
  templateUrl: './processo-iep.component.html',
  styleUrls: ['./processo-iep.component.css']
})
export class ProcessoIEPComponent {

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
                value: this.excelData[232]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[232]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[233]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[233]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[234]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[234]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[235]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[235]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[236]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[236]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[237]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[237]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[238]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[238]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[239]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[239]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[240]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[240]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[241]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[241]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[242]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[242]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[243]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[243]["Realizado"] || 0
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
