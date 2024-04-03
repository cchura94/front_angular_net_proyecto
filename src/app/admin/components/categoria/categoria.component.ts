import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';
import { Categoria } from '../../../core/interfaces/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit{

  displayedColumns: string[] = ['id', 'category', 'subCategory'];

  categoriaService = inject(CategoriaService)
  categorias: Categoria[] = [];

  formData:Categoria = {
    category: '',
    subCategory: ''
  }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
    this.categoriaService.funListar().subscribe(
      (res: Categoria[]) => { 

        this.categorias = res;
        console.log(res);

      },
      (error) => {}
    );
  }

  guardarCategoria(){
    if(this.formData.id){
      console.log(this.formData)
      this.categoriaService.funModificar(this.formData.id, this.formData).subscribe(
        (res) => { 
          console.log(res)
          this.listarCategorias()
         },
        (error) => { console.log(error) }
      )
      
    }else{
      console.log(this.formData)
      this.categoriaService.funGuardar(this.formData).subscribe(
        (res) => { 
          console.log(res)
          this.listarCategorias()
         },
        (error) => { console.log(error) }
      )

    }
    this.formData = {category: '', subCategory: ''}
  }

  editar(data: Categoria){
    this.formData = data
  }
}
