import React from 'react'
import {Router} from '@reach/router'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import ContextProvider from './context/context'
function App() {
	return <ContextProvider>
		<Router>
			<Home path="/"/>
			<Login path="/login"/>
			<Register path="/register"/>
		</Router>
	</ContextProvider>
}

export default App
