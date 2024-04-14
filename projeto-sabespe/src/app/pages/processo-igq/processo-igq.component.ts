import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-igq',
  templateUrl: './processo-igq.component.html',
  styleUrls: ['./processo-igq.component.css']
})
export class ProcessoIGQComponent {

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
            value: this.excelData[321]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[321]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[322]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[322]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[323]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[323]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[324]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[324]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[325]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[325]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[326]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[326]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[327]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[327]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[328]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[328]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[329]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[329]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[330]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[330]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[331]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[331]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[332]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[332]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
