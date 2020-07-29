export const createMarkup = (content) => {
  return { __html: content };
};

export const id = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

export default {
  id,
  createMarkup,
};
