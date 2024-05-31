const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Example data
const data = [
    {
        title: "Post Title 1",
        author: "Author 1",
        date: "2024-05-31",
        category: "Category 1",
        tags: ["a", "b", "c", "d"],
        content: "Content of post 1.",
        id: 1,
        imgUrl: "https://source.unsplash.com/random/800x600/?nature,water"
    },
    {
        title: "Post Title 2",
        author: "Author 2",
        date: "2024-05-30",
        category: "Category 2",
        tags: ["a", "b", "c", "d"],
        content: "Content of post 2.",
        id: 2,
        imgUrl: "https://source.unsplash.com/random/800x600/?city,night"
    },
    {
        title: "Post Title 3",
        author: "Author 3",
        date: "2024-05-29",
        category: "Category 3",
        tags: ["a", "b", "c", "d"],
        content: "Content of post 3.",
        id: 3,
        imgUrl: "https://source.unsplash.com/random/800x600/?forest,trees"
    },
    {
        title: "Post Title 4",
        author: "Author 4",
        date: "2024-05-28",
        category: "Category 4",
        tags: ["a", "b", "c", "d"],
        content: "Content of post 4.",
        id: 4,
        imgUrl: "https://source.unsplash.com/random/800x600/?mountains,snow"
    },
    {
        title: "Post Title 5",
        author: "Author 5",
        date: "2024-05-27",
        category: "Category 5",
        tags: ["a", "b", "c", "d"],
        content: "Content of post 5.",
        id: 5,
        imgUrl: "https://source.unsplash.com/random/800x600/?beach,sunset"
    }
    // Add more posts as needed
];

app.get('/data', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedPosts = data.slice(start, end);

    const paginatedData = {
        page,
        pageSize,
        totalPosts: data.length,
        totalPages: Math.ceil(data.length / pageSize),
        posts: paginatedPosts
    };

    res.json(paginatedData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
