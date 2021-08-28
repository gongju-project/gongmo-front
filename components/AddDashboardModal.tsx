import { Modal } from 'antd'
import { useState } from 'react';

const AddDashboardModal = ({visible, setVisible}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('ㄸㅆㄸㅆ');


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
        title="대시보드"
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

export default AddDashboardModal
