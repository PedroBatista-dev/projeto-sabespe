import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-touv',
  templateUrl: './processo-touv.component.html',
  styleUrls: ['./processo-touv.component.css']
})
export class ProcessoTOUVComponent {

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
            value: this.excelData[261]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[261]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[262]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[262]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[263]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[263]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[264]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[264]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[265]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[265]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[266]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[266]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[267]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[267]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[268]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[268]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[269]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[269]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[270]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[270]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[271]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[271]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[272]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[272]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
