const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// Example data with 30 posts
const posts = [
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
    },
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
    },
    {
        "title": "New Post 11",
        "author": "Liam Wilson",
        "date": "2024-06-11",
        "category": "Science",
        "tags": ["research", "discovery", "innovation"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 11,
        "imgUrl": "https://source.unsplash.com/random/800x600/?science"
    },
    {
        "title": "New Post 12",
        "author": "Ava Brown",
        "date": "2024-06-12",
        "category": "Music",
        "tags": ["songs", "melody", "concerts"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 12,
        "imgUrl": "https://source.unsplash.com/random/800x600/?music"
    },
    {
        "title": "New Post 3",
        "author": "Mark Johnson",
        "date": "2024-06-03",
        "category": "Sports",
        "tags": ["fitness", "exercise", "training"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 13,
        "imgUrl": "https://source.unsplash.com/random/800x600/?sports"
    },
    {
        "title": "New Post 4",
        "author": "Sarah Brown",
        "date": "2024-06-04",
        "category": "Travel",
        "tags": ["adventure", "explore", "destination"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 14,
        "imgUrl": "https://source.unsplash.com/random/800x600/?travel"
    },
    {
        "title": "New Post 5",
        "author": "Michael Clark",
        "date": "2024-06-05",
        "category": "Technology",
        "tags": ["programming", "coding", "software"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 15,
        "imgUrl": "https://source.unsplash.com/random/800x600/?technology"
    },
    {
        "title": "New Post 6",
        "author": "Emma Wilson",
        "date": "2024-06-06",
        "category": "Nature",
        "tags": ["environment", "wildlife", "conservation"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 16,
        "imgUrl": "https://source.unsplash.com/random/800x600/?nature"
    },
    {
        "title": "New Post 7",
        "author": "Ryan Thompson",
        "date": "2024-06-07",
        "category": "Food",
        "tags": ["recipes", "cooking", "nutrition"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 17,
        "imgUrl": "https://source.unsplash.com/random/800x600/?food"
    },
    {
        "title": "New Post 8",
        "author": "Olivia Moore",
        "date": "2024-06-08",
        "category": "Fashion",
        "tags": ["style", "trends", "clothing"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 18,
        "imgUrl": "https://source.unsplash.com/random/800x600/?fashion"
    },
    {
        "title": "New Post 9",
        "author": "David Walker",
        "date": "2024-06-09",
        "category": "Health",
        "tags": ["wellness", "fitness", "mental health"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 19,
        "imgUrl": "https://source.unsplash.com/random/800x600/?health"
    },
    {
        "title": "New Post 10",
        "author": "Sophia Hall",
        "date": "2024-06-10",
        "category": "Art",
        "tags": ["creativity", "painting", "sculpture"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 20,
        "imgUrl": "https://source.unsplash.com/random/800x600/?art"
    },
    {
        "title": "New Post 11",
        "author": "Liam Wilson",
        "date": "2024-06-11",
        "category": "Science",
        "tags": ["research", "discovery", "innovation"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 21,
        "imgUrl": "https://source.unsplash.com/random/800x600/?science"
    },
    {
        "title": "New Post 12",
        "author": "Ava Brown",
        "date": "2024-06-12",
        "category": "Music",
        "tags": ["songs", "melody", "concerts"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 22,
        "imgUrl": "https://source.unsplash.com/random/800x600/?music"
    },
    {
        "title": "New Post 13",
        "author": "Noah Moore",
        "date": "2024-06-13",
        "category": "Education",
        "tags": ["learning", "school", "knowledge"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 23,
        "imgUrl": "https://source.unsplash.com/random/800x600/?education"
    },
    {
        "title": "New Post 14",
        "author": "Isabella Clark",
        "date": "2024-06-14",
        "category": "History",
        "tags": ["past", "heritage", "culture"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 24,
        "imgUrl": "https://source.unsplash.com/random/800x600/?history"
    },
    {
        "title": "New Post 15",
        "author": "Mia Hall",
        "date": "2024-06-15",
        "category": "Technology",
        "tags": ["innovation", "digital", "future"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 25,
        "imgUrl": "https://source.unsplash.com/random/800x600/?technology"
    },
    {
        "title": "New Post 16",
        "author": "James Wilson",
        "date": "2024-06-16",
        "category": "Travel",
        "tags": ["adventure", "explore", "destination"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 26,
        "imgUrl": "https://source.unsplash.com/random/800x600/?travel"
    },
    {
        "title": "New Post 17",
        "author": "Charlotte Taylor",
        "date": "2024-06-17",
        "category": "Food",
        "tags": ["recipes", "cooking", "nutrition"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 27,
        "imgUrl": "https://source.unsplash.com/random/800x600/?food"
    },
    {
        "title": "New Post 18",
        "author": "Ethan Lewis",
        "date": "2024-06-18",
        "category": "Fashion",
        "tags": ["style", "trends", "clothing"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 28,
        "imgUrl": "https://source.unsplash.com/random/800x600/?fashion"
    },
    {
        "title": "New Post 19",
        "author": "Aria Garcia",
        "date": "2024-06-19",
        "category": "Health",
        "tags": ["wellness", "fitness", "mental health"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 29,
        "imgUrl": "https://source.unsplash.com/random/800x600/?health"
    },
    {
        "title": "New Post 20",
        "author": "Lucas Hernandez",
        "date": "2024-06-20",
        "category": "Art",
        "tags": ["creativity", "painting", "sculpture"],
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "id": 30,
        "imgUrl": "https://source.unsplash.com/random/800x600/?art"
    }
    // Add more posts here to reach a total of 30
];

// Route to get paginated posts
app.get('/data', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 5; // Fixed page size

    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / pageSize);

    // Ensure the page number is within valid range
    if (page < 1 || page > totalPages) {
        return res.status(400).json({
            error: "Invalid page number"
        });
    }

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedPosts = posts.slice(startIndex, endIndex);

    res.json({
        page,
        pageSize,
        totalPosts,
        totalPages,
        posts: paginatedPosts
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});