const AddressCard = ({ card, ...props }) => {
  const { title, href, content, icon } = card;
  return (
    <li {...props} className='hero-footer-item hero-footer-item--liner'>
      <img
        src={icon}
        rel='reload'
        alt='phone icon'
        className='hero-footer-item-icon'
      />
      <div className='hero-footer-item-info'>
        <h3 className='hero-footer-item-title mobile-hidden'>{title}</h3>
        <address className='hero-footer-item-address'>
          <a href={href} target='_blank'>
            {content}
          </a>
        </address>
      </div>
    </li>
  );
};

export default AddressCard;
