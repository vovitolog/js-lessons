
test ('Should take old man older 90', ()=>{
    const ages = [18, 20, 22, 90, 1, 14, 100];

    const predicate = (age: number) => {
        return age > 90;
    }
    const oldAges = ages.filter(predicate);

    expect(ages.filter(predicate)).toEqual([100]);
})

test ('Courses should be Cheap', ()=>{
    const courses: Array<CourseType> = [
        {
            title: 'CSS',
            price: 110
        },
        {
            title: 'JS',
            price: 200
        },
        {
            title: 'REACT',
            price: 150
        },

    ]

    const chipCourses = [
        {
            title: 'CSS',
            price: 110
        },
        {
            title: 'REACT',
            price: 150
        },
    ]

    expect(courses.filter(c=>c.price<200)).toEqual(chipCourses);
})