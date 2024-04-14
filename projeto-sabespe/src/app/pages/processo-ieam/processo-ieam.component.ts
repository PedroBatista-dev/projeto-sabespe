import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ieam',
  templateUrl: './processo-ieam.component.html',
  styleUrls: ['./processo-ieam.component.css']
})
export class ProcessoIEAMComponent {

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
            value: this.excelData[244]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[244]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[245]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[245]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[246]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[246]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[247]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[247]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[248]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[248]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[249]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[249]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[250]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[250]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[251]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[251]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[252]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[252]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[253]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[253]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[254]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[254]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[255]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[255]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
