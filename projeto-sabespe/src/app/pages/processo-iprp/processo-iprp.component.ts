import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iprp',
  templateUrl: './processo-iprp.component.html',
  styleUrls: ['./processo-iprp.component.css']
})
export class ProcessoIPRPComponent {

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
                value: this.excelData[36]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[36]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[37]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[37]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[38]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[38]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[39]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[39]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[40]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[40]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[41]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[41]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[42]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[42]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[43]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[43]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[44]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[44]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[45]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[45]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[46]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[46]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[47]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[47]["Realizado"] || 0
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
