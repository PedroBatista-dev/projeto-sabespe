import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tca',
  templateUrl: './processo-tca.component.html',
  styleUrls: ['./processo-tca.component.css']
})
export class ProcessoTCAComponent {

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
            value: this.excelData[124]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[124]["Realizado"] || 0
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[125]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[125]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[126]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[126]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[127]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[127]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[128]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[128]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[129]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[129]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[130]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[130]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[131]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[131]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[132]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[132]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[133]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[133]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[134]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[134]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[135]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[135]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
