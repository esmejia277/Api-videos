const moviesMock = [
    {
      "id": "0a83dd14-85dd-412b-b068-f8c2c8ef143d",
      "title": "Machine Girl, The (Kataude mashin gâru)",
      "year": 2012,
      "cover": "http://dummyimage.com/201x228.jpg/dddddd/000000",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      "duration": 79,
      "contentRating": null,
      "source": "https://domainmarket.com/risus/praesent/lectus/vestibulum.js?ante=dictumst&ipsum=aliquam&primis=augue&in=quam&faucibus=sollicitudin&orci=vitae&luctus=consectetuer&et=eget&ultrices=rutrum&posuere=at&cubilia=lorem&curae=integer&donec=tincidunt&pharetra=ante&magna=vel&vestibulum=ipsum&aliquet=praesent&ultrices=blandit&erat=lacinia&tortor=erat&sollicitudin=vestibulum&mi=sed&sit=magna&amet=at&lobortis=nunc&sapien=commodo&sapien=placerat&non=praesent&mi=blandit&integer=nam&ac=nulla&neque=integer&duis=pede&bibendum=justo&morbi=lacinia&non=eget&quam=tincidunt&nec=eget&dui=tempus&luctus=vel&rutrum=pede&nulla=morbi&tellus=porttitor&in=lorem&sagittis=id&dui=ligula&vel=suspendisse",
      "tag": [
        "Comedy|Drama",
        "Crime|Drama|Horror|Thriller",
        "Comedy|Drama|Romance",
        "Drama",
        "Comedy|Drama"
      ]
    },
    {
      "id": "6645a33d-44ca-487b-89af-2a7c16dc9d5f",
      "title": "Incantato (Il cuore altrove)",
      "year": 1999,
      "cover": "http://dummyimage.com/170x166.jpg/ff4444/ffffff",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "duration": 20,
      "contentRating": null,
      "source": "https://engadget.com/penatibus/et/magnis/dis/parturient.js?eget=venenatis&eleifend=lacinia&luctus=aenean&ultricies=sit&eu=amet&nibh=justo&quisque=morbi&id=ut&justo=odio&sit=cras&amet=mi&sapien=pede&dignissim=malesuada&vestibulum=in&vestibulum=imperdiet&ante=et&ipsum=commodo&primis=vulputate&in=justo&faucibus=in&orci=blandit&luctus=ultrices&et=enim&ultrices=lorem&posuere=ipsum&cubilia=dolor&curae=sit",
      "tag": ["Comedy", "Comedy|Horror", "Thriller"]
    },
    {
      "id": "42566475-306d-4e83-9e95-6832d30c213b",
      "title": "Guerrilla: The Taking of Patty Hearst",
      "year": 2001,
      "cover": "http://dummyimage.com/197x249.bmp/5fa2dd/ffffff",
      "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "duration": 46,
      "contentRating": null,
      "source": "http://tripod.com/amet/eros/suspendisse/accumsan/tortor/quis/turpis.jpg?tellus=convallis&nulla=tortor&ut=risus&erat=dapibus&id=augue&mauris=vel&vulputate=accumsan&elementum=tellus&nullam=nisi&varius=eu&nulla=orci&facilisi=mauris&cras=lacinia&non=sapien&velit=quis&nec=libero&nisi=nullam&vulputate=sit&nonummy=amet&maecenas=turpis&tincidunt=elementum&lacus=ligula&at=vehicula&velit=consequat&vivamus=morbi&vel=a&nulla=ipsum&eget=integer&eros=a&elementum=nibh&pellentesque=in&quisque=quis&porta=justo&volutpat=maecenas&erat=rhoncus&quisque=aliquam&erat=lacus&eros=morbi&viverra=quis&eget=tortor&congue=id&eget=nulla&semper=ultrices&rutrum=aliquet&nulla=maecenas&nunc=leo&purus=odio&phasellus=condimentum&in=id&felis=luctus&donec=nec&semper=molestie&sapien=sed&a=justo&libero=pellentesque&nam=viverra&dui=pede&proin=ac&leo=diam&odio=cras&porttitor=pellentesque&id=volutpat&consequat=dui&in=maecenas&consequat=tristique&ut=est&nulla=et&sed=tempus&accumsan=semper&felis=est&ut=quam&at=pharetra&dolor=magna&quis=ac&odio=consequat&consequat=metus&varius=sapien&integer=ut&ac=nunc&leo=vestibulum&pellentesque=ante&ultrices=ipsum&mattis=primis&odio=in&donec=faucibus&vitae=orci&nisi=luctus&nam=et&ultrices=ultrices&libero=posuere",
      "tag": ["Comedy|Crime", "Comedy", "Drama", "Documentary"]
    },
    {
      "id": "898c5b42-2610-4134-91f7-eb7a2362084b",
      "title": "Push",
      "year": 1998,
      "cover": "http://dummyimage.com/204x196.bmp/cc0000/ffffff",
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "duration": 54,
      "contentRating": null,
      "source": "http://sourceforge.net/dictumst/etiam/faucibus.html?convallis=odio&morbi=in&odio=hac&odio=habitasse&elementum=platea&eu=dictumst&interdum=maecenas&eu=ut&tincidunt=massa&in=quis&leo=augue&maecenas=luctus&pulvinar=tincidunt&lobortis=nulla&est=mollis&phasellus=molestie&sit=lorem&amet=quisque&erat=ut&nulla=erat&tempus=curabitur&vivamus=gravida&in=nisi&felis=at&eu=nibh&sapien=in&cursus=hac&vestibulum=habitasse&proin=platea&eu=dictumst&mi=aliquam&nulla=augue&ac=quam&enim=sollicitudin&in=vitae&tempor=consectetuer&turpis=eget&nec=rutrum&euismod=at&scelerisque=lorem&quam=integer&turpis=tincidunt&adipiscing=ante&lorem=vel&vitae=ipsum&mattis=praesent&nibh=blandit&ligula=lacinia&nec=erat&sem=vestibulum&duis=sed&aliquam=magna&convallis=at&nunc=nunc&proin=commodo&at=placerat&turpis=praesent&a=blandit&pede=nam&posuere=nulla&nonummy=integer&integer=pede&non=justo&velit=lacinia&donec=eget&diam=tincidunt&neque=eget&vestibulum=tempus&eget=vel&vulputate=pede&ut=morbi&ultrices=porttitor&vel=lorem&augue=id&vestibulum=ligula&ante=suspendisse&ipsum=ornare&primis=consequat&in=lectus&faucibus=in&orci=est&luctus=risus&et=auctor&ultrices=sed&posuere=tristique&cubilia=in&curae=tempus&donec=sit&pharetra=amet&magna=sem&vestibulum=fusce&aliquet=consequat&ultrices=nulla&erat=nisl&tortor=nunc&sollicitudin=nisl",
      "tag": [
        "Crime|Drama|Thriller",
        "Drama|Romance",
        "Adventure|Drama|War",
        "Action|Drama|Sci-Fi|Thriller",
        "Comedy|Drama"
      ]
    },
    {
      "id": "05449554-fd0a-4316-a385-d7edd79091a7",
      "title": "Mercy Streets",
      "year": 1998,
      "cover": "http://dummyimage.com/120x152.jpg/cc0000/ffffff",
      "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      "duration": 82,
      "contentRating": null,
      "source": "http://go.com/morbi/sem/mauris/laoreet.json?at=ipsum&feugiat=primis&non=in&pretium=faucibus&quis=orci&lectus=luctus&suspendisse=et&potenti=ultrices&in=posuere&eleifend=cubilia&quam=curae&a=donec&odio=pharetra&in=magna&hac=vestibulum&habitasse=aliquet&platea=ultrices&dictumst=erat&maecenas=tortor&ut=sollicitudin&massa=mi&quis=sit&augue=amet&luctus=lobortis&tincidunt=sapien&nulla=sapien&mollis=non&molestie=mi&lorem=integer&quisque=ac&ut=neque&erat=duis&curabitur=bibendum&gravida=morbi&nisi=non&at=quam&nibh=nec&in=dui&hac=luctus&habitasse=rutrum&platea=nulla&dictumst=tellus&aliquam=in&augue=sagittis&quam=dui&sollicitudin=vel",
      "tag": ["Thriller"]
    },
    {
      "id": "ab74c12b-7f61-415b-aaa8-02959b7366e0",
      "title": "Valiant",
      "year": 2000,
      "cover": "http://dummyimage.com/124x195.bmp/dddddd/000000",
      "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "duration": 34,
      "contentRating": null,
      "source": "https://hatena.ne.jp/nulla/eget/eros.html?amet=adipiscing&turpis=elit&elementum=proin&ligula=interdum&vehicula=mauris&consequat=non&morbi=ligula&a=pellentesque&ipsum=ultrices&integer=phasellus&a=id&nibh=sapien&in=in&quis=sapien&justo=iaculis&maecenas=congue&rhoncus=vivamus&aliquam=metus&lacus=arcu&morbi=adipiscing&quis=molestie&tortor=hendrerit&id=at",
      "tag": [
        "Action|Comedy|Crime|Drama|Romance",
        "Drama",
        "Comedy|Drama|Romance"
      ]
    },
    {
      "id": "89a3fbb6-76d6-4533-9e2a-1ea1d232e51e",
      "title": "Private Resort",
      "year": 2004,
      "cover": "http://dummyimage.com/151x171.jpg/ff4444/ffffff",
      "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "duration": 57,
      "contentRating": null,
      "source": "https://goo.gl/faucibus/accumsan/odio/curabitur/convallis.jpg?nulla=ultrices&tempus=posuere&vivamus=cubilia&in=curae&felis=nulla&eu=dapibus&sapien=dolor&cursus=vel&vestibulum=est&proin=donec&eu=odio&mi=justo&nulla=sollicitudin&ac=ut&enim=suscipit&in=a&tempor=feugiat&turpis=et&nec=eros&euismod=vestibulum&scelerisque=ac&quam=est&turpis=lacinia&adipiscing=nisi&lorem=venenatis&vitae=tristique&mattis=fusce&nibh=congue&ligula=diam&nec=id&sem=ornare&duis=imperdiet&aliquam=sapien&convallis=urna&nunc=pretium&proin=nisl&at=ut&turpis=volutpat&a=sapien&pede=arcu&posuere=sed&nonummy=augue&integer=aliquam&non=erat&velit=volutpat&donec=in&diam=congue&neque=etiam&vestibulum=justo&eget=etiam&vulputate=pretium&ut=iaculis&ultrices=justo&vel=in&augue=hac&vestibulum=habitasse&ante=platea&ipsum=dictumst&primis=etiam&in=faucibus&faucibus=cursus&orci=urna&luctus=ut&et=tellus&ultrices=nulla&posuere=ut&cubilia=erat&curae=id&donec=mauris&pharetra=vulputate&magna=elementum&vestibulum=nullam&aliquet=varius&ultrices=nulla&erat=facilisi&tortor=cras&sollicitudin=non",
      "tag": ["Drama", "Crime|Drama", "Comedy|Drama|Romance", "Documentary"]
    },
    {
      "id": "3f36ffd7-f222-431c-863a-dde51cc63284",
      "title": "Daytrippers, The",
      "year": 1985,
      "cover": "http://dummyimage.com/206x205.bmp/dddddd/000000",
      "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "duration": 13,
      "contentRating": null,
      "source": "http://indiatimes.com/faucibus/orci/luctus/et/ultrices/posuere.json?dapibus=ornare&dolor=imperdiet&vel=sapien&est=urna&donec=pretium&odio=nisl&justo=ut&sollicitudin=volutpat",
      "tag": ["Comedy|Sci-Fi", "Drama"]
    },
    {
      "id": "98ec58bd-00e3-41bd-be45-b47ae3809684",
      "title": "Kids of Survival",
      "year": 1988,
      "cover": "http://dummyimage.com/180x159.png/5fa2dd/ffffff",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      "duration": 97,
      "contentRating": null,
      "source": "http://abc.net.au/imperdiet/sapien/urna.png?at=nullam&lorem=porttitor&integer=lacus&tincidunt=at&ante=turpis&vel=donec&ipsum=posuere&praesent=metus&blandit=vitae&lacinia=ipsum&erat=aliquam&vestibulum=non&sed=mauris&magna=morbi",
      "tag": ["Comedy|Romance", "Drama", "Action|Adventure|Crime|Drama|Western"]
    },
    {
      "id": "8f98099f-3a7a-41e1-85cf-9eaa2729690a",
      "title": "Bongwater",
      "year": 2008,
      "cover": "http://dummyimage.com/248x165.jpg/ff4444/ffffff",
      "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      "duration": 55,
      "contentRating": null,
      "source": "http://wisc.edu/eros/elementum/pellentesque/quisque.html?nunc=mi&viverra=pede&dapibus=malesuada&nulla=in&suscipit=imperdiet&ligula=et&in=commodo&lacus=vulputate&curabitur=justo&at=in&ipsum=blandit&ac=ultrices&tellus=enim&semper=lorem&interdum=ipsum&mauris=dolor&ullamcorper=sit",
      "tag": ["Comedy"]
    }
  ]

module.exports = {
    moviesMock
};
  