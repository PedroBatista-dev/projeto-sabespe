import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tcdbo',
  templateUrl: './processo-tcdbo.component.html',
  styleUrls: ['./processo-tcdbo.component.css']
})
export class ProcessoTCDBOComponent {

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
                value: this.excelData[273]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[273]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[274]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[274]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[275]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[275]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[276]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[276]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[277]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[277]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[278]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[278]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[279]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[279]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[280]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[280]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[281]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[281]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[282]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[282]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[283]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[283]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[284]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[284]["Realizado"] || 0
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
