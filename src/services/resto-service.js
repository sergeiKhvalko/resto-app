export default class RestoService {
  data = [
    {
      title: 'Cesar salad',
      price: 12,
      url: 'https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg',
      category: 'salads',
      id: 1,
    },
    {
      title: 'Pizza Margherita',
      price: 10,
      url: 'https://s3-eu-west-1.amazonaws.com/straus/media/products2/10239.jpg',
      category: 'pizza',
      id: 2,
    },
    {
      title: 'Pizza Napoletana',
      price: 13,
      url: 'https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/decalogo_avpn_1.jpg',
      category: 'pizza',
      id: 3,
    },
    {
      title: 'Greece salad',
      price: 8,
      url: 'https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg',
      category: 'salads',
      id: 4,
    },
    {
      title: 'Cowboy Steak',
      price: 25,
      url: 'https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg',
      category: 'meat',
      id: 5,
    },
  ];

  // _apiBase = 'http://localhost:3000';

  // async getResourse(url) {
  //   const res = await fetch(`${this._apiBase}${url}`);

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  //   }
  //   return await res.json();
  // }

  getMenuItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    });
  }
}