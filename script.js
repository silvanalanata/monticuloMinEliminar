function eliminar (heap){

    let primerValor=heap[1];
    let ultimoValor = heap[heap.length-1];
    let largo=heap.length-1 ;
    heap[1]=ultimoValor;   
    heap.pop(largo);

    let index_padre = 1;
    let child1_menor = index_padre * 2;
    let child2_mayor = index_padre * 2 + 1;

    while(heap[index_padre]>heap[child1_menor] || heap[index_padre]>heap[child2_mayor] || child2_mayor < heap.length ){
        let padre=heap[index_padre]
        if(heap[child1_menor]>heap[child2_mayor]){           
            heap[index_padre]=heap[child2_mayor];
            heap[child2_mayor]=padre;
            index_padre = child2_mayor ;  
        }
        else{
                heap[index_padre]=heap[child1_menor];
                heap[child1_menor]=padre;
                index_padre=child1_menor;
        }
            child1_menor = index_padre * 2;
            child2_mayor = index_padre * 2 + 1;
        }
    console.log(heap);
    return primerValor

    }

let salida1 = eliminar([undefined,3,12,8,17,13,15,10]);
console.log(salida1);
let salida2 = eliminar([undefined,8]);
console.log(salida2);