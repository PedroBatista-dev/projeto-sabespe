import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-processo-ase',
  templateUrl: './processo-ase.component.html',
  styleUrls: ['./processo-ase.component.css']
})
export class ProcessoASEComponent {

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
            value: this.excelData[160]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[160]["Realizado"]
          },
        ];

        this.fevereiro = [
          {
            name: "Previsto",
            value: this.excelData[161]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[161]["Realizado"] || 0
          },
        ];

        this.marco = [
          {
            name: "Previsto",
            value: this.excelData[162]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[162]["Realizado"] || 0
          },
        ];

        this.abril = [
          {
            name: "Previsto",
            value: this.excelData[163]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[163]["Realizado"] || 0
          },
        ];

        this.maio = [
          {
            name: "Previsto",
            value: this.excelData[164]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[164]["Realizado"] || 0
          },
        ];

        this.junho = [
          {
            name: "Previsto",
            value: this.excelData[165]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[165]["Realizado"] || 0
          },
        ];

        this.julho = [
          {
            name: "Previsto",
            value: this.excelData[166]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[166]["Realizado"] || 0
          },
        ];

        this.agosto = [
          {
            name: "Previsto",
            value: this.excelData[167]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[167]["Realizado"] || 0
          },
        ];

        this.setembro = [
          {
            name: "Previsto",
            value: this.excelData[168]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[168]["Realizado"] || 0
          },
        ];

        this.outubro = [
          {
            name: "Previsto",
            value: this.excelData[169]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[169]["Realizado"] || 0
          },
        ];

        this.novembro = [
          {
            name: "Previsto",
            value: this.excelData[170]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[170]["Realizado"] || 0
          },
        ];

        this.dezembro = [
          {
            name: "Previsto",
            value: this.excelData[171]["Previsto"] || 0
          },
          {
            name: "Realizado",
            value: this.excelData[171]["Realizado"] || 0
          },
        ];        
      });    
  }

  formatDataLabel(value: number): string {
    return `${value}%`
  }
}
