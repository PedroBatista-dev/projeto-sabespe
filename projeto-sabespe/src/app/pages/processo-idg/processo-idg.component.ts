import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-idg',
  templateUrl: './processo-idg.component.html',
  styleUrls: ['./processo-idg.component.css']
})
export class ProcessoIDGComponent {

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

        this.sentido = this.excelData[220]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[220]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[220]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[221]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[221]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[222]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[222]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[223]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[223]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[224]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[224]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[225]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[225]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[226]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[226]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[227]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[227]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[228]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[228]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[229]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[229]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[230]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[230]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[231]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[231]["Realizado"] || 0
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
