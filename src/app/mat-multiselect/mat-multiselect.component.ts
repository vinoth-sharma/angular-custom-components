import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
declare var document: any;
@Component({
  selector: 'my-mat-multiselect',
  templateUrl: './mat-multiselect.component.html',
  styleUrls: ['./mat-multiselect.component.css']
})
export class MatMultiselect implements OnInit {

  @Input() data: Array<{}>;
  @Input() settings: any;

  @Input() inputModel: Array<{}>;
  @Output() inputModelChange = new EventEmitter();
  // @ViewChild("") private multiInput: MatOption;

  @ViewChild(MatSelect) matSelect: MatSelect;
  toppings = new FormControl();
  // searchUserForm: FormGroup;
  // selected;
  l_data;
  searched_data;
  selectAll = [2];
  l_db = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.matSelect.openedChange.subscribe(opened => {
      if (!opened) {
        this.inputModelChange.emit(this.getOutput());
      }
      else {
        document.getElementById("multiInput").value = ""
        this.selectAllBoxValidate()
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {

    this.l_data = JSON.parse(JSON.stringify(this.data));
    this.l_db = this.inputModel ? this.inputModel.map(ele => ele[this.settings.primary_key]) : [];

    this.searched_data = JSON.parse(JSON.stringify(this.l_data));

    this.searched_data.forEach(element => {
      element['checked'] = this.l_db.includes(element[this.settings.primary_key])
    });
    // console.log(this.searched_data);
  }

  onKey(value) {
    if (value === '') {
      this.searched_data = [...this.l_data]
    } else {
      this.searched_data = this.search(value);
    }
    this.selectAllBoxValidate()
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.l_data.filter(option => option[this.settings.label_key].toLowerCase().includes(filter));
  }

  toggleAllSelection(event) {
    if (this.selectAll.length > 1) {
      this.searched_data.forEach(element => {
        this.addSelection(element[this.settings.primary_key]);
      });
    }
    else {
      this.searched_data.forEach(element => {
        this.removeSelection(element[this.settings.primary_key]);
      });
    }
    this.stabilizeData();
    // console.log(this.l_db);
  }

  checkedBox(event) {
    if (event.checked)
      this.addSelection(event.source.value)
    else if (!event.checked)
      this.removeSelection(event.source.value)

    this.stabilizeData();
    this.selectAllBoxValidate()
  }

  selectAllBoxValidate() {
    if (this.searched_data.every(ele => this.l_db.includes(ele[this.settings.primary_key])))
      this.selectAll = [0, 2]
    else
      this.selectAll = [2]
  }

  stabilizeData() {
    this.searched_data.forEach(element => {
      element['checked'] = this.l_db.includes(element[this.settings.primary_key])
    });
  }

  removeSelection(value) {
    const index = this.l_db.indexOf(value);
    if (index > -1) {
      this.l_db.splice(index, 1);
    }
  }

  addSelection(value) {
    this.l_db.push(value);
    this.l_db = [...new Set(this.l_db)]
  }

  getOutput() {
    let output = this.data.filter(ele => {
      if (this.l_db.includes(ele[this.settings.primary_key]))
        return ele
    })
    output.forEach(ele => delete ele['checked'])
    return output
  }

  getTitle() {
    let op = this.data.filter(ele => {
      if (this.l_db.includes(ele[this.settings.primary_key]))
        return ele
    })
    if (this.l_db.length) {
      let f: any = op.reduce((a: any, b: any) => {
        return { [this.settings.label_key]: a[this.settings.label_key] + ',' + b[this.settings.label_key] }
      })
      return f.name
    } 
    else
    {
      return "Select"
    }
  }
}

