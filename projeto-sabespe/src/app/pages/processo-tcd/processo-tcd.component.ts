import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tcd',
  templateUrl: './processo-tcd.component.html',
  styleUrls: ['./processo-tcd.component.css']
})
export class ProcessoTCDComponent {

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
                value: this.excelData[136]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[136]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[137]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[137]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[138]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[138]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[139]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[139]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[140]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[140]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[141]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[141]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[142]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[142]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[143]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[143]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[144]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[144]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[145]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[145]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[146]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[146]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[147]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[147]["Realizado"] || 0
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
