interface InterfaceGenerica<I> {
    removeItem(item: I)
}

class classeGenerica<T> implements InterfaceGenerica<T> {
    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if(index > -1)
        this.arr.splice(index, 1)
    }
}

let classeGenerica = new classeGenerica<number>();
classeGenerica.adicionaValor(1);
classeGenerica1.adicionaValor(2);