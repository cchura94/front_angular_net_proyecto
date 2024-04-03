import { Component, ViewChild, inject } from '@angular/core';
import { LibroService } from '../../../core/services/libro.service';
import { Libro } from '../../../core/interfaces/libro';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogLibroComponent } from './dialog-nuevo-libro/dialog-libro.component';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss'
})
export class LibroComponent {
  // libroService= inject(LibroService)
  
  displayedColumns: string[] = ['id', 'title', 'author','price', 'ordered', 'bookCategoryId'];
  libros: Libro[]=[];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private _libroService: LibroService, public dialog:MatDialog){
    this.listarProductos()
  }

  listarProductos(){
    this._libroService.funListar().subscribe(
      (res: Libro[]) => {
        this.libros = res
        this.dataSource = new MatTableDataSource<Libro>(this.libros);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  openDialogLibro(){
    const dialogRef = this.dialog.open(DialogLibroComponent, {
      width: '250px'
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("Mostrando datos desde el componente padre: ", result)
      }else{
        console.log('El dialog ha sido cerrado');
      }
    })
  }

}
