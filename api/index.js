const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example data with 30 posts divided into 6 pages
const data = [
    // Page 1
    {
        "page": 1,
        "pageSize": 5,
        "totalPosts": 30,
        "totalPages": 6,
        "posts": [
            {
                "title": "Exploring the Beauty of Nature",
                "author": "Alice Green",
                "date": "2024-05-31",
                "category": "Travel",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Discovering the beauty of nature helps us reconnect with our surroundings and find peace in the wilderness.",
                "id": 1,
                "imgUrl": "https://source.unsplash.com/random/800x600/?nature,water"
            },
            {
                "title": "City Lights and Night Adventures",
                "author": "Bob Smith",
                "date": "2024-05-30",
                "category": "Urban",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "The city never sleeps and offers endless opportunities for adventure, culture, and vibrant nightlife.",
                "id": 2,
                "imgUrl": "https://source.unsplash.com/random/800x600/?city,night"
            },
            {
                "title": "Forests: The Lungs of Our Planet",
                "author": "Cathy Brown",
                "date": "2024-05-29",
                "category": "Environment",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Forests play a crucial role in maintaining ecological balance and providing a habitat for countless species.",
                "id": 3,
                "imgUrl": "https://source.unsplash.com/random/800x600/?forest,trees"
            },
            {
                "title": "Mountain Peaks and Snowy Trails",
                "author": "Daniel White",
                "date": "2024-05-28",
                "category": "Adventure",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Mountain adventures offer thrilling experiences and breathtaking views from snowy peaks.",
                "id": 4,
                "imgUrl": "https://source.unsplash.com/random/800x600/?mountains,snow"
            },
            {
                "title": "Sunset at the Beach",
                "author": "Emily Johnson",
                "date": "2024-05-27",
                "category": "Relaxation",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Watching the sunset at the beach is a serene experience that calms the mind and soul.",
                "id": 5,
                "imgUrl": "https://source.unsplash.com/random/800x600/?beach,sunset"
            }
        ]
    },
    {
        "page": 2,
        "pageSize": 5,
        "totalPosts": 30,
        "totalPages": 6,
        "posts": [
            {
                "title": "Ancient Ruins and Modern Discoveries",
                "author": "Frank Harris",
                "date": "2024-05-26",
                "category": "History",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Exploring ancient ruins gives us a glimpse into the past and helps us understand human history.",
                "id": 6,
                "imgUrl": "https://source.unsplash.com/random/800x600/?ancient,ruins"
            },
            {
                "title": "Desert Adventures and Sand Dunes",
                "author": "Grace Lewis",
                "date": "2024-05-25",
                "category": "Adventure",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Deserts offer unique adventures with their vast sand dunes and stunning landscapes.",
                "id": 7,
                "imgUrl": "https://source.unsplash.com/random/800x600/?desert,sand"
            },
            {
                "title": "Snowboarding in the Alps",
                "author": "Henry Clark",
                "date": "2024-05-24",
                "category": "Sports",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Snowboarding in the Alps is an exhilarating experience with challenging slopes and beautiful scenery.",
                "id": 8,
                "imgUrl": "https://source.unsplash.com/random/800x600/?snowboarding,alps"
            },
            {
                "title": "Exploring Tropical Rainforests",
                "author": "Isla Martin",
                "date": "2024-05-23",
                "category": "Nature",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Tropical rainforests are rich in biodiversity and offer a unique experience of nature's wonders.",
                "id": 9,
                "imgUrl": "https://source.unsplash.com/random/800x600/?rainforest,tropical"
            },
            {
                "title": "Cultural Festivals Around the World",
                "author": "Jack Lee",
                "date": "2024-05-22",
                "category": "Culture",
                "tags": ["jobs", "continuous learning", "professional development", "skills", "networking"],
                "content": "Cultural festivals around the world showcase the diversity and richness of different traditions and customs.",
                "id": 10,
                "imgUrl": "https://source.unsplash.com/random/800x600/?festival,culture"
            }
        ]
    }
    
    
];

// Route to get paginated posts
app.get('/posts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedPosts = data.slice(startIndex, endIndex);

    res.json({
        page,
        pageSize,
        totalPosts: data.length,
        totalPages: Math.ceil(data.length / pageSize),
        posts: paginatedPosts
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
