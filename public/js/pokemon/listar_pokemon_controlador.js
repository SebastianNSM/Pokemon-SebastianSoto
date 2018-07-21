'use strict';

function mostrarListaCarreras(paBuscar) {
    let listaPokemon = obtenerListaPokemon();

    let tbody = document.querySelector('#tblPokemon tbody');
    tbody.innerHTML = '';
    if (paBuscar != undefined) {
        for (let i = 0; i < listaPokemon.length; i++) {
            if (listaPokemon[i]['nombre_carrera'].toLowerCase().includes(paBuscar.toLowerCase())) {
                let fila = tbody.insertRow();

                let celdaNombre = fila.insertCell();
                let celdaGrado = fila.insertCell();
                let celdaCodigo = fila.insertCell();
                let celdaCreditos = fila.insertCell();
                let celdaFechaCreacion = fila.insertCell();
                let celdaSede = fila.insertCell();
                let celdaPeriodo = fila.insertCell();
                let celdaEstado = fila.insertCell();
                let celdaOpciones = fila.insertCell();

                celdaNombre.innerHTML = listaPokemon[i]['nombre_carrera'];
                celdaGrado.innerHTML = listaPokemon[i]['grado_carrera'];
                celdaCodigo.innerHTML = listaPokemon[i]['codigo_carrera'];
                celdaCreditos.innerHTML = listaPokemon[i]['creditos_carrera'];
                // Fecha de creacion

                // Esto separa la informacion de la fecha
                let dFecha = new Date(listaPokemon[i]['fecha_carrera']);
                let nDia = dFecha.getUTCDate();
                let nMes = dFecha.getUTCMonth() + 1;
                let nAnno = dFecha.getUTCFullYear();
                // Esto despliega la informacion separada para darle formato
                celdaFechaCreacion.innerHTML = nDia + '/' + nMes + '/' + nAnno;;

                // Fecha de creacion
                celdaSede.innerHTML = listaPokemon[i]['sede_carrera'];
                celdaPeriodo.innerHTML = listaPokemon[i]['periodo_carrera'];
                celdaEstado.innerHTML = listaPokemon[i]['estado_carrera'];


                // Este es el boton de editar
                let botonEditar = document.createElement('a');
                botonEditar.href = '#'//En este espacio va el path del html de editar carrera
                botonEditar.classList.add('fas');
                botonEditar.classList.add('fa-cogs');

                celdaOpciones.appendChild(botonEditar);

                // Este es el boton de eliminar
                let botonEliminar = document.createElement('a');
                botonEliminar.href = '#'//Este espacio va el evento de eliminar carrera
                botonEliminar.classList.add('fas');
                botonEliminar.classList.add('fa-trash-alt');

                celdaOpciones.appendChild(botonEliminar);

                // Icono de editar: <i class="fas fa-cogs"></i>
                // Icono de eliminar: <i class="fas fa-trash-alt"></i>
            }
        }
    }