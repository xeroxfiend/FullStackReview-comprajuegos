import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Admin from './components/Admin/Admin'
import Cart from './components/Cart/Cart'
import Catalog from './components/Catalog/Catalog'

export default (
<Switch>
    <Route exact path='/' component={Catalog} />
    <Route path='/cart' component={Cart} />
    <Route path='/admin' component={Admin} />
</Switch>
)