import closeIcon from "../../../images/icons/close-icon.png";

const Dialog = ({ buttonState, children }) => {
  const [ isFormSended, setIsFormSended ] = buttonState;

  const getDialogAttrs = () => {
    if (isFormSended) {
      return {
        close: false,
        open: true,
      };
    } else {
      return {
        close: true,
        open: false,
      };
    }
  };

  return (
    <>
      <div className={`backdrop ${isFormSended ? "backdrop--show" : ""}`}></div>
      <dialog className={`email-info container`} {...getDialogAttrs()}>
        <div className='dialog__wrapper'>
          <button
            className='button__burger--close'
            onClick={() => {
              setIsFormSended(false);
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