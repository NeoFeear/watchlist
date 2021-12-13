import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor() {}

  animes = [
    {
      id: 1,
      title: 'Naruto',
      autor: 'Masashi Kishimoto',
      realisator: 'Hayato Date',
      studio: 'Studio Pierrot',
      nbEpisodes: '220',
      synopsis: "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue.",
      note: 9,
      filmAffiche: 'https://fr.web.img6.acsta.net/r_1280_720/pictures/19/08/02/15/12/4423178.jpg'
    },
    {
      id: 2,
      title: 'Naruto Shippuden',
      autor: 'Masashi Kishimoto',
      realisator: 'Hayato Date',
      studio: 'Studio Pierrot',
      nbEpisodes: '500',
      synopsis: "Naruto est de retour !! Après deux ans et demi d'entraînement avec Jiraya, il retrouve ses camarades de l'Académie des ninja ainsi que ses professeurs de Konoha. Tous ont évolué, y compris les ninjas du village de Suna. Seul Kakashi, semble être resté fidèle à lui-même ! Hélas, les retrouvailles sont de courte durée. Gaara, devenu depuis peu Kazekage de son village, est menacé. Tout porte à croire que l'Akatsuki soit à l'origine de l'attaque.",
      note: 9,
      filmAffiche: 'https://static.posters.cz/image/1300/affiches-et-posters/naruto-shippuden-i84239.jpg'
    },
    {
      id: 3,
      title: 'Fullmetal Alchemist: Brotherhood',
      autor: 'Hiromu Arakawa',
      realisator: 'Hiroshi Ohnogi',
      studio: 'Studio Bones',
      nbEpisodes: '64 + 4 OAV',
      synopsis: "Edward Elric et son frère Alphonse Elric sont de jeunes Alchimistes. En tentant de ramener leur mère à la vie, ils ont payé un lourd tribut, et ils tentent désormais de récupérer ce qu'ils ont perdu. Pour cela, Edward est devenu Alchimiste d'État : le Fullmetal Alchemist. Mais au cours de leurs recherches, bien des épreuves attendent les deux frères et des êtres étranges : les Homonculus, les poursuivent.",
      note: 10,
      filmAffiche: 'https://fr.web.img6.acsta.net/pictures/19/07/29/15/50/2364027.jpg'
    }
  ];

}