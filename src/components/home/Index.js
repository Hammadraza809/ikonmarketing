import React from 'react';
import Content from './Content';

function Home(props){
    return(
        <div>
            <Content props={props.history}/>
        </div>
    );
}
export default Home;