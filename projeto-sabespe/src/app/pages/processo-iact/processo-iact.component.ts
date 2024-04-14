import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iact',
  templateUrl: './processo-iact.component.html',
  styleUrls: ['./processo-iact.component.css']
})
export class ProcessoIACTComponent {

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
            value: this.excelData[196]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[196]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[197]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[197]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[198]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[198]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[199]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[199]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[200]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[200]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[201]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[201]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[202]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[202]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[203]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[203]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[204]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[204]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[205]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[205]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[206]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[206]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[207]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[207]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
