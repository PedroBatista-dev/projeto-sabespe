import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-touv',
  templateUrl: './processo-touv.component.html',
  styleUrls: ['./processo-touv.component.css']
})
export class ProcessoTOUVComponent {

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
                value: this.excelData[261]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[261]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[262]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[262]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[263]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[263]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[264]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[264]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[265]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[265]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[266]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[266]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[267]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[267]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[268]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[268]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[269]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[269]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[270]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[270]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[271]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[271]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[272]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[272]["Realizado"] || 0
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
