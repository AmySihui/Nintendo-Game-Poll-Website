$(document).ready(function () {
    // 新闻数据
    const newsData = [
        {
            title: "Book IX Begins Celebration kicks off in Fire Emblem Heroes",
            description: "Discover the latest game from Nintendo with thrilling adventures.",
            image: "assets/images/news1.avif",
            link: "https://www.nintendo.com/us/whatsnew/mobilenews-book-ix-begins-celebration-kicks-off-in-fire-emblem-heroes/"
        },
        {
            title: "Ask the Developer Vol. 15, Mario & Luigi: Brothership — Part 3",
            description: "Catch up on the announcements from the latest Nintendo Direct event.",
            image: "assets/images/news2.avif",
            link: "https://www.nintendo.com/us/whatsnew/ask-the-developer-vol-15-mario-and-luigi-brothership-part-3/"
        },
        {
            title: "Fitness Boxing 3: Your Personal Trainer is out now!",
            description: "Get a sneak peek at the most anticipated games.",
            image: "assets/images/news3.avif",
            link: "https://www.nintendo.com/us/whatsnew/fitness-boxing-3-your-personal-trainer-is-out-now/"
        },
        {
            title: "New update! See the latest bunch of classic games added to the Game Boy library",
            description: "Explore new features in your favorite games with this update.",
            image: "assets/images/news4.avif",
            link: "https://www.nintendo.com/us/whatsnew/new-update-see-the-latest-bunch-of-classic-games-added-to-the-game-boy-library/"
        },
        {
            title: "Animal Crossing: Pocket Camp Complete is now available!",
            description: "Learn how developers create stunning worlds and gameplay.",
            image: "assets/images/news5.avif",
            link: "news-details5.html"
        },
        {
            title: "Community Spotlight",
            description: "See what the Nintendo community is creating and discussing.",
            image: "assets/images/news6.avif",
            link: "https://www.nintendo.com/us/whatsnew/what-are-my-nintendo-gold-points-heres-how-to-redeem-them-for-discounts-on-digital-purchases/"
        }
    ];

    const newsContainer = $("#news-container");

    // 动态生成新闻卡片
    newsData.forEach(news => {
        const card = `
            <div class="col-12">
                <div class="row g-3 align-items-center news-card">
                    <!-- 左侧图片 -->
                    <div class="col-4">
                        <a href="${news.link}">
                            <img src="${news.image}" alt="${news.title}" class="img-fluid rounded">
                        </a>
                    </div>
                    <!-- 右侧文字 -->
                    <div class="col-8">
                        <div class="card-content">
                            <a href="${news.link}" class="text-decoration-none text-dark">
                                <h5>${news.title}</h5>
                            </a>
                            <p>${news.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        newsContainer.append(card);
    });


});
