import fetchApi from './fetchApi';
import * as METHODS from './methods';

const baseUrl = 'https://rickandmortyapi.com/api';

const getCharacterList = async (page) => {
  const { response } = await fetchApi({
    url: baseUrl + `/character?page=${page}`,
    options: METHODS.GET(),
    message: {
      success: 'Lista de personajes obtenida.',
      error: 'No se pudo obtener la lista de personajes.',
    },
  });

  return { ...response };
};

const rickandmortyService = {
  getCharacterList,
};

export default rickandmortyService;
