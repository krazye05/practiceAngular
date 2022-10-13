import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

export interface header {
  text: string;
  value: string;
  sort?: boolean;
  sortIndex?: number
  sortValue?: "ASC" | "DESC" | null;
  columnNumber?: number | null
  sticky?: boolean
}

export interface serverSideItems {
  items: [];
  total: number;
}

export interface dataTable {
  title: string;
  serverSide: boolean;
  search: boolean;
  headers: header[];
  items: any[];
  dense: boolean;
  serverSideItems: serverSideItems;
  sort?: boolean;
  multiSort?: boolean;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})

export class CustomTableComponent implements dataTable, OnInit, AfterViewInit {
  @Input() title = "";
  @Input() serverSide = false;
  @Input() search = true;
  @Input() sort = false
  @Input() headers: header[] = []
  @Input() multiSort = false
  @Input() items: any[] = [];
  @Input() serverSideItems: serverSideItems = { items: [], total: 0 };
  @Input() dense = false
  @Input() action: TemplateRef<any>;
  @Input() rowItems: any[] = [5, 10, 25, 50, 100];

  @Input() searchValue = "";
  @Output() private searchValueChange = new EventEmitter<string>()

  multiSortList = []
  pageIndex = 1;
  limitRows = "-1";
  loading = false;

  ngOnInit() {
    this.items = this.serverSide ? this.serverSideItems.items : this.items;
  }

  ngAfterViewInit() {
    // console.log(document.getElementById("test"))
  }

  private get filteredLists() {
    return this.items.map((item: any) => this.headers.map((header: any) => item[header.value].toString().toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1).includes(true) || this.searchValue === "" ? item : false).filter(Boolean)
  }

  get listsPaginate() {
    if (this.limitRows === "-1")
      return this.filteredLists
    return this.filteredLists.splice(((this.pageIndex - 1) * +this.limitRows), +this.limitRows)
  }

  get rowsInfo() {
    const previousTotalList = +this.limitRows * (this.pageIndex - 1),
      totalList = this.serverSide ? this.serverSideItems.total : this.items.length;
    return this.filteredLists.length <= 0 ? "-" : (previousTotalList + 1 + "-" + (previousTotalList + this.listsPaginate.length) + " of " + this.filteredLists.length)
  }

  onTogglePage(pageNumber: number) {
    this.pageIndex += pageNumber
  }

  onSort(header: header) {
    const headerSelect = this.headers.find(e => e == header)
    headerSelect.sortValue = [null, undefined].includes(header.sortValue)
      ? 'ASC'
      : header.sortValue === 'ASC'
        ? 'DESC'
        : null;
    if (this.multiSort) {
      if (headerSelect.sortValue === 'ASC')
        this.multiSortList.push(header), headerSelect.sortIndex = this.sortIndex(header) - 1
      if (headerSelect.sortValue === null)
        this.multiSortList.splice(this.multiSortList.findIndex(e => e == header), 1), headerSelect.sortIndex = null
    }
  }


  get statusNextPage() {
    if (this.limitRows === "-1")
      return true
    return this.filteredLists.length - (+this.limitRows * this.pageIndex) < 1
  }

  onSearchInput() {
    this.searchValueChange.emit(this.searchValue)
    this.pageIndex = 1;
  }

  sortIndex(header: header) {
    return this.multiSortList.findIndex(e => e == header) + 1
  }

  constructor() {

  }
}
