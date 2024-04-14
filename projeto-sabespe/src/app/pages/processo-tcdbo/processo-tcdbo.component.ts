import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tcdbo',
  templateUrl: './processo-tcdbo.component.html',
  styleUrls: ['./processo-tcdbo.component.css']
})
export class ProcessoTCDBOComponent {

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
            value: this.excelData[273]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[273]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[274]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[274]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[275]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[275]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[276]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[276]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[277]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[277]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[278]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[278]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[279]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[279]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[280]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[280]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[281]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[281]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[282]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[282]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[283]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[283]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[284]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[284]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
