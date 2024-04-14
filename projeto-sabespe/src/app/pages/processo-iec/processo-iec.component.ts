import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iec',
  templateUrl: './processo-iec.component.html',
  styleUrls: ['./processo-iec.component.css']
})
export class ProcessoIECComponent {

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
            value: this.excelData[88]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[88]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[89]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[89]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[90]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[90]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[91]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[91]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[92]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[92]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[93]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[93]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[94]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[94]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[95]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[95]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[96]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[96]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[97]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[97]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[98]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[98]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[99]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[99]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
