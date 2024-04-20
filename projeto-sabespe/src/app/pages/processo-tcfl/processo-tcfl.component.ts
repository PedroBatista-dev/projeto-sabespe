import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tcfl',
  templateUrl: './processo-tcfl.component.html',
  styleUrls: ['./processo-tcfl.component.css']
})
export class ProcessoTCFLComponent {

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
            value: this.excelData[0]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[0]["Realizado"] || 0
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[1]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[1]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[2]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[2]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[3]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[3]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[4]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[4]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[5]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[5]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[6]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[6]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[7]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[7]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[8]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[8]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[9]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[9]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[10]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[10]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[11]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[11]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
