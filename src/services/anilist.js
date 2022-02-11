import fetchApi from './fetchApi';
import * as METHODS from './methods';

const baseUrl = 'https://graphql.anilist.co';

const getMediaList = async (body) => {
  const { response } = await fetchApi({
    url: baseUrl,
    options: METHODS.POST(body),
    message: {
      success: 'Datos obtenidos.',
      error: 'No se pudo obtener la lista.',
    },
  });

  return { ...response };
};

const anilistService = {
  getMediaList,
};

export default anilistService;
