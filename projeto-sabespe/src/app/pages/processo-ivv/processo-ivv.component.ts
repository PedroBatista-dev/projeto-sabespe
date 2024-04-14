import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ivv',
  templateUrl: './processo-ivv.component.html',
  styleUrls: ['./processo-ivv.component.css']
})
export class ProcessoIVVComponent {

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
            value: this.excelData[184]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[184]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[185]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[185]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[186]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[186]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[187]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[187]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[188]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[188]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[189]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[189]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[190]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[190]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[191]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[191]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[192]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[192]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[193]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[193]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[194]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[194]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[195]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[195]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
