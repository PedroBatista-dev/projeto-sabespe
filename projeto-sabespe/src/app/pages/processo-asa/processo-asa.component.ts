import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-asa',
  templateUrl: './processo-asa.component.html',
  styleUrls: ['./processo-asa.component.css']
})
export class ProcessoASAComponent {

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
            value: this.excelData[148]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[148]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[149]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[149]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[150]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[150]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[151]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[151]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[152]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[152]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[153]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[153]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[154]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[154]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[155]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[155]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[156]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[156]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[157]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[157]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[158]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[158]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[159]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[159]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
