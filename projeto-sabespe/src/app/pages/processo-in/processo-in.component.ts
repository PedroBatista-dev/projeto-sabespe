import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-in',
  templateUrl: './processo-in.component.html',
  styleUrls: ['./processo-in.component.css']
})
export class ProcessoINComponent {

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
            value: this.excelData[172]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[172]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[173]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[173]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[174]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[174]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[175]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[175]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[176]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[176]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[177]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[177]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[178]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[178]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[179]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[179]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[180]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[180]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[181]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[181]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[182]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[182]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[183]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[183]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
