function principal () {
    let productos = [
        {
            id: 1,
            nombre: 'Notebook Gamer ASUS',
            precio: 1799,
            stock: 10,
            categoria: 'computacion'
        },
        {
            id: 2,
            nombre: 'Mouse Logitech',
            precio: 69,
            stock: 20,
            categoria: 'accesorios'
        },
        {
            id: 3,
            nombre: 'Teclado ASUS',
            precio: 129,
            stock: 5,
            categoria: 'accesorios'
        },
        {
            id: 4,
            nombre: 'Monitor 27\" Samsung',
            precio: 1299,
            stock: 8,
            categoria: 'computacion'
        },
        {
            id: 5,
            nombre: 'Headset Oculus Rift',
            precio: 499,
            stock: 15,
            categoria: 'reproductores'
        },
        {
            id: 6,
            nombre: 'Smartphone Samsung Galaxy',
            precio: 899,
            stock: 12,
            categoria: 'celulares'
        },
        {
            id: 7,
            nombre: 'Smartwatch Apple Watch',
            precio: 249,
            stock: 25,
            categoria: 'reproductores'
        },
        {
            id: 8,
            nombre: 'Disco Duro SSD 250GB',
            precio: 149,
            stock: 15,
            categoria: 'accesorios'
        },
        {
            id: 9,
            nombre: 'Adaptador USB Type-C',
            precio: 39,
            stock: 30,
            categoria: 'accesorios'
        },
        {
            id: 10,
            nombre: 'Camara IP',
            precio: 199,
            stock: 20,
            categoria: 'reproductores'
        },
        {
            id: 11,
            nombre: 'Iphone 15 Pro Max',
            precio: 1369,
            stock: 12,
            categoria: 'celulares'
        }
    ]


    let categorias = listaCategorias(productos).join("\n");
    let carrito = [];
    let opcion = mensaje("Ingrese \n 1 - Agregar producto al carrito \n 2 - Filtrar categorías \n 3 - Finalizar compra \n 0 - Salir");
    while (opcion !== 0) {
        if (opcion === 0) {
            alert("¡Muchas gracias por su visita!");
        } 
        else if (opcion === 1) {
            let idProducto = mensaje("Ingrese el ID del producto \n" + listaProductos(productos));
            let producto = productos.find(p => p.id === idProducto);
            if (producto && producto.stock > 0) {
                carrito.push(producto);
                alert(`Producto agregado al carrito: ${producto.nombre}`);
            }
            else {
                alert("No hay stock disponible o el producto no existe");
            }
        }
        else if (opcion === 2) {
            let nombreCategoria = prompt("Ingrese la categoría para filtrar \n" + categorias).toLowerCase();
            let productosFiltrados = productoCategorias(productos, "categoria", nombreCategoria);
            alert(`Productos de la categoría ${nombreCategoria}: \n ${listaProductos(productosFiltrados)}`);
        }
        else if (opcion === 3) {
            let total = carrito.reduce((total, producto) => total + producto.precio, 0);
            alert(` Su compra ha finalizado. ¡Muchas gracias! \n Total de la compra: $${total}`);
        }
        else {
            alert("Opción inválida");
        }
        opcion = mensaje("Ingrese \n 1 - Agregar producto al carrito \n 2 - Filtrar categorías \n 3 - Finalizar compra \n 0 - Salir");
    }
}

principal();

function listaProductos (productos){
    return productos.map(producto => "ID: " + producto.id + " - " + producto.nombre).join("\n");
}


function mensaje (alerta) {
   return Number(prompt(alerta));
}

function listaCategorias (productos) {
    let categorias = [];
    productos.forEach(producto => {
        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria);
        }
    });
    return categorias;
}

function productoCategorias (productos, nombrePropiedad, valorPropiedad) {
    return productos.filter(producto => producto[nombrePropiedad] === valorPropiedad);
} 
