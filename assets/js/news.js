$(document).ready(function () {
    // News data
    const newsData = [
        {
            title: "Book IX Begins Celebration kicks off in Fire Emblem Heroes",
            description: "Hello, summoners! The latest update to the Fire Emblem™ " +
                "Heroes game (v9.0.0) for smart devices brings all-new Book IX story" +
                " content and much more. Join in the Book IX Begins Celebration events" +
                " today and experience the new story content, tackle new challenges, summon" +
                " added Heroes, and tons of other stuff!",
            image: "assets/images/news1.avif",
            link: "https://www.nintendo.com/us/whatsnew/mobilenews-book-ix-begins-celebration-kicks-off-in-fire-emblem-heroes/"
        },
        {
            title: "Ask the Developer Vol. 15, Mario & Luigi: Brothership — Part 3",
            description: "In this 15th volume of Ask the Developer, an interview series" +
                " in which developers convey in their own words Nintendo's thoughts about" +
                " creating products and the unusual details they hone in on, we're talking " +
                "to the developers behind the Mario & Luigi™: Brothership game, which launched" +
                " on Thursday, November 7.",
            image: "assets/images/news2.avif",
            link: "https://www.nintendo.com/us/whatsnew/ask-the-developer-vol-15-mario-and-luigi-brothership-part-3/"
        },
        {
            title: "Fitness Boxing 3: Your Personal Trainer is out now!",
            description: "Punch and dodge* to the beat in the next entry of" +
                " the Fitness Boxing series! Pair up with your choice of six" +
                " fully voiced virtual instructors with customizable outfits " +
                "and hairstyles—and then get your groove on in 30 new instrumental songs.",
            image: "assets/images/news3.avif",
            link: "https://www.nintendo.com/us/whatsnew/fitness-boxing-3-your-personal-trainer-is-out-now/"
        },
        {
            title: "New update! See the latest bunch of classic games added to the Game Boy library",
            description: "Looking to create (or recreate) some classic gaming moments? Nintendo Switch Online members have instant access to a large library of Game Boy™, Super NES™, and NES™ games.\n" +
                "\n" +
                "This latest bunch of classic games are ripe with adventure, barrel-blasting antics, and our favorite Kongs! So, without further ado, let’s get to the list.\n" +
                "\n",
            image: "assets/images/news4.avif",
            link: "https://www.nintendo.com/us/whatsnew/new-update-see-the-latest-bunch-of-classic-games-added-to-the-game-boy-library/"
        },
        {
            title: "Animal Crossing: Pocket Camp Complete is now available!",
            description: "Good news, campers! The Animal Crossing™: Pocket Camp Complete" +
                " app is now available for smart devices. When you buy the app, you’ll be " +
                "able to access a jam-packed selection of previously released content without " +
                "any additional in-game purchases.\n" +
                "\n",
            image: "assets/images/news5.avif",
            link: "https://www.nintendo.com/us/whatsnew/mobilenews-animal-crossing-pocket-camp-complete-is-now-available/"
        },
        {
            title: "Community Spotlight",
            description: "SMy Nintendo™ is a free rewards program that lets you earn My Nintendo Platinum " +
                "Points* and Gold Points**, which you can redeem for fun rewards or discounts on digital games," +
                " respectively. It can make playing games and using Nintendo services even more fun! Plus," +
                " anyone with a Nintendo Account is automatically registered.",
            image: "assets/images/news6.avif",
            link: "https://www.nintendo.com/us/whatsnew/what-are-my-nintendo-gold-points-heres-how-to-redeem-them-for-discounts-on-digital-purchases/"
        }
    ];

    const newsContainer = $("#news-container");

    // Dynamically generate news cards
    newsData.forEach(news => {
        const card = `
            <div class="col-12">
                <div class="row g-3 align-items-center news-card">
                    <!-- Left-side image -->
                    <div class="col-4">
                        <a href="${news.link}">
                            <img src="${news.image}" alt="${news.title}" class="img-fluid rounded">
                        </a>
                    </div>
                    <!-- Right-side text -->
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
