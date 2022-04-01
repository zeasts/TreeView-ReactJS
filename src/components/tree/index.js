import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import './styles/tree.css'
import { IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
const Tree = ({ data = [] }) => {
	return (
		<div className="d-tree">
			<ul className="mainTreeViewContainer">
				{data.map((tree) => (
					<TreeNode node={tree} />
				))}
			</ul>
		</div>
	);
};

const TreeNode = ({ node }) => {
	const [childVisible, setChildVisible] = useState(false);

	const hasChild = node.children ? true : false;
	return (
		<li className="treeView">
			<div>
				<div onClick={(e) => setChildVisible((v) => !v)} >
					{hasChild && (
						<div
							className={`icon treeviewToggler ${childVisible ? "active" : ""
								}`}
						>
							<ChevronRightIcon />
						</div>
					)}

					<div className="treeViewHead">
						{/* Pass icons here */}
						{node.label}

					</div>
				</div>
				<div className="actions">
					<Stack direction="row">
						<IconButton aria-label="delete">
							<DeleteIcon />
						</IconButton>
						<IconButton color="secondary" aria-label="add an alarm">
							<AlarmIcon />
						</IconButton>
						<IconButton color="primary" aria-label="add to shopping cart">
							<AddShoppingCartIcon />
						</IconButton>
					</Stack>
				</div>
			</div>
			{hasChild && childVisible && (
				<div className="TreeViewContent">
					<ul>
						<Tree data={node.children} />
					</ul>
				</div>
			)}
		</li>
	);
};
export default Tree;
