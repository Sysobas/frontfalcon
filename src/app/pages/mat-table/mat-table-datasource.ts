import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTableItem } from 'src/app/services/archive-service';

const EXAMPLE_DATA: MatTableItem[] = [];

export class MatTableDataSource extends DataSource<MatTableItem> {
  data: MatTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  connect(): Observable<MatTableItem[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() { }

  private getPagedData(data: MatTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  private getSortedData(data: MatTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'data': return compare(a.data, b.data, isAsc);
        case 'ip': return compare(a.ip, b.ip, isAsc);
        case 'requisicao': return compare(a.requisicao, b.requisicao, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'userAgent': return compare(a.userAgent, b.userAgent, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: Date | string | number, b: Date | string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
