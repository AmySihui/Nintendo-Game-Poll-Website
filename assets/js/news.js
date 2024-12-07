$(document).ready(function () {
    // 新闻数据
    const newsData = [
        {
            title: "Exciting New Game Released",
            description: "Discover the latest game from Nintendo with thrilling adventures.",
            image: "assets/images/news1.jpg",
            link: "news-details1.html"
        },
        {
            title: "Nintendo Direct Highlights",
            description: "Catch up on the announcements from the latest Nintendo Direct event.",
            image: "assets/images/news2.jpg",
            link: "news-details2.html"
        },
        {
            title: "Upcoming Game Previews",
            description: "Get a sneak peek at the most anticipated games.",
            image: "assets/images/news3.jpg",
            link: "news-details3.html"
        },
        {
            title: "Big Game Update Released",
            description: "Explore new features in your favorite games with this update.",
            image: "assets/images/news4.jpg",
            link: "news-details4.html"
        },
        {
            title: "Behind the Scenes: Game Development",
            description: "Learn how developers create stunning worlds and gameplay.",
            image: "assets/images/news5.jpg",
            link: "news-details5.html"
        },
        {
            title: "Community Spotlight",
            description: "See what the Nintendo community is creating and discussing.",
            image: "assets/images/news6.jpg",
            link: "news-details6.html"
        }
    ];

    const newsContainer = $("#news-container");

    // 动态生成新闻卡片
    newsData.forEach(news => {
        const card = `
            <div class="col-md-4">
                <div class="news-card">
                    <a href="${news.link}">
                        <img src="${news.image}" alt="${news.title}">
                        <div class="card-content">
                            <h5>${news.title}</h5>
                            <p>${news.description}</p>
                        </div>
                    </a>
                </div>
            </div>
        `;
        newsContainer.append(card);
    });
});