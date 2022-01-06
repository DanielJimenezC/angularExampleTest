import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime, distinctUntilChanged, map, Observable, Subject } from 'rxjs';

import { Item } from 'src/app/models/data';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  item: Item = new Item();
  
  displayedColumns: string[] = ['Id', 'Nombre', 'Edad'];
  myData!: any;

  inputText$!: Observable<string>;
  private searchText$ = new Subject<string>();

  itemForm = this.formBuilder.group({
    id: ['', [Validators.required, Validators.min(1)]],
    nombre: ['', [Validators.required, Validators.maxLength(50)]],
    edad: ['', [Validators.required, Validators.min(1)]],
    aliases: this.formBuilder.array([])
  })

  get aliases() {
    return this.itemForm.get('aliases') as FormArray;
  }

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit(): void {
    this.myData = [];
    this.inputText$ = this.searchText$.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      map(packageName =>
        packageName)
    );
    this.inputText$.subscribe(item => console.log(item));
  }

  ngSubmitForm(formDirective: any) {
    const newItemArray = this.myData;
    var itemData = new Item();
    const data = this.itemForm.value;
    console.log(data);
    itemData.id = data.id;
    itemData.nombre = data.nombre;
    itemData.edad = data.edad;
    newItemArray.push(itemData);
    this.snackBar.open('Item Agregado', '', {
      duration: 3000
    });
    formDirective.resetForm();
    this.itemForm.reset();
    this.aliases.clear();
    this.myData = [...newItemArray];
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control('', Validators.required));
  }

  removeAlias(id: any) {
    this.aliases.removeAt(id);
  }

  search(value: string) {
    this.searchText$.next(value);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
