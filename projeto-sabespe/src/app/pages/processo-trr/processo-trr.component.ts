import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-trr',
  templateUrl: './processo-trr.component.html',
  styleUrls: ['./processo-trr.component.css']
})
export class ProcessoTRRComponent {

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
            value: this.excelData[285]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[285]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[286]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[286]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[287]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[287]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[288]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[288]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[289]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[289]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[290]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[290]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[291]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[291]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[292]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[292]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[293]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[293]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[294]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[294]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[295]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[295]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[296]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[296]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
