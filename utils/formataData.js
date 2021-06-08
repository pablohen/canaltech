import moment from 'moment';

const amigavel = (data) => {
  const dataFormatada = moment(data).locale('pt-BR').fromNow();

  return dataFormatada;
};

const padrao = (data) => {
  const dataFormatada = moment(data).format('DD/MM/YYYY \\à\\s  HH:mm:ss');

  return dataFormatada;
};

const formataData = {
  amigavel,
  padrao,
};

export default formataData;
