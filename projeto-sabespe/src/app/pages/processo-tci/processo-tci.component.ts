import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tci',
  templateUrl: './processo-tci.component.html',
  styleUrls: ['./processo-tci.component.css']
})
export class ProcessoTCIComponent {

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
                value: this.excelData[112]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[112]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[113]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[113]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[114]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[114]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[115]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[115]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[116]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[116]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[117]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[117]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[118]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[118]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[119]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[119]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[120]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[120]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[121]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[121]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[122]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[122]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[123]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[123]["Realizado"] || 0
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
