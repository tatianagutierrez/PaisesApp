import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: ``
})
export class PaisInputComponent implements OnInit{
  
  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

    // Se dispara solo una vez, cuando el componente esta creado
    ngOnInit(): void {
      this.debouncer
        .pipe(debounceTime(300))
        .subscribe(valor => {
          this.onDebounce.emit(valor);
        })
    }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
