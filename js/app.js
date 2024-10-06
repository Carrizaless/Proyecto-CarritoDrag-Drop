// Eventos del Drag and Drop

// Capturo todos los elementos que tengan class="article"
let artItems = document.getElementsByClassName("article");
let itemCap;
let precioStr;
let precio;
let precioNum;
let tagName;

let btnClose;
let text;

// Capturamos el valor de total para irle sumando
let sumTotal = document.querySelector("#subt2");

// Capturamos el elemento donde dejaremos caer los artículos
let containerDrop = document.querySelector(".drop");

containerDrop.addEventListener("dragover",e => (e.preventDefault()));
containerDrop.addEventListener("drop",soltarArt);

// Capturamos el flotante del carrito
let flotante = document.querySelector(".flotante");
// Capturamos el carrito
let carrito = document.querySelector(".carrito");

function soltarArt() {

    // Comprobamos y realizamos la sumatoria total
    if (sumTotal.textContent == "00.00$") {
            sumTotal.textContent = precioNum + "$";
            console.log(`Agregaste un artículo al carrito`);
    } else {
            sumTotal.textContent = sumTotal.textContent.slice(0,-1);
            sumTotal.textContent = Number(sumTotal.textContent) + precioNum + "$";
            console.log(`Agregaste un artículo al carrito`);        
    }

    // Aumentamos el flotante con cada elemento agregado y dando estilos
    if (flotante.textContent == "") {
        flotante.textContent = 1;
        flotante.style.position = 'absolute';
        flotante.style.top = '8px';  // Ajusta la posición del flotante
        flotante.style.right = '-1px';  // Ajusta la posición del flotante
        flotante.style.width = '30px';
        flotante.style.height = '30px';
        flotante.style.display = 'flex';
        flotante.style.justifyContent = 'center';
        flotante.style.alignItems = 'center';
        flotante.style.color = '#006f98';
        flotante.style.backgroundColor = 'rgb(255, 255, 255)';
        flotante.style.fontWeight = '600';
        flotante.style.borderRadius = '50%';
        flotante.style.border = '5px solid #2980b9';
        flotante.style.margin = '0';
        flotante.style.padding = '0'; 
        carrito.src = "/css/img/carrito.png"
    } else {
        flotante.textContent = Number(flotante.textContent) + 1;
    }

    // Función Crea y Agrega Tags
    function tag(nombreEtiqueta) {
        // Creamos tags por cada elemento agregado
        let tag = document.createElement("div");
        tag.classList.add("tag"); // Le damos una class al div

        let subtag = document.createElement("div");
        subtag.classList.add("subtag");

        btnClose = document.createElement("span");
        btnClose.classList.add("close-btn");
        btnClose.textContent = "X";

        text = document.createElement("span");
        text.classList.add("tag-text");

        switch (nombreEtiqueta) {
            case "Procesador Intel Core i9-13900K":
                text.textContent = "i9-13900K";    
                break;
            case "Tarjeta Gráfica NVIDIA RTX 4090":
                text.textContent = "NVIDIA RTX 4090";    
                break;        
            case "Placa Base ASUS ROG Strix Z790-E Gaming":
                text.textContent = "ASUS Z790-E";    
                break;
            case "Memoria RAM Corsair Vengeance DDR5 32GB":
                text.textContent = "Corsair DDR5 32GB";    
                break;
            case "Disco SSD Samsung 980 Pro 1TB":
                text.textContent = "Samsung 980 Pro 1TB";
                break;
            case "Fuente de Alimentación EVGA SuperNOVA 1000W":
                text.textContent = "EVGA 1000W";
                break;
            case "Refrigeración Líquida Corsair iCUE H150i Elite":
                text.textContent = "Corsair H150i Elite";
                break;
            case "Monitor LG UltraGear 27GL850":
                text.textContent = "LG 27GL850";
                break;
            case "Teclado Mecánico Razer BlackWidow V3":
                text.textContent = "Razer BlackWidow V3";
                break;
            case "Mouse Logitech G502 HERO":
                text.textContent = "Logitech G502 HERO";
                break;
            default:
                break;
        }

        // Agregamos los span como hijos del subtag
        subtag.appendChild(btnClose);
        subtag.appendChild(text);

        // Agregamos el div subtag al div tag
        tag.appendChild(subtag);

        // Agregar el tag completo al contenedorDrop
        containerDrop.appendChild(tag);
    }
    
    tag(tagName);

    btnClose.addEventListener("click",eliminarTag);
    text.addEventListener("click",eliminarTag);
    
};

function moviendoArt(e) {
    // la propiedad "target" que permite almacenar el obj que se esta moviendo 
    // En itemCap se guarda el elemento article
    itemCap = e.target;
    // Ahora en precio guardamos el valor del h3 dentro de article que es donde esta el precio
    precioStr = itemCap.querySelector("h3").textContent;
    // Se eliminan las primeras letras para después convertir a num
    precio = precioStr.slice(9); // Eliminamos los primeros 9 caracteres
    precioNum = Number(precio);
    tagName = itemCap.querySelector("h2").textContent;
};




for (let art of artItems) {
    art.addEventListener("dragstart",moviendoArt);
}



function eliminarTag(event) {

    // Seleccionamos el target para almacenar el obj seleccionado
    let cerrarTag = event.target;
    // Acá seleccionamos el tag padre con el class ".tag" y luego lo eliminamos
    let tag = cerrarTag.closest(".tag");
    tag.remove();


    // Restamos -1 al flotante del carrito
    flotante.textContent = Number(flotante.textContent) - 1;    

    if (Number(flotante.textContent) < 1) {
        flotante.textContent = ""
        flotante.style = "";
        carrito.src= "";
        console.log(`Eliminaste un artículo del carrito`);
    }


    // Disminuyendo el total
    switch (tag.textContent) {  
        case "Xi9-13900K":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 600);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        case "XNVIDIA RTX 4090":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 1600);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        case "XASUS Z790-E":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 500);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break; 
        case "XCorsair DDR5 32GB":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 250);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        case "XSamsung 980 Pro 1TB":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 150);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;                                   
        case "XEVGA 1000W":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 200);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        case "XCorsair H150i Elite":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 180);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        case "XLG 27GL850":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 400);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;           
        case "XRazer BlackWidow V3":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 140);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        case "XLogitech G502 HERO":
            sumTotal.textContent = sumTotal.textContent.slice(0, -1);
            sumTotal.textContent = Number(sumTotal.textContent - 80);
            sumTotal.textContent = sumTotal.textContent + "$";   
            console.log(sumTotal.textContent);
            break;
        default:
            break;
    }    
}; 

