export default class BookstoreService {
    _data = [{
        id: 1,
        title: 'Production-ready microservices',
        author: 'Maksym Lapshyn',
        price: 32,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/513xxUWZ9VL._SY346_.jpg'
    }, {
        id: 2,
        title: 'Release it!',
        author: 'Nina Vedmedieva',
        price: 47,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/513xxUWZ9VL._SY346_.jpg'
    }];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened!'));
                }

                resolve(this._data);
            }, 700);
        });
    }
}