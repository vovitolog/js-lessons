import {GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const  getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingType>) => {
    return governmentBuildings.map(b=> b.address.street.title);
}

export function getStreetsTitlesOfHouses(houses: Array<HouseType>) {
    return houses.map(h=>h.address.street.title)
}