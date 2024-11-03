import axios from "axios";

const getByFilters = async (data) => {
  const resultado = await axios.get(`http://localhost:3001/api/players/${data.filtro}/${data.orden}`);
  return resultado.data;
}

const playersService = {
  getByFilters
}

export default playersService;