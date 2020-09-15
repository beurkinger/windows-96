// goodenuff.jpg
export const getRandomId = (id: string): string =>
  id + '-' + Date.now() + '-' + Math.round(Math.random() * 100);
