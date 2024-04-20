import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-igq',
  templateUrl: './processo-igq.component.html',
  styleUrls: ['./processo-igq.component.css']
})
export class ProcessoIGQComponent {

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
                value: this.excelData[321]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[321]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[322]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[322]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[323]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[323]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[324]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[324]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[325]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[325]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[326]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[326]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[327]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[327]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[328]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[328]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[329]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[329]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[330]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[330]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[331]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[331]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[332]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[332]["Realizado"] || 0
              },
            ]
          },
        ];     
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
