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

                <p className="text-base inter md:text-lg">Desarrollador web Frontend - React.Js.
                Estoy en constante aprendizaje, realizando cursos y varios proyectos,
                enfocados en React, utilizando Hooks, contextAPI, Redux/thunk y saga, Next, Gatsby, NodeJs, Firebase
                entre otros. Los ultimos 10 años me estuve desempeñando como Analista Financiero.</p>

                <p className="py-2 text-base inter md:text-lg">Me gusta aprender cosas nuevas y me apasiona la tecnología. Mis principales intereses son realizar actividades y deportes al aire libre, inversiones y el desarrollo personal.</p>

          
                {/* <form
                    name="contact"
                    method="post"

                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    
                    className="p-2 mt-3 bg-gray-200 rounded-md shadow"
                    >

                    <label htmlFor="contacto" className="p-3 text-sm font-bold text-gray-700">Déjame un mensaje o consulta:</label>

                    <div className="flex p-2">

                        <input type="hidden" name="bot-field" /> <input type="hidden" name="contact" value="contact" />
                       
                        <textarea                       
                            name="contact"
                            className="flex-1 px-3 py-1 text-sm text-gray-700 border rounded shadow focus:outline-none"
                        ></textarea>
                        
                        <button
                             type="submit"
                            className="ml-4 transition duration-150 transform btn hover:scale-105"

                        >Enviar</button>
                    </div>


                </form> */}



                

                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className="flex p-4 mt-3 bg-gray-200 rounded-md shadow"

                >
              


                        <input type="hidden" name="bot-field" /> <input type="hidden" name="contact" value="contact" />

                        <textarea
                            name="contact"
                            placeholder="Déjame un mensaje o consulta"
                            className="flex-1 px-3 py-1 text-sm text-gray-700 border rounded shadow focus:outline-none"

                        ></textarea>
                        <button
                            type="submit"
                            className="ml-4 transition duration-150 transform btn hover:scale-105"
                        >Enviar</button>


                </form>

            </div>

          

         
      
        </>
     );
}
 
export default Inicio;