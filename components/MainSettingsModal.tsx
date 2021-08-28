import { Modal } from 'antd'
import { useState } from 'react';

const MainSettingsModal = ({visible, setVisible}) => {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Cㅆ');


	const handleOk = () => {
		setConfirmLoading(true);
		setVisible(false);
		setConfirmLoading(false);
	};

	const handleCancel = () => {
		setVisible(false)
	};

	return (
		<>
			<Modal
				title="세팅"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			>
				<p>{modalText}</p>
			</Modal>
		</>
	)
}

export default MainSettingsModal
