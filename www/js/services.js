angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
    }];

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })
  .factory('CodesQR', function () {
    // Might use a resource here that returns a JSON array


    //[
    //  '{{repeat(5, 7)}}',
    //  {
    //    id: '{{objectId()}}',
    //    index: '{{index()}}',
    //    typeCode: 'QR_CODE',
    //    isActive: '{{bool()}}',
    //    name: '{{lorem(2, "words")}}',
    //    company: '{{company().toUpperCase()}}',
    //    owner: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    //    picture: 'http://placehold.it/32x32',
    //    about: '{{lorem(1, "paragraphs")}}',
    //    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    //    picture: function (tags) {
    //      return 'http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=' +  this.id +'&chs=180x180&choe=UTF-8&chld=L|0';
    //
    //    }
    //  }
    //]


    // Some fake testing data
    var codesQR =
      [
        {
          id: "55f4066c2a34c70c6bd04836",
          ref: "10023",
          typeCode: "QR_CODE",
          index: 0,
          isActive: false,
          name: "anim nulla",
          company: "LUXURIA",
          owner: "Vincent Durond",
          about: "Officia nulla anim dolor in aute culpa in pariatur dolor. Occaecat nostrud consectetur sunt aute ipsum adipisicing ullamco adipisicing ad incididunt cillum. Quis eu in laboris magna. Ullamco qui sint proident elit sit proident consectetur consectetur cupidatat quis non enim fugiat.\r\n",
          registered: "2015-04-30T08:01:17 -02:00",
          picture: "http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=55f4066c2a34c70c6bd04836&chs=180x180&choe=UTF-8&chld=L|0"
        },
        {
          id: "55f4066c76579ec9df01793c",
          ref: "10024",
          typeCode: "QR_CODE",
          index: 1,
          isActive: false,
          name: "aliqua reprehenderit",
          company: "DIGIRANG",
          owner: "Georgia Brewer",
          about: "Ad non nulla nostrud id irure pariatur eu non incididunt quis magna dolor incididunt. Irure nisi amet cupidatat enim sint est. Duis eiusmod ullamco esse dolore ea Lorem incididunt ex pariatur.\r\n",
          registered: "2014-11-07T06:40:25 -01:00",
          picture: "http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=55f4066c76579ec9df01793c&chs=180x180&choe=UTF-8&chld=L|0"
        },
        {
          id: "55f4066ceec4cbc0d2de9aaf",
          ref: "10025",
          typeCode: "QR_CODE",
          index: 2,
          isActive: false,
          name: "excepteur laboris",
          company: "BULLZONE",
          owner: "Kidd Wood",
          about: "Fugiat aliquip sint veniam nostrud ad do laborum esse ad. Id consequat quis cupidatat amet cillum nostrud minim magna duis deserunt fugiat consectetur exercitation. Ad esse enim exercitation ex ipsum incididunt ea do exercitation fugiat ex veniam. Occaecat sit culpa id enim fugiat. Sunt exercitation fugiat esse aute anim quis qui elit nulla ut dolor. Fugiat est eu fugiat adipisicing dolor dolor irure qui magna excepteur eiusmod. Eu pariatur irure mollit cillum ipsum qui pariatur dolor amet ullamco sint.\r\n",
          registered: "2014-09-24T02:33:35 -02:00",
          picture: "http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=55f4066ceec4cbc0d2de9aaf&chs=180x180&choe=UTF-8&chld=L|0"
        },
        {
          id: "55f4066ca64e3294d300392d",
          ref: "10026",
          typeCode: "QR_CODE",
          index: 3,
          isActive: true,
          name: "fugiat exercitation",
          company: "ROTODYNE",
          owner: "Randolph Compton",
          about: "Elit pariatur aliqua exercitation fugiat dolore dolor ullamco. Sit sit ex exercitation ex proident eu reprehenderit nulla consectetur ipsum sit cupidatat tempor sint. Sunt velit ipsum quis nostrud minim et commodo anim. Anim amet tempor quis sint ea reprehenderit tempor officia. Sit ipsum et ad laboris. Sint irure Lorem adipisicing dolor consequat incididunt sit aute ea veniam aute. Anim proident laboris sunt nulla duis cupidatat cupidatat laborum dolore.\r\n",
          registered: "2014-09-15T07:53:46 -02:00",
          picture: "http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=55f4066ca64e3294d300392d&chs=180x180&choe=UTF-8&chld=L|0"
        },
        {
          id: "55f4066c7b77393d25ddaf8c",
          ref: "10027",
          typeCode: "QR_CODE",
          index: 4,
          isActive: false,
          name: "est cupidatat",
          company: "SKYBOLD",
          owner: "Craig Carrillo",
          about: "Dolore nostrud laboris aute proident ex mollit id Lorem aliqua commodo ex. Et deserunt ad sunt duis est Lorem ad ea nisi laborum. Qui ea eu irure adipisicing commodo non magna nisi ullamco sint in dolore in. Occaecat ullamco irure deserunt incididunt voluptate nostrud sint irure mollit deserunt nisi velit. Et eiusmod velit labore eu ex eiusmod id ea ut aliquip id laborum.\r\n",
          registered: "2015-08-04T02:20:08 -02:00",
          picture: "http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=55f4066c7b77393d25ddaf8c&chs=180x180&choe=UTF-8&chld=L|0"
        },
        {
          id: "ABC-adf-1435",
          ref: "10028",
          typeCode: "Code-128",
          index: 5,
          isActive: false,
          name: "est cupidatat",
          company: "SKYBOLD",
          owner: "Laura Burks",
          about: "Dolore nostrud laboris aute proident ex mollit id Lorem aliqua commodo ex. Et deserunt ad sunt duis est Lorem ad ea nisi laborum. Qui ea eu irure adipisicing commodo non magna nisi ullamco sint in dolore in. Occaecat ullamco irure deserunt incididunt voluptate nostrud sint irure mollit deserunt nisi velit. Et eiusmod velit labore eu ex eiusmod id ea ut aliquip id laborum.\r\n",
          registered: "2015-08-04T02:20:08 -02:00",
          picture: "http://fr.qr-code-generator.com/phpqrcode/getCode.php?cht=qr&chl=55f4066c7b77393d25ddaf8c&chs=180x180&choe=UTF-8&chld=L|0"
        }


      ];

    return {
      all: function () {
        return codesQR;
      },
      remove: function (codeID) {
        codesQR.splice(codesQR.indexOf(codeID), 1);
      },
      get: function (codeID) {
        for (var i = 0; i < codesQR.length; i++) {
          if (codesQR[i].id === codeID) {
            return codesQR[i];
          }
        }
        return null;
      }
    };
  });
