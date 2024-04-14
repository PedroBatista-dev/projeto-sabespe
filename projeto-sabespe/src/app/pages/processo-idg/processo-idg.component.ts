import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-idg',
  templateUrl: './processo-idg.component.html',
  styleUrls: ['./processo-idg.component.css']
})
export class ProcessoIDGComponent {

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
            value: this.excelData[220]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[220]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[221]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[221]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[222]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[222]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[223]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[223]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[224]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[224]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[225]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[225]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[226]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[226]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[227]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[227]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[228]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[228]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[229]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[229]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[230]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[230]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[231]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[231]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
