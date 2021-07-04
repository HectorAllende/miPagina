import React, {useState, useEffect} from 'react';
import Repo from './repo'
import axios from 'axios'

const Repositorios = () => {

    const [repos, guardarRepos] = useState([])

    useEffect(() => {

        const data = sessionStorage.getItem("repos")

        if(data){
            let resultado1 = JSON.parse(data)

            return guardarRepos(resultado1)
        }

        const consultarRepos=async()=>{
            const url = 'https://api.github.com/users/hectorallende/repos'
            const resultado = await axios.get(url)

            sessionStorage.setItem("repos", JSON.stringify(resultado.data))

            guardarRepos(resultado.data)
        }
        consultarRepos()
  
    }, [])
    return (

        <div className="max-w-4xl mx-auto">

            <header className="p-2 m-auto text-xl font-bold text-center">Colaboración y contribución de código</header>

            <ul className="px-12 mx-auto mb-12 ml-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                {
                    repos.map(repo=>{
                        return <Repo
                            key={repo.id}
                            repo={repo}
                        />
                    })
                }


            </ul>



        </div>
     

      

     );
}
 
export default Repositorios;