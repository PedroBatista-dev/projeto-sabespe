import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-nla',
  templateUrl: './processo-nla.component.html',
  styleUrls: ['./processo-nla.component.css']
})
export class ProcessoNLAComponent {

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
            value: this.excelData[24]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[24]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[25]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[25]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[26]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[26]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[27]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[27]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[28]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[28]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[29]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[29]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[30]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[30]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[31]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[31]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[32]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[32]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[33]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[33]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[34]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[34]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[35]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[35]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
