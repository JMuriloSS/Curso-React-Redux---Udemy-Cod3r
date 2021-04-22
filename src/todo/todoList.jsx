import React from "react";
import IconButtom from "../template/iconButtom";

export default (props) => {
	const renderRows = () => {
		const list = props.list || [];
		return list.map((todo) => (
			<tr key={todo._id}>
				<td className={todo.done ? "markedAsDone" : ""}>
					{todo.description}
				</td>
				<td>
					<IconButtom
						style="success"
						hide={todo.done}
						icon="check"
						onClick={() => props.handleMarkAsDone(todo)}
					/>
					<IconButtom
						style="warning"
						hide={!todo.done}
						icon="undo"
						onClick={() => props.handleMarkAsPending(todo)}
					/>
					<IconButtom
						style="danger"
						hide={!todo.done}
						icon="trash-o"
						onClick={() => props.handleRemove(todo)}
					/>
				</td>
			</tr>
		));
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Descrição</th>
					<th className="tableActions">Ações</th>
				</tr>
			</thead>
			<tbody>{renderRows()}</tbody>
		</table>
	);
};
