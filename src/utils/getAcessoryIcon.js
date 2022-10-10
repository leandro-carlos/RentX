import Speed from '../utils/assets/Speed.svg';
import Forca from '../utils/assets/Forca.svg';
// import Speed from '../utils/assets/Speed.svg'
import Gasolina from '../utils/assets/Gasolina.svg';
import Energia from '../utils/assets/Energia.svg';
import Hibrido from '../utils/assets/Hibrido.svg';
import Cambio from '../utils/assets/cambio.svg';
import Pessoas from '../utils/assets/Pessoas.svg';
import Up from '../utils/assets/Up.svg';
import Carros from '../utils/assets/Carros.svg';

export function getAcessoryIcon(type) {
  switch (type) {
    case 'speed':
      return Speed;

    case 'acceleration':
      return Up;

    case 'turning_diameter':
      return Forca;
    case 'gasoline_motor':
      return Gasolina;
    case 'electric_motor':
      return Energia;
    case 'electric':
      return Energia;
    case 'hybrid_motor':
      return Hibrido;
    case 'exchange':
      return Cambio;
    case 'seats':
      return Pessoas;
    default:
      return Carros;
  }
}
