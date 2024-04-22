import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-irfa',
  templateUrl: './processo-irfa.component.html',
  styleUrls: ['./processo-irfa.component.css']
})
export class ProcessoIRFAComponent {

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

        this.sentido = this.excelData[208]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[208]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[208]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[209]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[209]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[210]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[210]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[211]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[211]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[212]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[212]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[213]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[213]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[214]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[214]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[215]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[215]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[216]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[216]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[217]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[217]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[218]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[218]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[219]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[219]["Realizado"] || 0
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
