import { Switch, Route } from 'react-router-dom';
import React from 'react'
import App from './App';
import Login from './Login';
import Forgot from './Forgot';
import Timeline from './Timeline';
function Main(){
return(
<main>

<Switch>
<Route exact path ='/' component={App} />
<Route path ='/login' component={Login} />
<Route path ='/forgot' component={Forgot} />
<Route path ='/timeline' component={Timeline} />
</Switch>

</main>
)
}


export default Main


