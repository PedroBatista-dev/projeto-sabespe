import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-vp',
  templateUrl: './processo-vp.component.html',
  styleUrls: ['./processo-vp.component.css']
})
export class ProcessoVPComponent {

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
            value: this.excelData[72]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[72]["Realizado"] || 0
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[73]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[73]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[74]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[74]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[75]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[75]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[76]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[76]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[77]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[77]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[78]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[78]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[79]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[79]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[80]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[80]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[81]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[81]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[82]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[82]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[83]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[83]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
