import useDashboard from "../hooks/useDashboard";
import {useState, useEffect, Component} from "react";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import axios from "axios";



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
    const [Precio_Compra,
        setCompra] = useState('');
    const [Precio_Renta,
        setRenta] = useState('');
    const [plataforma,
        setPlataforma] = useState('');

    const [options, setOptions] = useState([]);
    const [optionsActor, setOptionsActor] = useState([]);
    const [optionsDirector, setOptionsDirector] = useState([]);

    const navigate = useNavigate();

    const {mostrarAlerta, alerta, nuevaPelicula, peliculaID} = useDashboard();

    const params = useParams();

    useEffect(() =>{
        const ObtenerGenero = async () =>{
            try {
                const token = localStorage.getItem('token');
                if(!token) return
        
                const config = {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
        
                    }
                }
                const {data} = await axios.get('http://localhost:4000/api/generos/',config);
                
                setOptions(data);
               
        
            } catch (error) {
                console.log(error);
            }
        }

        ObtenerGenero()
    }, []);

    useEffect(() =>{
        const ObtenerActor = async () =>{
            try {
                const token = localStorage.getItem('token');
                if(!token) return
        
                const config = {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
        
                    }
                }
                const {data} = await axios.get('http://localhost:4000/api/actores/',config);
                
                setOptionsActor(data);
               
        
            } catch (error) {
                console.log(error);
            }
        }

        ObtenerActor()
    }, []);

    useEffect(() =>{
        const ObtenerDirector = async () =>{
            try {
                const token = localStorage.getItem('token');
                if(!token) return
        
                const config = {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
        
                    }
                }
                const {data} = await axios.get('http://localhost:4000/api/directores/',config);
                
                setOptionsDirector(data);
               
        
            } catch (error) {
                console.log(error);
            }
        }

        ObtenerDirector()
    }, []);

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
            setCompra(peliculaID.Precio_Compra);
            setRenta(peliculaID.Precio_Renta);
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
            Precio_Compra,
            Precio_Renta,
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
                Precio_Compra,
                Precio_Renta,
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
                value={Precio_Compra}
                onChange={e => setCompra(e.target.value)}/>

            <input
                name="precioRenta"
                type="number"
                placeholder="Precio de Renta"
                className="inputSmall"
                value={Precio_Renta}
                onChange={e => setRenta(e.target.value)}/>

            <hr className="separador"/>

            <select name="genero" className="inputLarge" placeholder="Genero" onChange={e => setGenero(e.target.value)}>
                <option value="" disabled selected>Género</option>
              {
                options.map(option => (
                    <option key={option._id} value={option.value}>{option.nombre}</option>
                ))
              }
            </select>

            <select name="actor" className="inputLarge" placeholder="Actor/Actriz" onChange={e => setActor(e.target.value)}>
                <option value="" disabled selected>Actor/Actriz</option>
            {
                optionsActor.map(option => (
                    <option key={option._id} value={option.value}>{option.nombre} {option.apellido} </option>
                ))
              }
            </select>
            <select name="director" className="inputLarge" placeholder="Director" onChange={e => setDirector(e.target.value)}>
                <option value="" disabled selected>Director/a</option>
            {
                optionsDirector.map(option => (
                    <option key={option._id} value={option.value}>{option.nombre} {option.apellido} </option>
                ))
              }
            </select>

            <select name="plataforma" className="inputLarge" placeholder="plataforma" onChange={e => setPlataforma(e.target.value)}>
                <option value="" disabled selected>Plataforma</option>
                <option value="Netflix">Netflix</option>
                <option value="Disney+">Disney+</option>
                <option value="HBO Max">HBO Max</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Paramount+">Paramount+</option>
                <option value="Star+">Star+</option>
            </select>

            <select name="clasificacion" className="inputSmall" placeholder="clasificacion" onChange={e => setClasificacion(e.target.value)}>
                <option value="" disabled selected>Clasificación</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>

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
                    <input type="file" className="inputFile" value={poster} onChange={e => setPoster(e.target.value)}/>
                </div>

                <div>
                    <label>Foto:</label>
                    <input type="file" className="inputFile" value={FotoPeli} onChange={e => setFotoPeli(e.target.value)}/>
                </div>

                <div>
                    <label>Trailer:</label>
                    <input type="file" className="inputFile"value={trailer} onChange={e => setTrailer(e.target.value)}/>
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