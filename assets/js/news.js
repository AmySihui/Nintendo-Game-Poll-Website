$(document).ready(function () {
    // 动态加载新闻数据（可以替换为从后端获取数据）
    const newsData = [
        {
            title: "Exciting New Game Released",
            description: "Discover the latest game from Nintendo with thrilling adventures and stunning graphics.",
            image: "assets/images/news1.jpg",
            link: "#"
        },
        {
            title: "Nintendo Direct Highlights",
            description: "Catch up on the key announcements from the latest Nintendo Direct event.",
            image: "assets/images/news2.jpg",
            link: "#"
        },
        {
            title: "Upcoming Game Previews",
            description: "Get a sneak peek at the most anticipated games coming to Nintendo platforms.",
            image: "assets/images/news3.jpg",
            link: "#"
        }
    ];

    // 动态生成新闻卡片
    const newsContainer = $(".row.g-4");
    newsData.forEach(news => {
        const card = `
            <div class="col-md-4">
                <div class="news-card">
                    <img src="${news.image}" alt="${news.title}" class="news-image">
                    <div class="news-content">
                        <h3 class="news-title">${news.title}</h3>
                        <p class="news-description">${news.description}</p>
                        <a href="${news.link}" class="btn btn-gradient">Read More</a>
                    </div>
                </div>
            </div>
        `;
        newsContainer.append(card);
    });
});