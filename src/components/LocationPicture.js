import { Box, Slide } from '@mui/material';
import ChambrePicture from '../assets/chambre.jpg';
import CouisinePicture from '../assets/couisine.jpg';
import DressingPicture from '../assets/dressing.jpg';
import BouhPicture from '../assets/bouh.jpg';
import ChambreEnfantPicture from '../assets/chambre_enfant.jpg';
import BusPicture from '../assets/bus.jpg';
import GaragePicture from '../assets/garage.jpg';
import SupermarchePicture from '../assets/supermarche.jpg';
import HopitalPicture from '../assets/hopital.jpg';
import MedecinPicture from '../assets/medecin.jpg';
import SalonPicture from '../assets/salon.jpg'

const LocationsImages = {
    Couisine: CouisinePicture,
    Dressing: DressingPicture,
    Chambre: ChambrePicture,
    Bouh: BouhPicture,
    ChambreEnfant: ChambreEnfantPicture,
    Bus: BusPicture,
    Garage: GaragePicture,
    Supermarche: SupermarchePicture,
    Hopital: HopitalPicture,
    Medecin: MedecinPicture,
    Salon: SalonPicture,
};

const LocationPicture = ({ place: location }) => {
    return (
        <>
            {Object.entries(LocationsImages).map(entry => {
                return <Slide direction="right" key={entry} in={entry[0] === location} mountOnEnter unmountOnExit>
                    <Box
                        component='img'
                        sx={{
                            position: 'absolute',
                            zIndex: -1,
                            height: '100%',
                            maxWidth: "80%",
                            objectFit: "cover",
                            left: 0,
                            right: 0,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        src={entry[1]}
                    />
                </Slide>
            })}
        </>
    );
};

export default LocationPicture;