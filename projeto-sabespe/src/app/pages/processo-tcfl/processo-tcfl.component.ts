import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tcfl',
  templateUrl: './processo-tcfl.component.html',
  styleUrls: ['./processo-tcfl.component.css']
})
export class ProcessoTCFLComponent {

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

        this.sentido = this.excelData[0]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[0]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[0]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[1]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[1]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[2]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[2]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[3]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[3]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[4]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[4]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[5]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[5]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[6]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[6]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[7]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[7]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[8]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[8]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[9]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[9]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[10]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[10]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[11]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[11]["Realizado"] || 0
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
