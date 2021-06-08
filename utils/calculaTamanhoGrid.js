export const calculaTamanhoGrid = (posicao) => {
  if (posicao === 1) return 'sm:row-span-2 sm:col-span-2';
  if (posicao === 4) return 'sm:row-span-2 col-span-1';

  return '';
};
