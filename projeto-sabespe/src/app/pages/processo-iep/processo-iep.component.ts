import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iep',
  templateUrl: './processo-iep.component.html',
  styleUrls: ['./processo-iep.component.css']
})
export class ProcessoIEPComponent {

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
            value: this.excelData[232]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[232]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[233]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[233]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[234]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[234]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[235]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[235]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[236]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[236]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[237]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[237]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[238]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[238]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[239]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[239]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[240]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[240]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[241]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[241]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[242]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[242]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[243]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[243]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
