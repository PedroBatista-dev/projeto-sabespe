import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-tci',
  templateUrl: './processo-tci.component.html',
  styleUrls: ['./processo-tci.component.css']
})
export class ProcessoTCIComponent {

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
            value: this.excelData[112]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[112]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[113]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[113]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[114]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[114]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[115]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[115]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[116]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[116]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[117]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[117]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[118]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[118]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[119]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[119]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[120]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[120]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[121]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[121]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[122]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[122]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[123]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[123]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
