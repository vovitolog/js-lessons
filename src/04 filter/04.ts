const ages = [18, 20, 22, 90, 1, 14];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

type CourseType = {
    title: string
    price: number
}

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

const chipCoursePredicate = (course: CourseType) => {
    return course.price < 160;
}

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