export const calculaTamanhoGrid = (posicao) => {
  if (posicao === 1) return 'sm:row-span-4 sm:col-span-4';
  if (posicao === 2) return 'md:row-span-2 md:col-span-2';

  return '';
};
