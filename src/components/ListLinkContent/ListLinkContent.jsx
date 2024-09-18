const ListLinkContent = ({ item }) => {
  if (!item.content) {
    if(item.breakPoint){
      const arrayItem = item.title.split(' ')
      return (
       arrayItem.map((word, index) => {
          return (
            index === item.breakPoint
            ?
            <>
            {word}<br/>
            </>
            :
            `${word} `
          )
        })
      )
    }
    return item.title;
  }
  const Component = item.content
  return <Component/>
};

export default ListLinkContent;
