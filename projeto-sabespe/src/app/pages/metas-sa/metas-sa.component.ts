import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-metas-sa',
  templateUrl: './metas-sa.component.html',
  styleUrls: ['./metas-sa.component.css']
})
export class MetasSAComponent {

  excelData = [];

  customColors = [
    { name: 'Previsto', value: '#FFC601' },
    { name: 'Realizado', value: '#12D0FF' },
  ]

  indCobAgua: { name: string, value: number }[] = [];
  indAtendAgua: { name: string, value: number }[] = [];
  indPerdReais: { name: string, value: number }[] = [];
  indCobEsgoto: { name: string, value: number }[] = [];
  indAtendEsgoto: { name: string, value: number }[] = [];
  indEcoColetadas: { name: string, value: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/sabespe.xlsm', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[9];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData);

        this.indCobAgua = [
          {
            name: "Previsto",
            value: parseFloat(this.excelData[0]["Previsto"])
          },
          {
            name: "Realizado",
            value: parseFloat(this.excelData[0]["Realizado"])
          },
        ];

        this.indPerdReais = [
          {
            name: "Previsto",
            value: parseFloat(this.excelData[1]["Previsto"])
          },
          {
            name: "Realizado",
            value: parseFloat(this.excelData[1]["Realizado"])
          },
        ];

        this.indCobEsgoto = [
          {
            name: "Previsto",
            value: parseFloat(this.excelData[2]["Previsto"])
          },
          {
            name: "Realizado",
            value: parseFloat(this.excelData[2]["Realizado"])
          },
        ];

        this.indEcoColetadas = [
          {
            name: "Previsto",
            value: parseFloat(this.excelData[3]["Previsto"])
          },
          {
            name: "Realizado",
            value: parseFloat(this.excelData[3]["Realizado"])
          },
        ];
        console.log(this.indCobAgua)
      });    
  }

  formatDataLabel(value: number): string {
    return `${value} %`
  }
  formatDataLabelLitro(value: number): string {
    return `${value} L/l.d`
  }
}
