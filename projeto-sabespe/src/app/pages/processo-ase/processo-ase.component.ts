import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ase',
  templateUrl: './processo-ase.component.html',
  styleUrls: ['./processo-ase.component.css']
})
export class ProcessoASEComponent {

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

        this.sentido = this.excelData[160]["cSentido"];

        this.data = [
          {
            name: "Janeiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[160]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[160]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Fevereiro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[161]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[161]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Março",
            series: [
              {
                name: "Previsto",
                value: this.excelData[162]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[162]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Abril",
            series: [
              {
                name: "Previsto",
                value: this.excelData[163]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[163]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Maio",
            series: [
              {
                name: "Previsto",
                value: this.excelData[164]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[164]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Junho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[165]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[165]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Julho",
            series: [
              {
                name: "Previsto",
                value: this.excelData[166]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[166]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Agosto",
            series: [
              {
                name: "Previsto",
                value: this.excelData[167]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[167]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Setembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[168]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[168]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Outubro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[169]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[169]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Novembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[170]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[170]["Realizado"] || 0
              },
            ]
          },
          {
            name: "Dezembro",
            series: [
              {
                name: "Previsto",
                value: this.excelData[171]["Previsto"] || 0
              },
              {
                name: "Realizado",
                value: this.excelData[171]["Realizado"] || 0
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
