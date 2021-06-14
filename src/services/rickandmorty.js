import fetchApi from './fetchApi';
import * as METHODS from './methods';

const baseUrl = 'https://rickandmortyapi.com/api';
const rickandmortyService = {};

rickandmortyService.getCharacterList = async function (page) {
  const { response } = await fetchApi({
    url: baseUrl + `/character?page=${page}`,
    options: METHODS.GET(),
    dataType: {},
    message: {
      success: 'Lista de personajes obtenida.',
      error: 'No se pudo obtener la lista de personajes.',
    },
  });

  return { ...response };
};

export default rickandmortyService;
