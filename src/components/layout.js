import React from 'react';
import Header from './header';
import Helmet from 'react-helmet'

const Loyaout = (props) => {
    return ( 
        <>

         <Header/>

        <Helmet>
          <title>Héctor Allende</title>

          <meta name="description" content="mi Portfolio" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

          < link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap" rel="stylesheet" />
        </Helmet>

         {props.children}


        </>
     );
}
 
export default Loyaout;