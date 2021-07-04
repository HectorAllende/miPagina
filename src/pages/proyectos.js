import React from 'react';
import ProyectosPreview from '../components/proyectosPreview'
import Layout from '../components/layout'
import useProyectos from '../hooks/useProyectos';

const Proyectos = () => {

  const proyectos = useProyectos()
    return (  
        <Layout>
{/* 
            <h1 className="flex items-center justify-center flex-1">Proyectos</h1> */}

            <ul className="w-10/12 gap-6 p-4 m-auto mt-4 mb-4 max-w-7xl md:grid md:grid-cols-3">
              {proyectos.map(proyecto=>(
                <ProyectosPreview
                  key={proyecto.id}
                  proyecto={proyecto}
                />
              ))}

            </ul>
          
        </Layout>
    );
}
 
export default Proyectos;