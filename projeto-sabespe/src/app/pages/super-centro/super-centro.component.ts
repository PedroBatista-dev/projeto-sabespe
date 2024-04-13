import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-super-centro',
  templateUrl: './super-centro.component.html',
  styleUrls: ['./super-centro.component.css']
})
export class SuperCentroComponent {

  excelData = [];
  atendimentoAgua = '100';
  atendimentoEsgoto = '';
  tratamentoEsgoto = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/sabespe.xlsm', { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData[0]);
        this.atendimentoAgua = String(this.excelData[0]["Atendimento de Água"] * 100).replace(/\./g, ',');
        this.atendimentoEsgoto = String(this.excelData[0]["Atendimento de Esgoto"] * 100).replace(/\./g, ',');
        this.tratamentoEsgoto = String(this.excelData[0]["Tratamento de Esgoto"] * 100).replace(/\./g, ',');
      });
  }

}
