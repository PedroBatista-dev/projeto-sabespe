import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ianc',
  templateUrl: './processo-ianc.component.html',
  styleUrls: ['./processo-ianc.component.css']
})
export class ProcessoIANCComponent {

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
            value: this.excelData[60]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[60]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[61]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[61]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[62]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[62]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[63]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[63]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[64]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[64]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[65]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[65]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[66]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[66]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[67]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[67]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[68]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[68]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[69]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[69]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[70]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[70]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[71]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[71]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
