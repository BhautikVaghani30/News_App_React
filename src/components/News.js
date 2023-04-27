// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
   articles = [
      {
          "source": {
              "id": null,
              "name": "The Guardian"
          },
          "author": "Alaina Demopoulos",
          "title": "Oyster stew, sturgeon soup: historic menus from Lincoln’s inaugural to San Quentin prison",
          "description": "New York exhibition of more than 200 menus traces US history through a century of diningThe buffet table at Abraham Lincoln’s second inaugural ball stretched over 250ft. On the menu was oyster stew, leg of veal, venison, quail and six flavors of ice-cream. Af…",
          "url": "https://www.theguardian.com/food/2023/apr/26/historic-menus-grolier-club-exhibit",
          "urlToImage": "https://i.guim.co.uk/img/media/ee6a0c8fc37bd4a515f4a153576993764d30e6db/0_194_2082_1248/master/2082.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5c599854304f9c9eb70f2b648bedd45b",
          "publishedAt": "2023-04-27T05:00:23Z",
          "content": "The buffet table at Abraham Lincolns second inaugural ball stretched over 250ft. On the menu was oyster stew, leg of veal, venison, quail and six flavors of ice-cream. After the president and his par… [+5271 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "Apple Working on 'Special Version of iPadOS 17' for Larger iPads, Starting With 14.1-inch Model Set to Launch in 2024",
          "description": "Apple is developing a version of iPadOS 17 that is specifically designed for larger unreleased iPad sizes, the first of which will arrive next year, claims a new rumor.\n\n\n\n\n\nAccording to the Twitter account holder @analyst941, a special version of Apple's upc…",
          "url": "https://www.macrumors.com/2023/04/27/ipados-17-for-larger-ipads-14-1-model/",
          "urlToImage": "https://images.macrumors.com/t/oQpAgCAqCSTLNHg_2BhcMeRJA3E=/2500x/article-new/2022/06/iPad-14-Inches-Feature-Orange.jpg",
          "publishedAt": "2023-04-27T09:27:59Z",
          "content": "Apple is developing a version of iPadOS 17 that is specifically designed for larger unreleased iPad sizes, the first of which will arrive next year, claims a new rumor.\r\nAccording to the Twitter acco… [+2441 chars]"
      },
      {
          "source": {
              "id": "associated-press",
              "name": "Associated Press"
          },
          "author": "Mauricio Savarese",
          "title": "Brazil judge orders temporary suspension of Telegram",
          "description": "SAO PAULO (AP) — A federal judge in Brazil on Wednesday ordered a temporary suspension of messaging app Telegram, citing the social media platform's alleged failure to provide all information Federal Police requested on neo-Nazi chat groups.",
          "url": "https://apnews.com/article/brazil-telegram-suspension-social-media-school-violence-d72acaacd3c1b4d07c2c4fcb094f4ce6",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/b8cd8ef87b884e99b6297b269f61fea1/3000.webp",
          "publishedAt": "2023-04-27T01:51:58Z",
          "content": "SAO PAULO (AP) A federal judge in Brazil on Wednesday ordered a temporary suspension of messaging app Telegram, citing the social media platforms alleged failure to provide all information Federal Po… [+3103 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "heise online"
          },
          "author": "Ben Schwan",
          "title": "Reality Pro: Apple-Headset offenbar bald produktionsbereit",
          "description": "Apples erstes AR/VR-Headset geht angeblich bald in die Herstellung. Warum Foxconn jetzt doch mitmachen darf.",
          "url": "https://www.heise.de/news/Reality-Pro-Apple-Headset-bald-produktionsbereit-8980349.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/2/5/1/HeiseM_an_apple_logo_with_lots_of_different_mixed_reality_heads_df7d5443-572c-4532-b897-60ed56f9ea8c-5de054a498fe7561.png",
          "publishedAt": "2023-04-27T08:35:00Z",
          "content": "Dem Herstellungsstart für Apples ersten Mixed-Reality-Hardware steht offenbar nichts mehr im Weg. Wie die in Taipei erscheinende Wirtschaftszeitung Economic Daily News (EDN) berichtet, befindet sich … [+2280 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "heise online"
          },
          "author": "Ben Schwan",
          "title": "Fake-Welle auf dem iPhone: Apple löscht falsche ChatGPT-Programme kaum",
          "description": "Den beliebten KI-Textgenerator gibt es nicht als offizielle iOS-App. In die Bresche springen unseriöse Anbieter, die Nutzern Geld aus der Tasche ziehen wollen.",
          "url": "https://www.heise.de/news/Fake-Welle-auf-dem-iPhone-Apple-loescht-falsche-ChatGPT-Programme-kaum-8980122.html",
          "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/1/3/4/shutterstock_2251011855-c7443e427271b841.jpg",
          "publishedAt": "2023-04-27T10:05:00Z",
          "content": "ChatGPT fürs iPhone? Klingt gut, gibt es aber aktuell offiziell nur, wenn man einen Browser verwendet. Keine der zahllosen Apps, die es für das Apple-Smartphone, das iPad oder die Apple Watch im App … [+2732 chars]"
      }
    ];
    constructor(){
      super();
      this.state = {
        articles:this.articles
      }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonky - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4 ">
                <NewsItems title="cricket" disc="mydisp" img="https://www.google.com/search?q=cricket&sxsrf=APwXEdeU45cY9p_PxOvWazlluQ4nOK_ZHw:1682600371279&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi9-7brjsr-AhWgslYBHRbQC78Q_AUoAnoECAEQBA&biw=1280&bih=881&dpr=1#imgrc=w0pmka6mgw2JcM" newsurl="todo"/>
            </div>
            <div className="col-md-4 ">
                <NewsItems title="cricket" disc="mydisp" img="https://heise.cloudimg.io/bound/300x300/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/2/5/1/HeiseM_an_apple_logo_with_lots_of_different_mixed_reality_heads_df7d5443-572c-4532-b897-60ed56f9ea8c-5de054a498fe7561.png" newsurl="todo"/>
            </div>
            <div className="col-md-4 ">
                <NewsItems title="cricket" disc="mydisp"img="https://heise.cloudimg.io/bound/300x300/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/2/5/1/HeiseM_an_apple_logo_with_lots_of_different_mixed_reality_heads_df7d5443-572c-4532-b897-60ed56f9ea8c-5de054a498fe7561.png" newsurl="todo"/>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News