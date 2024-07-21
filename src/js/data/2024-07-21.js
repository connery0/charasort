dataSetVersion = "2024-07-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

//Other filters: player, campaign, class, artist? npc

dataSet[dataSetVersion].options = [

  {
    name:"Filter by Collection",
    key: "Collection",
    tooltip: "Add characters to the pool based on a theme.",
    checked:true,

    sub:
      [
        {
          name:"ONLY Nuns from corrupt the nun",
          key:"CTNun",
          tooltip: "Titualar nuns",
          checked:true          
        }
      ]
  },  
  {
    name:"Filter by Campaign",
    key: "Campaign",
    tooltip: 'Check this if you want to filter out certain campaigns.',
    checked:true,

    sub:
      [
        {
          name:"Corrupt the Nun",
          key:"CTNunCampaign"   
        },
        {
          name:"Of Salt And Spray",
          key:"SaltSpray"   
        }
      ]
  },

  {
    name: "Remove npcs",
    key: "NPC",       //Anything that contains this key (set to true) will be REMOVED from the pool
    tooltip: "Hide non player characters", // optional
    checked: false, // optional
  },
  {
    name: "Remove PCs",
    key: "PC",       //Anything that contains this key (set to true) will be REMOVED from the pool
    tooltip: "Hide player characters", // optional
    checked: true, // optional
  },
  {
    name: "Remove variants",
    key: "Variant",       //Anything that contains this key (set to true) will be REMOVED from the pool
    tooltip: "Hide options marked as variant", // optional
    checked: false, // optional
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Helsee",
    img: "Md5FAW6.png",
    opts: {
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },
  {
    name: "Kirisame Marisa",
    img: "WGxIAP8.jpeg",
    opts: {
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Hina",
    img:"r30wjeu.jpeg",
    opts:{
      Campaign: ["CorruptNun"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Aria",
    img:"PMixEdg.png",
    opts:{
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Kashmir",
    img:"zeydGZ0.jpeg",
    opts:{
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Halphas",
    img:"GUZHwn6.jpeg",
    opts:{
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Malphas (Hot)",
    img:"G0VrAYf.jpeg",
    opts:{
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Nuolankumas",
    img:"kE463xR.jpeg",
    opts:{
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true
    }
  },{
    name:"Malphas (Kalm)",
    img:"sGeJCR2.png",
    opts:{
      Campaign: ["CTNunCampaign"],
      Collection: ['CTNun'],
      NPC:true,
      Variant:true
    }
  },{
    name:"Beliel",
    img:"FeGb7xy.png",
    opts:{
      Campaign: ["CTNunCampaign"],
      PC:true
    }
  },{
    name:"Gina",
    img:"XzHXrV3.png",
    opts:{
      Campaign: ["CTNunCampaign"],
      PC:true
    }
  },{
    name:"Celene",
    img:"83tf4lX.png",
    opts:{
      Campaign: ["CTNunCampaign"],
      PC:true
    }
  },{
    name:"Mila",
    img:"LU1i7Ni.png",
    opts:{
      Campaign: ["CTNunCampaign"],
      PC:true
    }
  },
  
  {
    name:"Phylia (bowl)",
    img:"ky6jryv.png",
    opts:{
      Campaign: ["SaltSpray"],
      Variant:true,
      PC:true
    }
  },
  {
    name:"Cyla",
    img:"lm8tMFr.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Gort",
    img:"Zw9DciD.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Kaname",
    img:"Lh6jaUn.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Taco",
    img:"QsTBVYD.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Phylia",
    img:"C1Y27Wd.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Sil",
    img:"lQcEBnc.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Soho",
    img:"mirSocO.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },
  {
    name:"Soho (autum)",
    img:"Lg3hQjN.png",
    opts:{
      Campaign: ["SaltSpray"],
      Variant:true,
      PC:true
    }
  },
  {
    name:"Cenza",
    img:"onTHykh.png",
    opts:{
      Campaign: ["SaltSpray"],
      PC:true
    }
  },


];
