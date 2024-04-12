import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-nle',
  templateUrl: './processo-nle.component.html',
  styleUrls: ['./processo-nle.component.css']
})
export class ProcessoNLEComponent {

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
            value: this.excelData[12]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[12]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[13]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[13]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[14]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[14]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[15]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[15]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[16]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[16]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[17]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[17]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[18]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[18]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[19]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[19]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[20]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[20]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[21]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[21]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[22]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[22]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[23]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[23]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
