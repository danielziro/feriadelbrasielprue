import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateClothes() {
  const [content, setContent] = useState({
    nombreProducto: '',
    precio: '',
    referencia: '',
    talla: '',
    color: '',
    categoria: '',
    editing: false,
    _id: '',
    imagep:null
  });
  
  const params = useParams();
  const navigate = useNavigate();


  useEffect(() => {

    if (params.id) {

      const fetchContent = async () => {
        const { data } = await axios.get('http://localhost:3500/api/clothes/' + params.id)

        const contentClothes = data.clothes
        console.log(contentClothes)
        setContent(
          {
            ...content, nombreProducto: contentClothes.nombreProducto, precio: contentClothes.precio, referencia: contentClothes.referencia, talla: contentClothes.talla
            , color: contentClothes.color, categoria: contentClothes.categoria, editing: true, _id: contentClothes._id, image: contentClothes.imagep
          }
        )
      };

      fetchContent();

    }
  }, []);



  const onSubmit = async (e) => {
    e.preventDefault();
    if (content.editing) {
      const updatedClothe = {
        nombreProducto: content.nombreProducto,
        precio: content.precio,
        referencia: content.referencia,
        talla: content.talla,
        color: content.color,
        categoria: content.categoria,
        image: content.imagep
      };
      
      await axios.put(
        "http://localhost:3500/api/clothes/" + content._id,
        updatedClothe
      );
    } else {
      try {
       
        
        const newClothe = {
          nombreProducto: content.nombreProducto,
          precio: content.precio,
          referencia: content.referencia,
          talla: content.talla,
          color: content.color,
          categoria: content.categoria,
          image: content.imagep
        };
        console.log(newClothe)
        const form  = new FormData()
        for(let key in content){
          form.append(key,content[key])
        }
        const res = await axios.post("http://localhost:3500/api/clothes", form,{
          headers:{
            "Content-Type":"multipart/from-data"
          }

        });
        console.log(res);
      } catch (error) {
        console.log(error)
      }
      
    }
    navigate("/");
  };

  const onInputChange = ({ target: { name, value } }) =>
    setContent({
      ...content,
      [name]: value,
    });





  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body col-med-3">
        <h4>Informacion Prendas</h4>

        <div className="form-group">

          <input
            type="text"
            className='form-control'
            placeholder="Nombre producto"
            name="nombreProducto"
            value={content.nombreProducto}
            onChange={onInputChange}
            required
          />

        </div>

        <div className="form-group">

          <input
            type="text"
            className='form-control'
            placeholder="Precio"
            name="precio"
            value={content.precio}
            required
            onChange={onInputChange}
          />

        </div>

        <div className="form-group">
          <input
            type="text"
            className='form-control'
            placeholder="Referencia"
            name="referencia"
            value={content.referencia}
            required
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className='form-control'
            placeholder="Talla"
            name="talla"
            value={content.talla}
            required
            onChange={onInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className='form-control'
            placeholder="Color"
            name="color"
            value={content.color}
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <div className="form-group">
            <input
              type="text"
              className='form-control'
              placeholder="Categoria"
              name="categoria"
              value={content.categoria}
              required
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input 
          type="file" 
          name="imagep" 
          onChange={(e) => {
            console.log(e.target.files[0])
            setContent({...content,imagep: e.target.files[0]});
          }}
          />
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>

          </form>
        </div>

      </div>

    </div>
  );
}

export default CreateClothes;
