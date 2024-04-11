import { Component, ViewChild, inject } from '@angular/core';
import { LibroService } from '../../../core/services/libro.service';
import { Libro } from '../../../core/interfaces/libro';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogLibroComponent } from './dialog-nuevo-libro/dialog-libro.component';

import Swal from 'sweetalert2'
import { DialogPrestarComponent } from './dialog-prestar/dialog-prestar.component';
import { Icon } from '../../../core/enums/icons';
import { HttpErrorResponse } from '@angular/common/http';
import * as XLSX from "xlsx"

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss'
})
export class LibroComponent {
  // libroService= inject(LibroService)
  
  displayedColumns: string[] = ['id', 'title', 'author','price', 'ordered', 'bookCategoryId', 'gestion'];
  libros: Libro[]=[];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private _libroService: LibroService, public dialog:MatDialog){
    this.listarLibros()
  }

  listarLibros(){
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
      width: '350px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        let objLibro = {
          title: result.title,
          author: result.author,
          price: result.price,
          bookCategoryId: result.bookCategoryId
        }
        this._libroService.funGuardar(objLibro).subscribe(
          res => {
            Swal.fire({
              title: 'Registro Correcto!',
              text: 'ok para continuar',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            })
            this.listarLibros();
          },
          error => {
            Swal.fire({
              title: 'Error!',
              text: 'Ocurrió un error al intentar registrar el Libro',
              icon: 'error',
              confirmButtonText: 'cerrar'
            })
          }
        )
      }else{
        console.log('El dialog ha sido cerrado');
      }
    })
  }

  openDialogPrestarLibro(libro: Libro){
    const dialogRef = this.dialog.open(DialogPrestarComponent, {
      width: '250px'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result){
        let data = {
          userId: result.user.id,
          bookId: libro.id
        }
        this._libroService.funPrestarLibro(data).subscribe(
          res => {

            if(res == "CANNOT ORDER"){
              this.smgAlert('No se puede prestar!','ok para continuar', Icon.error)

            }else{
              this.smgAlert('Registro Correcto!','ok para continuar', Icon.success)
            }
            this.listarLibros();
          },
          error => {
            this.smgAlert('Error!','Ocurrió un error al intentar registrar el Libro', Icon.error)
          }
        )
      }else{
        console.log('El dialog ha sido cerrado');
      }
    })
  }


  smgAlert(title:string, text:string, icon:any) {
    
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'cerrar'
    })
  }

  exportarExcel(){
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.libros);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Hoja1');

    XLSX.writeFile(wb, 'datos-libros.xlsx');
  }

  cargaArchivo(evt: any) {
    const target: DataTransfer = <DataTransfer> (evt.target);
    if(target.files.length !== 1) throw new Error("No se puede cargar multiples archivos");

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.libros = (XLSX.utils.sheet_to_json(ws, {header: 1}));

      console.log(this.libros);
      
    };
    reader.readAsBinaryString(target.files[0]);
  }

}
