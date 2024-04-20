import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-asa',
  templateUrl: './processo-asa.component.html',
  styleUrls: ['./processo-asa.component.css']
})
export class ProcessoASAComponent {

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
                value: this.excelData[148]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[148]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[149]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[149]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[150]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[150]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[151]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[151]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[152]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[152]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[153]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[153]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[154]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[154]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[155]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[155]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[156]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[156]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[157]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[157]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[158]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[158]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[159]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[159]["Realizado"] || 0
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
