import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const Inicio = () => {

    const {image}= useStaticQuery(graphql`
    query{
        image: file(relativePath:{eq: "yo2.jpg"}){
            sharp: childImageSharp{
                fluid(maxWidth:800, maxHeight:800){
                    ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)


    return ( 
        <>
          
            <Img
                tag="section" fluid={image.sharp.fluid} fadeIn="soft"
                className="imagen"
            />

            <div className="container max-w-2xl p-4 m-auto">

                <h1 className="mb-10 text-2xl font-bold lg:text-3xl">Hola, soy Héctor</h1>

                <p className="text-base inter md:text-lg">Desarrollador web Frontend.
                    Terminé mi carrera de Desarrollo Web 2020,
                    luego continué realizando cursos y varios proyectos,
                    enfocados en React, utilizando Hooks, Context, Redux, Next, Gatsby, NodeJs, Firebase
                    entre otros. Los últimos 10 años me estuve desempeñando como Analista Financiero.</p>

                <p className="py-2 text-base inter md:text-lg">Me gusta aprender cosas nuevas y me apasiona la tecnología. Mis principales intereses son realizar actividades y deportes al aire libre, inversiones y el desarrollo personal.</p>

                <p className="py-2 text-base md:text-lg">Actualmente estoy viviendo en Rosario, Argentina</p>


                <form
                    netlify
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="p-2 mt-3 bg-gray-200 rounded-md shadow">
                    <label htmlFor="contact" className="p-3 text-sm font-bold text-gray-700">Déjame un mensaje o consulta:</label>

                    <div className="flex p-2">
                        <textarea
                            id="contact"
                            name="message"
                            className="flex-1 px-3 py-1 text-sm text-gray-700 border rounded shadow focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="ml-4 transition duration-150 transform btn hover:scale-105"

                        >Enviar</button>
                    </div>


                </form>

            </div>

          

         
      
        </>
     );
}
 
export default Inicio;