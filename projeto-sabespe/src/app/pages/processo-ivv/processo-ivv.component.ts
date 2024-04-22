import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ivv',
  templateUrl: './processo-ivv.component.html',
  styleUrls: ['./processo-ivv.component.css']
})
export class ProcessoIVVComponent {

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

        this.sentido = this.excelData[184]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[184]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[184]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[185]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[185]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[186]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[186]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[187]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[187]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[188]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[188]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[189]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[189]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[190]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[190]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[191]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[191]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[192]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[192]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[193]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[193]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[194]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[194]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[195]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[195]["Realizado"] || 0
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
