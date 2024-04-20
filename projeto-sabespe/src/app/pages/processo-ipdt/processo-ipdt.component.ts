import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ipdt',
  templateUrl: './processo-ipdt.component.html',
  styleUrls: ['./processo-ipdt.component.css']
})
export class ProcessoIPDTComponent {

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
                value: this.excelData[100]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[100]["Realizado"]
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[101]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[101]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[102]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[102]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[103]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[103]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[104]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[104]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[105]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[105]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[106]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[106]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[107]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[107]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[108]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[108]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[109]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[109]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[110]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[110]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[111]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[111]["Realizado"] || 0
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
