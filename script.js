var list = [];

function CriaElementos() {

    document.getElementById('btnTask').addEventListener('click', function () {


        // chamando a tag <ul> para adicionar as <li>'s 
        var ul = document.getElementById('list1');

        // chamando o campo de texto <input> e pegando o valor digitado
        var texto = document.getElementById('inputText').value;

        var li = document.createElement('li');

        var qtd = document.getElementById('qtd');



        // var count = document.getElementsByClassName('countTasks');
        var count = document.getElementById('test');

        //criando elementos <tags>

        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var input = document.createElement('input');
        var label = document.createElement('label');
        var button1 = document.createElement('button');
        var button2 = document.createElement('button');
        var button3 = document.createElement('button');
        var i1 = document.createElement('i');
        var i2 = document.createElement('i');
        var i3 = document.createElement('i');

        // adicionando as classes aos elementos
        div1.classList.add('checkTask');
        div2.classList.add('textTask');
        div3.classList.add('actionsTask');

        i1.classList.add('fas', 'fa-check');
        i2.classList.add('fas', 'fa-edit');
        i3.classList.add('fas', 'fa-trash-alt');


        input.setAttribute('type', 'checkbox');

        // adicionando o texto dentro da label
        label.innerHTML = texto;

        // adicionando itens dentro das divs
        div1.appendChild(input);
        div2.appendChild(label);
        div3.appendChild(button1);
        div3.appendChild(button2);
        div3.appendChild(button3);

        // adicionando icons dentro dos buttons
        button1.appendChild(i1);
        button2.appendChild(i2);
        button3.appendChild(i3);

        // adicionando as divs dentro de <li>
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);

        // adicionando a <li> dentro de <ul>
        // ul.appendChild(li);        

        if (texto != '') {
            list.push(li);
            count.innerHTML = list.length;
            qtd.innerHTML = 'Qtd ' + list.length;
            var items = document.getElementById('notItem').style.display = "none";
            console.log('teste: ' + items)
        }

        for (c in list) {
            ul.appendChild(list[c]);
        }


        // console.log(ul);
        console.log(list);
    });
}

CriaElementos();