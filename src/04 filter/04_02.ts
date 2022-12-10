import {CityType, GovernmentBuildingType} from "../02-objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {

    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(governmentBuildings: Array<GovernmentBuildingType>, number: number) {
    return governmentBuildings.filter(building => building.staffCount > number)
}