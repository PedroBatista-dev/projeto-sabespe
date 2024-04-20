import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-isc',
  templateUrl: './processo-isc.component.html',
  styleUrls: ['./processo-isc.component.css']
})
export class ProcessoISCComponent {

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
                value: this.excelData[48]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[48]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[49]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[49]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[50]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[50]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[51]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[51]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[52]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[52]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[53]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[53]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[54]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[54]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[55]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[55]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[56]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[56]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[57]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[57]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[58]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[58]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[59]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[59]["Realizado"] || 0
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
