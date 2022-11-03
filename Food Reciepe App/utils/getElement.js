const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error("You have selected wrong Selector");
  }
};

export default getElement;
