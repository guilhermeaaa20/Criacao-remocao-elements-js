//Atividades — Criação e Remoção de Elementos (JavaScript DOM)
//Atividade 1:
let novop = document.createElement("p");
novop.innerHTML = "Elemento criado dinamicamente com JavaScript.";
let parente = document.getElementById("div1");
parente.appendChild(novop);

//Atividade 2:
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
p1.innerHTML = "paragrafo um";
p2.innerHTML = "paragrafo dois";
p3.innerHTML = "paragrafo três";
parente = document.getElementById("div2");
parente.appendChild(p1);
parente.appendChild(p2);
parente.appendChild(p3);
 
//Atividade 3:
let l1 = document.createElement("li");
let l2 = document.createElement("li");
let l3 = document.createElement("li");
l1.innerHTML = "banana";
l2.innerHTML = "maçâ";
l3.innerHTML = "abacate";
parente = document.getElementById("lista");
parente.append(l1, l2, l3);

//Atividade 4:
let l4 = document.createElement("li");
let l5 = document.createElement("li");
l4.innerHTML = "morango";
l5.innerHTML = "uva";
parente.append(l4, l5);

//Atividade 5: remover apenas o ultimo paragrafo
let p4 = document.createElement("p");
let p5 = document.createElement("p");
p4.innerHTML = "Paragrafo que fica";
p5.innerHTML = "Paragrafo que some";
parente = document.getElementById("div3");
parente.append(p4, p5);
parente.removeChild(p5);

//Atividade 6: remover o primeiro paragrafo numa div de 3 paragrafos
let p6 = document.createElement("p");
let p7 = document.createElement("p");
let p8 = document.createElement("p");
p6.innerHTML = ("A");
p7.innerHTML = ("B");
p8.innerHTML = ("C");
parente = document.getElementById("div4");
parente.append(p6, p7 ,p8);
parente.removeChild(p6);

//Atividade 7:
let l6 = document.createElement("li");
let l7 = document.createElement("li");
let l8 = document.createElement("li");
l6.innerHTML = "Cadeira";
l7.innerHTML = "Mesa";
l8.innerHTML = "Lampião";
parente = document.getElementById("lista2");
parente.append(l6, l7, l8);
parente.removeChild(l8);

//Atividade 8:
let p9 = document.createElement("p");
let p10 = document.createElement("p");
let p11 = document.createElement("p");
p9.innerHTML = "inicio";
p10.innerHTML = "meio";
p11.innerHTML = "fim";
parente = document.getElementById("div5");
parente.append(p9, p10, p11);
parente.removeChild(p10);

//Atividade 9:
let quad1 = document.createElement("div");
let quad2 = document.createElement("div");
let quad3 = document.createElement("div");
let quad4 = document.createElement("div");
let quad5 = document.createElement("div");
quad1.innerHTML = "Quadrado 1";
quad1.style.backgroundColor = "red";
quad2.innerHTML = "Quadrado 2";
quad2.style.backgroundColor = "yellow";
quad3.innerHTML = "Quadrado 3";
quad3.style.backgroundColor = "green";
quad4.innerHTML = "Quadrado 4";
quad4.style.backgroundColor = "blue";
quad5.innerHTML = "Quadrado 5";
quad5.style.backgroundColor = "purple";
parente = document.getElementById("quadradao");
parente.append(quad1, quad2, quad3, quad4, quad5);

[quad1, quad2, quad3, quad4, quad5].forEach(quadrado =>{
    quadrado.style.padding = "10px";
    quadrado.style.margin = "10px";
});

//eu utilizei IA para fazer essa parte, pois estava com duvidas. (mas entendi)
setTimeout(() => {
    for (let i = quadradao.children.length -1; i >=0; i--) {
        quadradao.removeChild(quadradao.children[i]);
    }
}, 2000);

//atividade 10:
let titulo = document.createElement("h2");
let p12 = document.createElement("p");
titulo.innerHTML = "Título que sumirá";
p12.innerHTML = "paragrafo que ficará";
parente = document.getElementById("divazia");
parente.append(titulo, p12);
parente.removeChild(titulo);


