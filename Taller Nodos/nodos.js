// 1.	Según el siguiente código html, cree desde javascript una etiqueta h1 con el texto “my presentation” y ubicarla antes del div.

let div = document.querySelector("div");
let h1 = document.createElement("h1");
h1.textContent = "My Presentation";
document.body.insertBefore(h1, div);

// 2.	Con el código del ejercicio anterior, cree desde javascript una etiqueta p con el texto “my best friend is mickey” y ubicarla  después de la p que está dentro del div.



let p2 = document.createElement("p");
p2.textContent = "my best friend is Mickey";
let ps = document.querySelector("p");
ps.insertAdjacentElement("afterend", p2)



// 3.	Con el código anterior, desde javascript seleccione el título (etiqueta h1), y agregue un color a la letra, también seleccione la última p y póngale la letra en negrita y el color de fondo que desee. 

h1.style.color = "red";
p2.style.backgroundColor = "violet";
p2.style.fontWeight = "bold"



// 4.	Según el siguiente código html, desde javascript modifique la etiqueta ol por ul,(función replaceWith) agregue un atributo class con el nombre listado.

let ol = document.querySelector("ol");
let ul = document.createElement("ul");
ul.innerHTML = ol.innerHTML;

ul.classList.add("listado");
ol.replaceWith(ul);

// 5.	Utilizando el código anterior, cree un archivo de css, enlace con el HTML y después cree una clase en css con estilos para cambiar el color y cambiar la letra a cursiva, desde javascript agregale esa clase al elemento h2.

let h2s = document.querySelectorAll("h2");
h2s.forEach(h2 => h2.classList.add("cambiarH2"));


// 6.	Utilizando el código anterior, desde javascript agregue un ítem al listado que tenga como texto “Recoger a los niños” y ubiquelo después del item “preparar almuerzo”; cree en css 2 clases, una con nombre cumplido y la otra con el nombre fallido, en cumplido agregue como estilo color de fondo verde y en fallido color de fondo rojo, agregue la clase cumplido a los ítems ”desayunar”, “hacer almuerzo” y “recoger a los niños”, y la clase fallido agregarla a los ítems “ir al banco” y “recoger a los niños”, lo anterior debe hacerse desde javascript.




// 7.	según el siguiente código en HTML, desde javascript seleccionar las etiquetas p que tienen la clase ps y agregarles un color y un tamaño de letra.