import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import pdf from '../images/cv.pdf'


const Inicio = () => {

    const { image } = useStaticQuery(graphql`
    query{
        image: file(relativePath:{eq: "yo2.jpg"}){
            sharp: childImageSharp{
                fluid(maxWidth:400, maxHeight:400){
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
            <div className="container max-w-2xl m-auto pb-5 px-3">

                <h1 className="mb-3 text-2xl font-bold lg:text-3xl">Hola, soy Héctor</h1>
                <p className="text-base inter md:text-md"> <strong className="font-bold">Desarrollador web Frontend - ReactJs</strong>.
                    Estoy en constante aprendizaje, realizando cursos y varios proyectos,
                    enfocados en React, utilizando Hooks, contextAPI, Redux/thunk - saga, NextJS, Gatsby, Sass, Firebase
                    entre otros. Los ultimos 10 años me estuve desempeñando como Analista Financiero.</p>

                <p className="py-2 text-base inter md:text-md">Me gusta aprender cosas nuevas y me apasiona la tecnología. Mis principales intereses son realizar actividades y deportes al aire libre, inversiones y desarrollo personal.</p>

                <a href={pdf} download="HéctorAllende CV.pdf" className="flex justify-start my-2" target="_blank" rel="noopener noreferrer">
                    <button
                        type="submit"
                        className=" transition duration-150 transform btn hover:scale-105 "
                    >Descargar CV</button>
                </a>
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