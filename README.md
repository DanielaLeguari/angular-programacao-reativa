# Projeto Buscante

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve --o`

## Padrão do projeto

- A divisão do conteúdo: `Componentes de apresentação` (mais simples, que não possuem comportamento) e `componentes contêiner ou inteligentes` (que detêm informações e as enviam para outros componentes). Em inglês, chamamos ambos os tipos de dumb components e smart components, respectivamente.

## API

- Google Books APIs

## O que é RxJS?

- Se trata de uma biblioteca para construção de programas assíncronos, ou baseados em eventos. Ela utiliza uma coleção de Observables.

- No RxJS temos dois conceitos essenciais:

1. Observable, o qual representa a ideia de uma coleção de valores ou eventos futuros;
2. Observer, o qual representa a ideia de uma coleção de callbacks. Ele consegue ouvir os valores entregues pelo Observable.

- O padrão observer é a base da programação orientada a eventos. Outro nome para esse padrão é Pub/Sub, abreviação de publication / subscription ("publicação" / "assinatura").

## Operadores RxJS

- Pipe- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

- Tap - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

- Map - Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado.

## Pipes no Angular |

- São funções simples que recebem um valor de entrada e o retornam modificado. Essa transformação acontece somente a nível de template.
- Essas modificações são tão comuns que já existem diversos Pipes prontos para utilizarmos, como por exemplo o DatePipe que formata datas, o UpperCasePipe que transforma todo o texto em letras maiúsculas e LoweCasePipe em minúsculas, além de outros.

- `DatePipe`: formata um valor de data de acordo com as regras de localidade.
- `UpperCasePipe`: transforma o texto em letras maiúsculas.
- `LowerCasePipe`: transforma o texto em letras minúsculas.
- `CurrencyPipe`: transforma um número em uma string de moeda, formatada de acordo com as regras de localidade.
- `DecimalPipe`: transforma um número em uma string com um ponto decimal, formatado de acordo com as regras de localidade.
- `PercentPipe`: transforma um número em uma string de porcentagem, formatada de acordo com as regras de localidade.


## Mais operadores RXJS

- switchMap - Operador de Transformação. Cancela requisições de observables anteriores, emitindo valores apenas do Observable projetado mais recentemente.

- filter - Operador de filtragem. Filtra os itens emitidos pelo Observable de origem, permitindo apenas aqueles que satisfaçam uma condição especificada.

- debounceTime - Operador de filtragem. Retorna um Observable que atrasa as emissões do Observable de origem pelo tempo especificado.

- distinctUntilChanged - Operador de filtragem. Retorna um Observable que emite todos os valores enviados pelo observable de origem se forem distintos em comparação com o último valor emitido pelo observable de resultado.


## Tratamento de Erros

- O catchError() não emite valores, somente captura o erro e nos inscreve em outro Observable — um que possua alguma mensagem de erro, por exemplo. O throwError(), por sua vez, retorna um novo Observable que emite imediatamente o erro e encerra o seu ciclo de vida.
