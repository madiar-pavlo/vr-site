import { useContext } from "react";
import closeIcon from "../../../images/icons/close-icon.png";
import { Context } from "../../../context/Context";

const Dialog = ({ buttonState, children }) => {
  const { setIsPopupOpen } = useContext(Context);
  const [isFormSended, setIsFormSended] = buttonState;

  const getDialogAttrs = () => {
    if (isFormSended) {
      return {
        close: false,
        open: "true",
      };
    } else {
      return {
        close: "true",
        open: false,
      };
    }
  };

  return (
    <>
      <dialog className={`email-info container`} {...getDialogAttrs()}>
        <div className='dialog__wrapper'>
          <button
            className='button__burger--close'
            onClick={() => {
              setIsFormSended(false);
              setIsPopupOpen(false);
            }}
          >
            <img src={closeIcon} alt='close menu' />
          </button>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Dialog;
