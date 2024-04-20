import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tca',
  templateUrl: './processo-tca.component.html',
  styleUrls: ['./processo-tca.component.css']
})
export class ProcessoTCAComponent {

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
                value: this.excelData[124]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[124]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[125]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[125]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[126]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[126]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[127]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[127]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[128]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[128]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[129]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[129]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[130]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[130]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[131]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[131]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[132]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[132]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[133]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[133]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[134]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[134]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[135]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[135]["Realizado"] || 0
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
