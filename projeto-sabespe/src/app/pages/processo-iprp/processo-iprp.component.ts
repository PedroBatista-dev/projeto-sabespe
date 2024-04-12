import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-iprp',
  templateUrl: './processo-iprp.component.html',
  styleUrls: ['./processo-iprp.component.css']
})
export class ProcessoIPRPComponent {

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
            value: this.excelData[36]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[36]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[37]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[37]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[38]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[38]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[39]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[39]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[40]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[40]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[41]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[41]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[42]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[42]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[43]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[43]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[44]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[44]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[45]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[45]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[46]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[46]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[47]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[47]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
