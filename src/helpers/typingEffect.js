export const typingEffect = (textToType, setState, timeOut) => {
  const arrayTextToType = textToType.split("");
  console.log(arrayTextToType)
  arrayTextToType.forEach((element, index) => {
    setTimeout(() => {
      setState((text) => text + element);
    }, timeOut * index);
  });
};
