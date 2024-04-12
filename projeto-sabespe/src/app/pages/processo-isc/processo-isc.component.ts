import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-isc',
  templateUrl: './processo-isc.component.html',
  styleUrls: ['./processo-isc.component.css']
})
export class ProcessoISCComponent {

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
            value: this.excelData[48]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[48]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[49]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[49]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[50]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[50]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[51]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[51]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[52]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[52]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[53]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[53]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[54]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[54]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[55]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[55]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[56]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[56]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[57]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[57]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[58]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[58]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[59]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[59]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
