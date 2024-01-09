
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class ClothesList extends Component {
    
    
    state = {
        clothes: []
    } 
   

     componentDidMount() {
        
        this.getClothes();
    }

    getClothes = async () => {
        const res = await axios.get('http://localhost:3500/api/clothes')
        console.log("clothes",res.data)
        this.setState({
          clothes: res.data
        });
    }

    deleteClothes = async (Id) => {
        await axios.delete('http://localhost:3500/api/clothes/' + Id);
        this.getClothes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.clothes.map(clothe => (
                        <div className="col-md-4 p-2" key={clothe._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>imagen pronto</h5>
                                   
                                   
                                
                                </div>
                                
                                
                                <div className="card-body">
                                    <p> <img src=    {clothe.imagep} /></p>
                                    <p>
                                      Producto: {clothe.nombreProducto}
                                    </p>
                                    <p>
                                    precio: {clothe.precio}
                                    </p>
                                    <p>
                                    referencia: {clothe.referencia}
                                    </p>
                                    <p>
                                    talla: {clothe.talla}
                                    </p>
                                    <p>
                                      color:{clothe.color}
                                    </p>
                                    <p>
                                    categoria: {clothe.categoria}
                                    </p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={() => this.deleteClothes(clothe._id)}>
                                        Delete
                                    </button>
                                    <div>
                                     <Link className="btn btn-secondary"  to={"/edit/" + clothe._id}>
                                        
                                            Editar
                                    </Link>
                                </div>
                                
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}