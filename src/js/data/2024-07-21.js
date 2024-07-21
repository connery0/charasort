dataSetVersion = "2024-07-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

//Other filters: player, campaign, class, artist? npc

dataSet[dataSetVersion].options = [
  // {name: "Filter nuns"}

  // {

    
  //   name: "Filter by Theme",
  //   key: "series",
  //   tooltip: "Check this to restrict to certain series.",
  //   checked: false,
  //   sub: [
  //     { name: "Books and CDs", key: "book" },
  //     { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
  //     { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
  //     { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
  //     { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
  //     { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
  //     { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
  //     { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
  //     { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
  //     { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
  //     { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
  //     { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
  //     { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
  //     { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
  //     { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
  //     { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
  //     { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "Soku" },
  //     { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
  //     { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
  //     { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
  //     { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
  //     { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
  //     { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
  //     { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
  //     { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" }
  //   ]
  // },
  // {
  //   name: "Filter by Stage Enemy Appearances",
  //   key: "stage",
  //   tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
  //   checked: false,
  //   sub: [
  //     { name: "Stage 1", key: "st1" },
  //     { name: "Stage 2", key: "st2" },
  //     { name: "Stage 3", key: "st3" },
  //     { name: "Stage 4", key: "st4" },
  //     { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" },
  //     { name: "Stage 6/Final", key: "st6" },
  //     { name: "Stage EX/Phantasm", key: "ex" }
  //   ]
  // },
  // {
  //   name: "Remove PC-98 Duplicates",
  //   key: "pc98",
  //   tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  // },
  // {
  //   name: "Remove Non-Girls",
  //   key: "notgirl",
  //   tooltip: "Check this to remove all non-female characters."
  // }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Helsee",
    img: "Md5FAW6.png",
    opts: {
      collection: 'Nun'
    }
  },
  {
    name: "Kirisame Marisa",
    img: "WGxIAP8.jpeg",
    opts: {
      collection: 'Nun'
    }
  },{
    name:"Hina",
    img:"r30wjeu.jpeg",
    opts:{
      collection: 'Nun'
    }
  },{
    name:"Aria",
    img:"PMixEdg.png",
    opts:{
      collection: 'Nun'
    }
  },{
    name:"Kashmir",
    img:"zeydGZ0.jpeg",
    opts:{
      collection: 'Nun'
    }
  },{
    name:"Halphas",
    img:"GUZHwn6.jpeg",
    opts:{
      collection: 'Nun'
    }
  },{
    name:"Malphas (Hot)",
    img:"G0VrAYf.jpeg",
    opts:{
      collection: 'Nun'
    }
  },{
    name:"Nuolankumas",
    img:"kE463xR.jpeg",
    opts:{
      collection: 'Nun'
    }
  },{
    name:"Malphas (Kalm)",
    img:"sGeJCR2.png",
    opts:{
      collection: 'Nun'
    }
  }
];
