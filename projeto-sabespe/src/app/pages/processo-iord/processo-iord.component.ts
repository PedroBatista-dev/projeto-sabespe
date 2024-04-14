import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iord',
  templateUrl: './processo-iord.component.html',
  styleUrls: ['./processo-iord.component.css']
})
export class ProcessoIORDComponent {

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
            value: this.excelData[309]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[309]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[310]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[310]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[311]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[311]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[312]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[312]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[313]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[313]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[314]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[314]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[315]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[315]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[316]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[316]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[317]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[317]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[318]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[318]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[319]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[319]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[320]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[320]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
