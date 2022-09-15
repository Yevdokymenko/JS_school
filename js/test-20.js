// REST-пагінація
//
const options = {
    headers: {
        Authorization: 'c270376178dc4bacabb81bf240e66eba',
    },
};

fetch(
    'https://newsapi.org/v2/everything?q=Apple&language=ru&from=2022-09-15&sortBy=popularity&apiKey=c270376178dc4bacabb81bf240e66eba'
)
    .then(r => r.json())
    .then(console.log);
