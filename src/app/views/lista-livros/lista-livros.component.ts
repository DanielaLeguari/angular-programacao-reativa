import { FormControl } from '@angular/forms';
import { Item } from './../../models/interfaces';
import { Component} from '@angular/core';
import { EMPTY, catchError, debounceTime, filter, map, switchMap, tap, throwError } from 'rxjs';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

 const PAUSA = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro = '';

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(PAUSA),
      filter((valorDigitado) => valorDigitado.length >= 3),
      // tap(()=> console.log('Fluxo inicial')),
      switchMap((valorDigitado) => this.service.buscarLivros(valorDigitado)),
       tap((retornoAPI)=> console.log(retornoAPI)),
      map((items) => this.livrosResultadoParaLivros(items),
      ),
      catchError(() => {
        this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação.'
        return EMPTY
        // console.log(erro)
        // return throwError(() => new Error())
      })
    )

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

}



