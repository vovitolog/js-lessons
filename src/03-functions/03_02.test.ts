import {CityType} from "../02-objects/02_02";
import {ChangeBudget, repairHouse, toFireStaff, toHireStaff} from "./03";



let city: CityType;

beforeEach(() => {
    city = {
        title: 'Moscow',
        houses: [
            {
                buildAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"},
                }
            },
            {
                buildAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"},
                }
            },
            {
                buildAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"},
                },
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {street: {title: "Central Str"}}
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {street: {title: "South Str"}}
            }
        ],
        citizensNumber: 1000000,
    }
})

//01. Создайте в отдельном файле функцию, чтобы тесты прошли

test("Budget should change to HOSPITAL", ()=>{
        ChangeBudget(city.governmentBuildings[0], 100000);
    expect( city.governmentBuildings[0].budget).toBe(300000);
    }
)

test("Budget should change to FIRE-STATION", ()=>{
    ChangeBudget(city.governmentBuildings[1], -100000);
        expect( city.governmentBuildings[1].budget).toBe(400000);
    }
)


// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли

test('House should be repaired', () => {
    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
});

//03. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be reduced', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
});

// 04. Создайте в том же файле еще одну функцию, чтобы тесты прошли
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
});