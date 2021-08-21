document.body.onload = hidenElement;

function adcElemento() {

    // ArrayList
    var tasks = [];

    // Pega valor do Input
    var campo = document.querySelector('#inputText').value;



    if (campo !== '') {

        // Pegando o a UL list1 no HTML
        var ul = document.querySelector('#list1');

        // Criando elementos
        var li = document.createElement('li');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var input = document.createElement('input');
        var label = document.createElement('label');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var button3 = document.createElement('button');

        // Adicionando as classes
        div1.classList.add("checkTask");
        div2.classList.add("textTask");
        div3.classList.add("actionsTask");
        li.classList.add("li");

        // Alterando o Type do Input
        input.setAttribute('type', 'checkbox');

        // Criando o nó com o valor do Input
        var value2 = document.createTextNode(campo);
        var value4 = document.createTextNode(label);

        // Adicionando os nós nas divs
        div1.appendChild(input);
        // div2.appendChild(value2);
        // div3.appendChild(value3);


        // Adicionando os nós aos elementos
        // ul.appendChild(li);
        
        li.appendChild(div1)
        li.appendChild(div2);
        li.appendChild(div3);

        div2.appendChild(label);
        label.appendChild(value2);

        // tasks.push(li);

        
        tasks.push(ul.appendChild(li));

        // for(task in tasks.reverse()){
            
           
        // }

        // for (var i=0; i<=1; i++){
            
            
        //     console.table(tasks);
        // }

        for (task in tasks) {
            ul.appendChild(tasks[task]);
        }
        
        console.log(tasks);

        
    }



    // Imprimindo no Console
    // console.log('valor: ',campo);
    // console.log(ul);
    // console.log('Retornando a Li na lista: ', ul);
}

function hidenElement() {
    var campo = document.querySelector('#inputText').value;
    const pai = document.getElementById("list1");
    const filho = pai.querySelector("li");
    if (filho !== null) {
        console.log("Existe");
        if (campo !== null) {
            var teste = document.getElementById("teste").style.display = "none";
        }
        console.log(teste);
    } else {
        console.log("Não existe");
    }
}




 