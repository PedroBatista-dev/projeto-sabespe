import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-irfa',
  templateUrl: './processo-irfa.component.html',
  styleUrls: ['./processo-irfa.component.css']
})
export class ProcessoIRFAComponent {

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
            value: this.excelData[208]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[208]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[209]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[209]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[210]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[210]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[211]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[211]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[212]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[212]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[213]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[213]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[214]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[214]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[215]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[215]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[216]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[216]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[217]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[217]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[218]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[218]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[219]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[219]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
