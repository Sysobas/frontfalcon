import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from './mat-table-datasource';
import { MatTableItem } from 'src/app/services/archive-service';
import { BackfalconService } from 'src/app/services/backfalcon.service';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MatTableItem>;
  dataSource: MatTableDataSource;
  EXAMPLE_DATA: MatTableItem[];

  constructor(private backfalconService: BackfalconService) { }

  displayedColumns = ['id', 'data', 'ip', 'requisicao', 'status', 'userAgent'];

  ngOnInit() {
    this.backfalconService.buscaTotal().subscribe((response) => this.dataSource.data = response as MatTableItem[]);
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
