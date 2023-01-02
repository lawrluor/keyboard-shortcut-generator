import React from 'react';

import './Keybox.css';

const Keybox = ({ type }) => {
	const renderColor = (type) => {
		switch (type) {
			default:
				return 'black'
		}
	}

	const [keyType] = React.useState(type);
	const [keyName] = React.useState({ color: 'black', size: 16 });
	const [vanilla] = React.useState({ color: keyName, size: 16 });
	const [shift] = React.useState({ color: 'green' })
	const [command] = React.useState({ color: 'pink' });
	const [opt] = React.useState({ color: 'purple' });
	const [ctrl] = React.useState({ color: 'grey' });

	return (
		<div className={`keybox-container ${keyType}`}>
			<p className="text" style={keyName}>Q</p>
			<p className="text" style={vanilla}>quit</p>
			<p className="text" style={command}>quit all</p>
			<p className="text" style={opt}>quit some</p>
			<p className="text" style={ctrl}></p>
		</div>
	)
}

export default Keybox;
