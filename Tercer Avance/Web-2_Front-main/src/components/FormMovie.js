import useDashboard from "../hooks/useDashboard";
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import ObtenerGeneros from "./ObtenerGeneros";

const FormMovie = () => {
    const [id,
        setId] = useState(null);
    const [titulo,
        setTitulo] = useState('');
    const [sinopsis,
        setSinopsis] = useState('');
    const [añoEstreno,
        setAñoEstreno] = useState('');
    const [genero,
        setGenero] = useState('');
    const [director,
        setDirector] = useState('');
    const [actor,
        setActor] = useState('');
    const [clasificacion,
        setClasificacion] = useState('');
    const [calificacion,
        setCalificacion] = useState('');
    const [duracion,
        setDuracion] = useState('');
    const [poster,
        setPoster] = useState('');
    const [FotoPeli,
        setFotoPeli] = useState('');
    const [trailer,
        setTrailer] = useState('');
    const [compra,
        setCompra] = useState('');
    const [renta,
        setRenta] = useState('');
    const [plataforma,
        setPlataforma] = useState('');

    const navigate = useNavigate();

    const {mostrarAlerta, alerta, nuevaPelicula, peliculaID} = useDashboard();

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            console.log('Editando...');
            setId(peliculaID._id);
            setTitulo(peliculaID.titulo);
            setSinopsis(peliculaID.sinopsis);
            setAñoEstreno(peliculaID.añoEstreno);
            setGenero(peliculaID.genero);
            setDirector(peliculaID.director);
            setActor(peliculaID.actores);
            setClasificacion(peliculaID.clasificacion);
            setCalificacion(peliculaID.calificacion);
            setDuracion(peliculaID.duracion);
            setPoster(peliculaID.poster);
            setFotoPeli(peliculaID.FotoPeli);
            setTrailer(peliculaID.trailer);
            setCompra(peliculaID.compra);
            setRenta(peliculaID.renta);
            setPlataforma(peliculaID.plataforma);
        } else {

            setTitulo('')
            setSinopsis('')
            setAñoEstreno('')
            setGenero('')
            setClasificacion('')
            setCalificacion('')
            setDuracion('')
            setPoster('')
            setFotoPeli('')
            setTrailer('')
            setActor('')
            setDirector('')
            setCompra('')
            setRenta('')
            setPlataforma('')
        }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault();

        if ([
            titulo,
            sinopsis,
            añoEstreno,
            genero,
            clasificacion,
            calificacion,
            duracion,
            poster,
            FotoPeli,
            trailer,
            director,
            actor,
            compra,
            renta,
            plataforma
        ].includes('')) {
            mostrarAlerta({msg: 'Todos los campos son obligatorios.', error: true})

            return
        } else {
            nuevaPelicula({
                titulo,
                sinopsis,
                añoEstreno,
                genero,
                clasificacion,
                calificacion,
                duracion,
                poster,
                FotoPeli,
                trailer,
                director,
                actor,
                compra,
                renta,
                plataforma
            });
            mostrarAlerta({msg: 'Cambios Realizados', error: false})

            setTitulo('')
            setSinopsis('')
            setAñoEstreno('')
            setGenero('')
            setClasificacion('')
            setCalificacion('')
            setDuracion('')
            setPoster('')
            setFotoPeli('')
            setTrailer('')
            setActor('')
            setDirector('')
            setCompra('')
            setRenta('')
            setPlataforma('')
        }
    };

    const {msg} = alerta;

    return (

        <form onSubmit={handleSubmit}>
            <br></br>
            <div>
                {msg && <Alert
                    variant={`${alerta.error
                    ? 'danger'
                    : 'success'}`}>
                    <Alert.Heading>{alert.msg}</Alert.Heading>
                </Alert>}
            </div>

            <input
                name="titulo"
                id="titulo"
                type="text"
                placeholder="Título/Nombre"
                className="inputLarge"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}/>

            <textarea
                name="sinopsis"
                id="sinopsis"
                type="text"
                placeholder="Sinopsis"
                className="inputLarge2"
                value={sinopsis}
                onChange=
                {e => setSinopsis(e.target.value)}/>

            <input
                name="duracion"
                type="text"
                placeholder="Duracion"
                className="inputSmall"
                value={duracion}
                onChange={e => setDuracion(e.target.value)}/>

            <input
                name="añoEstreno"
                type="text"
                placeholder="Año de Lanzamiento"
                className="inputSmall"
                value={añoEstreno}
                onChange={e => setAñoEstreno(e.target.value)}/>

            <input
                name="precioCompra"
                type="number"
                placeholder="Precio de Compra"
                className="inputSmall"
                value={compra}
                onChange={e => setCompra(e.target.value)}/>

            <input
                name="precioRenta"
                type="number"
                placeholder="Precio de Renta"
                className="inputSmall"
                value={renta}
                onChange={e => setRenta(e.target.value)}/>

            <hr className="separador"/>

            <select name="genero" className="inputLarge" placeholder="Genero">
                <option>Genero</option>
            </select>

            <select name="actor" className="inputLarge" placeholder="Actor/Actriz">
                <option>Actor/Actriz</option>

            </select>
            <select name="director" className="inputLarge" placeholder="Director">
                <option>Director</option>
            </select>

            <select name="plataforma" className="inputLarge" placeholder="plataforma">
                <option>Plataforma</option>
            </select>

            <input
                name="clasificacion"
                type="text"
                placeholder="Clasificación"
                className="inputSmall"
                value={clasificacion}
                onChange={e => setClasificacion(e.target.value)}/>

            <input
                name="calificacion"
                type="text"
                placeholder="Calificación"
                className="inputSmall"
                value={calificacion}
                onChange={e => setCalificacion(e.target.value)}/>

            <hr className="separador"/>

            <div>
                <div>
                <label>Poster:</label>
                <input type="file" className="inputFile"/>
                </div>

                <div>
                <label>Foto:</label>
                <input type="file" className="inputFile"/>
                </div>
                
                <div>
                <label>Trailer:</label>
                <input type="file" className="inputFile"/>
                </div>
            </div>

            <input
                name="registrarse"
                id="registrarse"
                type="submit"
                className="buttonA"
                value={'Agregar'}></input>
        </form>
    )

}

export default FormMovie