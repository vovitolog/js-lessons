import {StudentType} from "../02-objects/02";
import {addSkill, doesStudentLivesIn, makeStudentActive} from "./03";
import exp from "constants";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Vladimir',
        age: 37,
        isActive: false,
        adress: {
            streetTitle: 'Ivanovskaya',
            city: {
                title: 'Khimki',
                country: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML',
            },
            {
                id: 2,
                title: 'JS',
            },
            {
                id: 3,
                title: 'React',
            },
        ]
    }
})

test("addSkill should add skill", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test("student should become active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test("does student lives on city", () => {
    let result1 = doesStudentLivesIn(student, "Khimki");
    let result2 = doesStudentLivesIn(student, "Minsk");

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})