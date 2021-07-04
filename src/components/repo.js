import React from 'react';



const Repo = ({repo}) => {
    return (

        <li className="flex items-center">
            <div className="w-9/12 m-auto overflow-y-hidden">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">   <h1 className="text-lg font-bold text-blue-900 truncate">{repo.name}</h1> </a>
                <p className="overflow-y-hidden text-sm" style={{ height: "1.5em" }} >{repo.description}</p>
            </div>
        </li>
      );
}
 
export default Repo;