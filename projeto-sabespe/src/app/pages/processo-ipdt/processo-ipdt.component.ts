import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ipdt',
  templateUrl: './processo-ipdt.component.html',
  styleUrls: ['./processo-ipdt.component.css']
})
export class ProcessoIPDTComponent {

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
            value: this.excelData[100]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[100]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[101]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[101]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[102]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[102]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[103]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[103]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[104]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[104]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[105]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[105]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[106]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[106]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[107]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[107]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[108]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[108]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[109]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[109]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[110]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[110]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[111]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[111]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
