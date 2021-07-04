import React from 'react';
import Image from 'gatsby-image'
import { Link } from 'gatsby';

const ProyectosPreview = ({proyecto}) => {

    const {titulo, descripcion, imagen, slug}= proyecto
    return (

        <div className="container mb-8 overflow-hidden transition duration-200 transform bg-gray-100 rounded-md shadow-lg hover:scale-105">

            <Link to={slug} target="_blank" rel="noopener">
                <Image
                    fluid={imagen.fluid}
                />
                <div className="p-4">
                    <p className="mb-2 font-bold">{titulo}</p>
                    <p className="text-gray-700">{descripcion}</p>
                </div>

            </Link>



        </div>

    );
}
 
export default ProyectosPreview;