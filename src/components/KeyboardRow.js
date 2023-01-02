import './KeyboardRow.css';
import Keybox from './Keybox';

const KeyboardRow = ({ row }) => {
	return (
		<section className="row-container">
			{row.map((val, index) => <Keybox key={index} type={val}></Keybox>)}
		</section>
	)
}

export default KeyboardRow;
