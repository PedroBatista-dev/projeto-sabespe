import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tcd',
  templateUrl: './processo-tcd.component.html',
  styleUrls: ['./processo-tcd.component.css']
})
export class ProcessoTCDComponent {

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
            value: this.excelData[136]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[136]["Realizado"] || 0
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[137]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[137]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[138]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[138]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[139]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[139]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[140]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[140]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[141]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[141]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[142]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[142]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[143]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[143]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[144]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[144]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[145]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[145]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[146]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[146]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[147]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[147]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
