import React from 'react'
import {Router} from '@reach/router'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import ContextProvider from './context/context'
import {GlobalStyle} from './styles/styleGlobal'
function App() {
	return <ContextProvider>
		<GlobalStyle/>
		<Router>
			<Home path="/"/>
			<Login path="/login"/>
			<Register path="/register"/>
		</Router>
	</ContextProvider>
}

export default App
