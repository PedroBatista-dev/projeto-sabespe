import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iorc',
  templateUrl: './processo-iorc.component.html',
  styleUrls: ['./processo-iorc.component.css']
})
export class ProcessoIORCComponent {

  excelData = [];

  customColors = [
    { name: 'Previsto', value: '#12D0FF' },
    { name: 'Realizado', value: '#FFC601' },
  ]

  janeiro: { name: string, value: number }[] = [];
  fevereiro: { name: string, value: number }[] = [];
  marco: { name: string, value: number }[] = [];
  abril: { name: string, value: number }[] = [];
  maio: { name: string, value: number }[] = [];
  junho: { name: string, value: number }[] = [];
  julho: { name: string, value: number }[] = [];
  agosto: { name: string, value: number }[] = [];
  setembro: { name: string, value: number }[] = [];
  outubro: { name: string, value: number }[] = [];
  novembro: { name: string, value: number }[] = [];
  dezembro: { name: string, value: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/sabespe.xlsm', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[7];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData);

        this.janeiro = [
          {
            name: "Previsto",
            value: this.excelData[297]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[297]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[298]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[298]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[299]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[299]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[300]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[300]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[301]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[301]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[302]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[302]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[303]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[303]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[304]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[304]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[305]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[305]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[306]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[306]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[307]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[307]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[308]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[308]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
