import {Flights, AddFlight} from '../views/flights'
const routes = [
    {
        option: 'flight',
        component: Flights
    },
    {
        option: 'Add flight',
        component: AddFlight
    },
    {
        option: 'Search flight',
        component: Flights
    }
]
export default routes