const TelCard = ({ card, ...props }) => {
  const { title, href, content, icon } = card;

  return (
    <li {...props} className='hero-footer-item hero-footer-item--liner2'>
      <img
        src={icon}
        rel="reload"
        alt='phone icon'
        className='hero-footer-item-icon'
      />
      <div className='hero-footer-item-info'>
        <h3 className='hero-footer-item-title mobile-hidden'>
          {title}
        </h3>
        <a href={href} className='hero-footer-item-link'>
          {content}
        </a>
      </div>
    </li>
  );
};

export default TelCard;
