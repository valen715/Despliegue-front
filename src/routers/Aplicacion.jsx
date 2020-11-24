import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../pantallas/Inicio';
import Registro from '../pantallas/Registro';
import Bienvenido from '../pantallas/Bienvenido';
import App from '../App.js';
import Calculador from '../pantallas/Calculador';
import CalculadorEgresos from '../pantallas/CalculadorEgresos';
import CalculadorIngresos from '../pantallas/CalculadorIngresos';
import Ayuda from '../pantallas/Ayuda';
import Consejos from '../pantallas/Consejos';
import PagPrincipal from '../pantallas/PagPrincipal';
import Estadisticas from '../pantallas/Estadisticas';
import PrivateRoute from '../components/PrivateRoute';

function Aplicacion() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/inicio" component={Inicio} />
				<Route exact path="/registro" component={Registro} />
				<PrivateRoute exact path="/bienvenido" component={Bienvenido} />
				<PrivateRoute exact path="/calculador" component={Calculador} />
				<PrivateRoute
					exact
					path="/calculadoregresos"
					component={CalculadorEgresos}
				/>
				<PrivateRoute
					exact
					path="/calculadoringresos"
					component={CalculadorIngresos}
				/>
				<PrivateRoute exact path="/ayuda" component={Ayuda} />
				<PrivateRoute exact path="/consejos" component={Consejos} />
				<PrivateRoute
					exact
					path="/pag-principal"
					component={PagPrincipal}
				/>
				<PrivateRoute
					exact
					path="/estadisticas"
					component={Estadisticas}
				/>
			</Switch>
		</BrowserRouter>
	);
}
export default Aplicacion;
