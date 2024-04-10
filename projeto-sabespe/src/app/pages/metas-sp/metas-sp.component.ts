import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-metas-sp',
  templateUrl: './metas-sp.component.html',
  styleUrls: ['./metas-sp.component.css']
})
export class MetasSPComponent {

  excelData = [];

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
        const sheetName = workbook.SheetNames[8];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData);

        this.indCobAgua = [
          {
            name: "Previsto",
            value: parseFloat(String(this.excelData[4]["__EMPTY_1"]).substring(0, 4).replace(/,/g, '.'))
          },
          {
            name: "Realizado",
            value: parseFloat(String(this.excelData[4]["__EMPTY_2"]).substring(0, 4).replace(/,/g, '.'))
          },
        ];

        this.indAtendAgua = [
          {
            name: "Previsto",
            value: parseFloat(String(this.excelData[5]["__EMPTY_1"]).substring(0, 4).replace(/,/g, '.'))
          },
          {
            name: "Realizado",
            value: parseFloat(String(this.excelData[5]["__EMPTY_2"]).substring(0, 4).replace(/,/g, '.'))
          },
        ];

        this.indPerdReais = [
          {
            name: "Previsto",
            value: parseFloat(String(this.excelData[6]["__EMPTY_1"]).substring(0, 4).replace(/,/g, '.'))
          },
          {
            name: "Realizado",
            value: parseFloat(String(this.excelData[6]["__EMPTY_2"]).substring(0, 4).replace(/,/g, '.'))
          },
        ];

        this.indCobEsgoto = [
          {
            name: "Previsto",
            value: parseFloat(String(this.excelData[7]["__EMPTY_1"]).substring(0, 4).replace(/,/g, '.'))
          },
          {
            name: "Realizado",
            value: parseFloat(String(this.excelData[7]["__EMPTY_2"]).substring(0, 4).replace(/,/g, '.'))
          },
        ];

        this.indAtendEsgoto = [
          {
            name: "Previsto",
            value: parseFloat(String(this.excelData[8]["__EMPTY_1"]).substring(0, 4).replace(/,/g, '.'))
          },
          {
            name: "Realizado",
            value: parseFloat(String(this.excelData[8]["__EMPTY_2"]).substring(0, 4).replace(/,/g, '.'))
          },
        ];

        this.indEcoColetadas = [
          {
            name: "Previsto",
            value: parseFloat(String(this.excelData[9]["__EMPTY_1"]).substring(0, 4).replace(/,/g, '.'))
          },
          {
            name: "Realizado",
            value: parseFloat(String(this.excelData[9]["__EMPTY_2"]).substring(0, 4).replace(/,/g, '.'))
          },
        ];
        console.log(this.indCobAgua)
      });    
  }
}
