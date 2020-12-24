import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'Kit',
            email:'kitfuderich@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'John',
            email:'example@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },

    ],
    products:[
        {
            _id:'1',
            name:'Shiitake Agar Plate',
            category:'Mushroom supplies',
            image:'/images/p1.jpg',
            price:8,
            countInStock:4,
            brand:'KitsLab',
            rating:5,
            numReviews:1,
            description:"fully colonized agar plate"

        },
        {
            _id:'2',
            name:'Golden Oyster Agar Plate',
            category:'Mushroom supplies',
            image:'/images/p2.jpg',
            price:8,
            countInStock:4,
            brand:'KitsLab',
            rating:5,
            numReviews:1,
            description:"fully colonized agar plate"

        },
        {
            _id:'3',
            name:'Scotch Bonnet Pepper Seeds',
            category:'Garden supplies',
            image:'/images/p3.jpg',
            price:1,
            countInStock:1,
            brand:'KitsGarden',
            rating:5,
            numReviews:1,
            description:"scotch bonnet pepper seeds (pack of 10)"

        },
        {
            _id:'4',
            name:'Ghost Pepper Seeds',
            category:'Garden supplies',
            image:'/images/p4.jpg',
            price:1,
            countInStock:0,
            brand:'KitsGarden',
            rating:5,
            numReviews:1,
            description:"ghost pepper seeds (pack of 10)"

        },
        {
            _id:'5',
            name:'Tulsi Basil Seeds',
            category:'Garden supplies',
            image:'/images/p5.jpg',
            price:1,
            countInStock:2,
            brand:'KitsGarden',
            rating:5,
            numReviews:1,
            description:"Tulsi Basil seeds (pack of 10)"

        },
        {
            _id:'6',
            name:'BRF Grow Cakes',
            category:'Mushroom supplies',
            image:'/images/p6.jpg',
            price:9,
            countInStock:6,
            brand:'KitsLab',
            rating:5,
            numReviews:1,
            description:"injectable jar, pressure steralized Brown Rice Flour cakes for mushroom substrate"

        },
    ]
}

export default data; 