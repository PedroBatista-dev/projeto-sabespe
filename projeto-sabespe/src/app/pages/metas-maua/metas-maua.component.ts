import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-metas-maua',
  templateUrl: './metas-maua.component.html',
  styleUrls: ['./metas-maua.component.css']
})
export class MetasMauaComponent {

  excelData = [];

  customColors = [
    { name: 'Previsto', value: '#12D0FF' },
    { name: 'Realizado', value: '#FFC601' },
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
        const sheetName = workbook.SheetNames[10];
        const worksheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        
        console.log(this.excelData);

        this.indCobAgua = [
          {
            name: "Previsto",
            value: parseFloat(this.excelData[3]["__EMPTY"])
          },
          {
            name: "Realizado",
            value: parseFloat(this.excelData[3]["__EMPTY_1"])
          },
        ];

        this.indPerdReais = [
          {
            name: "Previsto",
            value: parseFloat(this.excelData[4]["__EMPTY"])
          },
          {
            name: "Realizado",
            value: parseFloat(this.excelData[4]["__EMPTY_1"])
          },
        ];
        console.log(this.indCobAgua)
      });    
  }
}
