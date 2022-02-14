import React from 'react'
import {Router} from '@reach/router'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
function App() {
	return <>
		<Router>
			<Home path="/"/>
			<Login path="/login"/>
			<Register path="/register"/>
		</Router>
	</>
}

export default App
