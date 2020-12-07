import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = ( props ) => (
   <Aux>
        <div>Toolbar,sideDrawer,Backdrop</div>
        <main style={{color:'red'}}>
            {props.children}
        </main>
    </Aux>
);

export default Layout ;