import style from './UserFormLayout.module.css';
import IconButton from '../buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';

const UserFormLayout = ({ onClose, children }) => (
	<div className={style.wrapper}>
		<IconButton
			className={style.close}
			icon={CrossIcon}
			filled
			onClick={onClose}
		/>
		{children}
	</div>
);

export default UserFormLayout;
