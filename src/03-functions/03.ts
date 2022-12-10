import {StudentType} from "../02-objects/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-objects/02_02";

const sum = (a: number, b: number) => {
    debugger
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLivesIn = (s: StudentType, city: string) => {
    return s.adress.city.title === city;
}

export const ChangeBudget = (building: GovernmentBuildingType , changingValue: number) => {
    building.budget += changingValue;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingType, value: number) => {
    governmentBuilding.staffCount -= value;
}

export const toHireStaff = (governmentBuilding: GovernmentBuildingType, number: number) => {
    governmentBuilding.staffCount += number;
}