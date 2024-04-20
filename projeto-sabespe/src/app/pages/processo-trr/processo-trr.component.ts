import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-trr',
  templateUrl: './processo-trr.component.html',
  styleUrls: ['./processo-trr.component.css']
})
export class ProcessoTRRComponent {

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
                value: this.excelData[285]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[285]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[286]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[286]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[287]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[287]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[288]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[288]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[289]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[289]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[290]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[290]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[291]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[291]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[292]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[292]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[293]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[293]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[294]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[294]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[295]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[295]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[296]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[296]["Realizado"] || 0
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
