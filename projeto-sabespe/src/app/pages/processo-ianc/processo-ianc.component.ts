import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ianc',
  templateUrl: './processo-ianc.component.html',
  styleUrls: ['./processo-ianc.component.css']
})
export class ProcessoIANCComponent {

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
                value: this.excelData[60]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[60]["Realizado"]
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[61]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[61]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[62]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[62]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[63]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[63]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[64]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[64]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[65]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[65]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[66]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[66]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[67]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[67]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[68]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[68]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[69]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[69]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[70]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[70]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[71]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[71]["Realizado"] || 0
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
