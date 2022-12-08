import {StudentType} from "../02-objects/02";

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