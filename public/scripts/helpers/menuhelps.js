
// HTML outline return
const createFoodElement = function(menuData) {

  return `
  <article class ="food_item">
          <header>
            <div>
            <img src=${tweetData.user.avatars}$>
            <p>${tweetData.user.name}</p>
            </div>
            <p class ="handle">${tweetData.user.handle}</p>
          </header>
          <p class ="tweet-bod">${safeHTML}</p>
          <footer>
            <p>${timeago.format(tweetData.created_at)}</p>
            <div>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>
  `;
};

