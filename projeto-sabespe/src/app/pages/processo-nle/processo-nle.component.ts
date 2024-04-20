import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-nle',
  templateUrl: './processo-nle.component.html',
  styleUrls: ['./processo-nle.component.css']
})
export class ProcessoNLEComponent {

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
                value: this.excelData[12]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[12]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[13]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[13]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[14]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[14]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[15]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[15]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[16]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[16]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[17]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[17]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[18]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[18]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[19]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[19]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[20]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[20]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[21]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[21]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[22]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[22]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[23]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[23]["Realizado"] || 0
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
