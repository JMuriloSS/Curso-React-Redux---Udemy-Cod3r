import React, { Component } from "react";
import Grid from "../template/grid";
import IconButtom from "../template/iconButtom"

export default (props) => (
	<div role="form" className="todoForm row">
		<Grid cols="12 9 10">
			<input
				id="description"
				className="form-control"
				placeholder="Adicione uma tarefa"
			/>
		</Grid>

		<Grid cols="12 3 2">
			<IconButtom style="primary" icon="plus"></IconButtom>
		</Grid>
	</div>
);
