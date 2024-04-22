import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-vp',
  templateUrl: './processo-vp.component.html',
  styleUrls: ['./processo-vp.component.css']
})
export class ProcessoVPComponent {

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

        this.sentido = this.excelData[72]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[72]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[72]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[73]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[73]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[74]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[74]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[75]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[75]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[76]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[76]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[77]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[77]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[78]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[78]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[79]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[79]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[80]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[80]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[81]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[81]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[82]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[82]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[83]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[83]["Realizado"] || 0
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
