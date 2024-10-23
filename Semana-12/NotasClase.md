## Frontentd

### Regitrar Peliculas
**useForm**: es un Hook que provee react para generar formularios. El cual desestructuramos en 3 variables
    - register: Lo utilizo en cada input para registrar los valores
        --> Etiqueta input con register:
         input type="text" className="form-control" id="titulo"  {...register("titulo", { required: 'Este campo es requerido' })} />
        --> Otras posibles validaciones:
            {...register("duracion", {
                        valueAsNumber: true,
                        min: { value: 0, message: `Solo valores positivos` },
                        pattern: {
                            value: /^(0|[1-9]\d*)(\.\d+)?$/,
                            message: `Ingrese solo números enteros positivos`
                        }
                    })}

    - handleSubmit: Se utiliza para para definir la etiqueta del formulario, defino la accion que se realiza al apretar el boton de tipo submit (boton registrar)
        --> <form onSubmit={handleSubmit(onSubmit)}>

    - formState: { errors }: Utilizo errors cada vez que tengo un register, para manejar posibles errores y mostrarlos
        --> {errors.titulo && <Alert key='danger' variant='danger'>
                        {errors.titulo.message}
                    </Alert>}

**useNavigate**: Te redirecciona a otra ruta declarada para el router, en este caso las rutas estan declaradas en App.js