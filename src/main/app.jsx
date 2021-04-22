import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import Menu from "../template/menu";
import { HashRouter } from 'react-router-dom'
import Routes from "./routes";

export default (props) => (
	<HashRouter>
		<div className="container">
			<Menu />
			<Routes />
		</div>
	</HashRouter>
);
