import ListLinkContent from "../ListLinkContent/ListLinkContent";

const NavigationList = (props) => {
  const { navigationLinksContent, classNames } = props;

  return (
    <ul className={`list ${classNames}__list`}>
      {navigationLinksContent.map((item) => {
        return (
          <li
            className={`list__item ${classNames}__list-item`}
            key={Math.random()}
          >
            <a
              href={item.href}
              className={`list__link ${classNames}__list-link`}
              {...(item.content ? {target: '_blank'} : '')}
            >
                <ListLinkContent item={item}/>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationList;
