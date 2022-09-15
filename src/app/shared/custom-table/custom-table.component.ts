import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

export interface headers {
  text: string;
  value: string;
  sort?: boolean;
  columnNumber?: number
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
  headers: headers[];
  items: any[];
  dense: boolean;
  serverSideItems: serverSideItems;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})

export class CustomTableComponent implements dataTable, OnInit, AfterViewInit {
  // @ViewChild('table') table: ElementRef;

  @Input() title = "";
  @Input() serverSide = false;
  @Input() search = true;
  @Input() headers: headers[] = []
  @Input() items: any[] = [];
  @Input() serverSideItems: serverSideItems = { items: [], total: 0 };
  @Input() dense = false
  @Input() action: TemplateRef<any>;
  @Input() rowItems: any[] = [5, 10, 25, 50, 100];

  @Input() searchValue = "";
  @Output() private searchValueChange = new EventEmitter<string>()

  pageIndex = 1;
  limitRows = "-1";


  loading = false
  ngOnInit() {
    this.items = this.serverSide ? this.serverSideItems.items : this.items;
  }
  ngAfterViewInit() {
    // console.log(this.table)
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

  get statusNextPage() {
    if (this.limitRows === "-1")
      return true
    return this.filteredLists.length - (+this.limitRows * this.pageIndex) < 1
  }

  onSearchInput() {
    // this.loading = true
    this.searchValueChange.emit(this.searchValue)
    this.pageIndex = 1;

  }
  onResize() {
    console.log("asd")
  }
  constructor() {

  }
}
