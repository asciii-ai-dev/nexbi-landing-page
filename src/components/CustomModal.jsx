import { MdClose } from "react-icons/md";
import { Modal } from "react-responsive-modal";

const CustomModal = ({ onClose, children, open }) => {
  return (
    <Modal
      styles={{
        modal: {
          // minWidth:'250px',
          width:'93%',
          maxWidth: "750px",
          background: "#060809",
          height:"auto",
          minHeight: "500px"
        },
      }}
      open={open}
      onClose={onClose}
      center
      closeIcon={<MdClose size={22} color="#fff" />}
    >
     {children}
    </Modal>
  );
};

export default CustomModal;
