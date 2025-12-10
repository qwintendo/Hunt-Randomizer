// Small helper for header year and mobile nav toggle
document.addEventListener('DOMContentLoaded',function(){
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  var nav = document.getElementById('mainNav');
  var btn = document.getElementById('navToggle');
  if(btn && nav){
    btn.addEventListener('click',function(){
      nav.classList.toggle('show');
    });
  }
  console.log('Get Your Random Loadout Hunter!');

  /*HUNTERS*/
  const hunters = [
  {
    "name": "Jane Eddings: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Jane_Eddings_Rookie.png/192px-Hunter_Jane_Eddings_Rookie.png?a24b6d"
  },
  {
    "name": "Oliver Whitman: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Oliver_Whitman_Rookie.png/192px-Hunter_Oliver_Whitman_Rookie.png?bf4f5a"
  },
  {
    "name": "Antonia Higuera: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Antonia_Higuera_Rookie.png/192px-Hunter_Antonia_Higuera_Rookie.png?28a18f"
  },
  {
    "name": "Mercy Zener: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Mercy_Zener_Rookie.png/192px-Hunter_Mercy_Zener_Rookie.png?b253bb"
  },
  {
    "name": "Ambrose Hazen: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Ambrose_Hazen_Rookie.png/192px-Hunter_Ambrose_Hazen_Rookie.png?597ddc"
  },
  {
    "name": "Leon Ulitsky: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Leon_Ulitsky_Rookie.png/192px-Hunter_Leon_Ulitsky_Rookie.png?44412d"
  },
  {
    "name": "Joan Damon: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Joan_Damon_Rookie.png/192px-Hunter_Joan_Damon_Rookie.png?77e070"
  },
  {
    "name": "Caitlyn Hammond",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Caitlyn_Hammond.png/192px-Hunter_Caitlyn_Hammond.png?ac3091"
  },
  {
    "name": "Otis Blackwell",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Otis_Blackwell.png/192px-Hunter_Otis_Blackwell.png?f708aa"
  },
  {
    "name": "Vinson Hayes",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Vinson_Hayes.png/192px-Hunter_Vinson_Hayes.png?2074eb"
  },
  {
    "name": "Jesse Buchanan: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Jesse_Buchanan_Rookie.png/192px-Hunter_Jesse_Buchanan_Rookie.png?d5b07a"
  },
  {
    "name": "Laura Gottschalk: Rookie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Laura_Gottschalk_Rookie.png/192px-Hunter_Laura_Gottschalk_Rookie.png?3d5633"
  },
  {
    "name": "Zachary Jones",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Zachary_Jones.png/192px-Hunter_Zachary_Jones.png?aa30b9"
  },
  {
    "name": "Willa Thomas",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Willa_Thomas.png/192px-Hunter_Willa_Thomas.png?4d9b46"
  },
  {
    "name": "Sascha Romanov",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Sascha_Romanov.png/192px-Hunter_Sascha_Romanov.png?b75390"
  },
  {
    "name": "Prudence Stallworth",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Prudence_Stallworth.png/192px-Hunter_Prudence_Stallworth.png?73790c"
  },
  {
    "name": "Ricky Leeds",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Ricky_Leeds.png/192px-Hunter_Ricky_Leeds.png?7afdf9"
  },
  {
    "name": "Thaddeus Sumner",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Thaddeus_Sumner.png/192px-Hunter_Thaddeus_Sumner.png?5ca3b2"
  },
  {
    "name": "John Victor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_John_Victor.png/192px-Hunter_John_Victor.png?cacee4"
  },
  {
    "name": "Jane Eddings: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Jane_Eddings_Survivor.png/192px-Hunter_Jane_Eddings_Survivor.png?41a768"
  },
  {
    "name": "Jane Eddings: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Jane_Eddings_Veteran.png/192px-Hunter_Jane_Eddings_Veteran.png?72926a"
  },
  {
    "name": "Oliver Whitman: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Oliver_Whitman_Survivor.png/192px-Hunter_Oliver_Whitman_Survivor.png?845da8"
  },
  {
    "name": "Oliver Whitman: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Oliver_Whitman_Veteran.png/192px-Hunter_Oliver_Whitman_Veteran.png?61c5ed"
  },
  {
    "name": "Antonia Higuera: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Antonia_Higuera_Survivor.png/192px-Hunter_Antonia_Higuera_Survivor.png?3b6378"
  },
  {
    "name": "Antonia Higuera: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Antonia_Higuera_Veteran.png/192px-Hunter_Antonia_Higuera_Veteran.png?edb2d2"
  },
  {
    "name": "Mercy Zener: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Mercy_Zener_Survivor.png/192px-Hunter_Mercy_Zener_Survivor.png?cd5cb4"
  },
  {
    "name": "Mercy Zener: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Mercy_Zener_Veteran.png/192px-Hunter_Mercy_Zener_Veteran.png?b60a8c"
  },
  {
    "name": "Ambrose Hazen: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Ambrose_Hazen_Survivor.png/192px-Hunter_Ambrose_Hazen_Survivor.png?805fed"
  },
  {
    "name": "Ambrose Hazen: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Ambrose_Hazen_Veteran.png/192px-Hunter_Ambrose_Hazen_Veteran.png?204adc"
  },
  {
    "name": "Leon Ulitsky: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Leon_Ulitsky_Survivor.png/192px-Hunter_Leon_Ulitsky_Survivor.png?82fde8"
  },
  {
    "name": "Leon Ulitsky: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Leon_Ulitsky_Veteran.png/192px-Hunter_Leon_Ulitsky_Veteran.png?cc1642"
  },
  {
    "name": "Joan Damon: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Joan_Damon_Survivor.png/192px-Hunter_Joan_Damon_Survivor.png?909828"
  },
  {
    "name": "Joan Damon: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Joan_Damon_Veteran.png/192px-Hunter_Joan_Damon_Veteran.png?a48c84"
  },
  {
    "name": "Jesse Buchanan: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Jesse_Buchanan_Survivor.png/192px-Hunter_Jesse_Buchanan_Survivor.png?1eae7b"
  },
  {
    "name": "Jesse Buchanan: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Jesse_Buchanan_Veteran.png/192px-Hunter_Jesse_Buchanan_Veteran.png?8b56de"
  },
  {
    "name": "Laura Gottschalk: Survivor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Laura_Gottschalk_Survivor.png/192px-Hunter_Laura_Gottschalk_Survivor.png?808a07"
  },
  {
    "name": "Laura Gottschalk: Veteran",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Laura_Gottschalk_Veteran.png/192px-Hunter_Laura_Gottschalk_Veteran.png?ad4f93"
  },
  {
    "name": "Bad Hand",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Bad_Hand.png/192px-Hunter_Bad_Hand.png?f06b5e"
  },
  {
    "name": "Union Suit: Red Drawers",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Union_Suit_Red.png/192px-Hunter_Union_Suit_Red.png?5d35dd"
  },
  {
    "name": "Union Suit: Sunday Best",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Union_Suit_White.png/192px-Hunter_Union_Suit_White.png?8afdfa"
  },
  {
    "name": "Bloody Red: Hood",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Bloody_Red_Hood.png/192px-Hunter_Bloody_Red_Hood.png?6d8ba4"
  },
  {
    "name": "Bloody Red: Wolf",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Bloody_Red_Wolf.png/192px-Hunter_Bloody_Red_Wolf.png?f310c5"
  },
  {
    "name": "Carcass Gunrunner",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Carcass_Gunrunner.png/192px-Hunter_Carcass_Gunrunner.png?c1ddfd"
  },
  {
    "name": "Coal Bearer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Coal_Bearer.png/192px-Hunter_Coal_Bearer.png?ccbc11"
  },
  {
    "name": "Corvid: Bile",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Corvid_Bile.png/192px-Hunter_Corvid_Bile.png?b4213c"
  },
  {
    "name": "Corvid: Brood",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Corvid_Brood.png/192px-Hunter_Corvid_Brood.png?2871c7"
  },
  {
    "name": "Death Mask",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Death_Mask.png/192px-Hunter_Death_Mask.png?8e5b2c"
  },
  {
    "name": "Deckhand",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Deckhand.png/192px-Hunter_Deckhand.png?c06e26"
  },
  {
    "name": "Desert Rose: Blue Skies",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Desert_Rose_Blue_Skies.png/192px-Hunter_Desert_Rose_Blue_Skies.png?4d4196"
  },
  {
    "name": "Desert Rose: Dust Devil",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Desert_Rose_Dust_Devil.png/192px-Hunter_Desert_Rose_Dust_Devil.png?ebe426"
  },
  {
    "name": "Dire Wolf",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Dire_Wolf.png/192px-Hunter_Dire_Wolf.png?11b26d"
  },
  {
    "name": "Dorothy Alice: Dream",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Dorothy_Alice_Dream.png/192px-Hunter_Dorothy_Alice_Dream.png?6022e3"
  },
  {
    "name": "Dorothy Alice: Nightmare",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Dorothy_Alice_Nightmare.png/192px-Hunter_Dorothy_Alice_Nightmare.png?616cab"
  },
  {
    "name": "Felis",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Felis.png/192px-Hunter_Felis.png?45e4bd"
  },
  {
    "name": "Giggles",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Giggles.png/192px-Hunter_Giggles.png?7211c7"
  },
  {
    "name": "Grotesque: Shank",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Grotesque_Shank.png/192px-Hunter_Grotesque_Shank.png?3bb02c"
  },
  {
    "name": "Grotesque: Gouge",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Grotesque_Gouge.png/192px-Hunter_Grotesque_Gouge.png?1bf35b"
  },
  {
    "name": "Hail Mary",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Hail_Mary.png/192px-Hunter_Hail_Mary.png?ff910b"
  },
  {
    "name": "Hawkshaw Jack",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Hawkshaw_Jack.png/192px-Hunter_Hawkshaw_Jack.png?e53f12"
  },
  {
    "name": "Hex Breaker",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Hex_Breaker.png/192px-Hunter_Hex_Breaker.png?b031a5"
  },
  {
    "name": "Justin Pierce",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Justin_Pierce.png/192px-Hunter_Justin_Pierce.png?1e1f3a"
  },
  {
    "name": "Leo Nuñez",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Leo_Nu%C3%B1ez.png/192px-Hunter_Leo_Nu%C3%B1ez.png?c05eb6"
  },
  {
    "name": "Luna Wolf",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Luna_Wolf.png/192px-Hunter_Luna_Wolf.png?75350c"
  },
  {
    "name": "Marian Lee",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Marian_Lee.png/192px-Hunter_Marian_Lee.png?fad4d1"
  },
  {
    "name": "Marshall Brewer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Marshall_Brewer.png/192px-Hunter_Marshall_Brewer.png?26070b"
  },
  {
    "name": "Pappy Redneck",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Pappy_Redneck.png/192px-Hunter_Pappy_Redneck.png?22cbe3"
  },
  {
    "name": "Private Eye",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Private_Eye.png/192px-Hunter_Private_Eye.png?cfc8fb"
  },
  {
    "name": "Redneck",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Redneck.png/192px-Hunter_Redneck.png?2d6346"
  },
  {
    "name": "Redshirt",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Redshirt.png/192px-Hunter_Redshirt.png?2c2864"
  },
  {
    "name": "Sea Wolf",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Sea_Wolf.png/192px-Hunter_Sea_Wolf.png?b09885"
  },
  {
    "name": "Servant of the Void",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Servant_of_the_Void.png/192px-Hunter_Servant_of_the_Void.png?8972da"
  },
  {
    "name": "Sheriff Hardin",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Sheriff_Hardin.png/192px-Hunter_Sheriff_Hardin.png?74ad89"
  },
  {
    "name": "The Black Coat",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Black_Coat.png/192px-Hunter_The_Black_Coat.png?dfcff3"
  },
  {
    "name": "The Drowned Kid",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Drowned_Kid.png/192px-Hunter_The_Drowned_Kid.png?6a5240"
  },
  {
    "name": "The Drowned Rat",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Drowned_Rat.png/192px-Hunter_The_Drowned_Rat.png?f5ca69"
  },
  {
    "name": "The Hornback",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Hornback.png/192px-Hunter_The_Hornback.png?fbf0cd"
  },
  {
    "name": "The Mountain Man",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Mountain_Man.png/192px-Hunter_The_Mountain_Man.png?d5827f"
  },
  {
    "name": "The Night Acolyte",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Night_Acolyte.png/192px-Hunter_The_Night_Acolyte.png?942149"
  },
  {
    "name": "The Night Mother",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Night_Mother.png/192px-Hunter_The_Night_Mother.png?2fe52c"
  },
  {
    "name": "The Night Seer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Night_Seer.png/192px-Hunter_The_Night_Seer.png?de4c60"
  },
  {
    "name": "The Redneck’s Daughter",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Redneck%27s_Daughter.png/192px-Hunter_The_Redneck%27s_Daughter.png?ef0d8b"
  },
  {
    "name": "The Reverend",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Reverend.png/192px-Hunter_The_Reverend.png?ada637"
  },
  {
    "name": "The Royal Phantom",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Royal_Phantom.png/192px-Hunter_The_Royal_Phantom.png?92f984"
  },
  {
    "name": "The Scaled Warrior",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Scaled_Warrior.png/192px-Hunter_The_Scaled_Warrior.png?2f93cc"
  },
  {
    "name": "The Scarecrow",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Scarecrow.png/192px-Hunter_The_Scarecrow.png?56f727"
  },
  {
    "name": "The Skinner",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Skinner.png/192px-Hunter_The_Skinner.png?b13e1a"
  },
  {
    "name": "The Spinning Blade",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Spinning_Blade.png/192px-Hunter_The_Spinning_Blade.png?e09a72"
  },
  {
    "name": "The Spirited",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Spirited.png/192px-Hunter_The_Spirited.png?26873f"
  },
  {
    "name": "The Waldmann",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Waldmann.png/192px-Hunter_The_Waldmann.png?a70c7b"
  },
  {
    "name": "Tonya Wegman",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Tonya_Wegman.png/192px-Hunter_Tonya_Wegman.png?dc4a84"
  },
  {
    "name": "Vaquero",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Vaquero.png/192px-Hunter_Vaquero.png?392afb"
  },
  {
    "name": "Wight Raven",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Wight_Raven.png/192px-Hunter_Wight_Raven.png?5acd1d"
  },
  {
    "name": "Worm Bite",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Worm_Bite.png/192px-Hunter_Worm_Bite.png?d4a3fa"
  },
  {
    "name": "Angel of Death",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Angel_of_Death.png/192px-Hunter_Angel_of_Death.png?b85b56"
  },
  {
    "name": "Biatatá",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Biatat%C3%A1.png/192px-Hunter_Biatat%C3%A1.png?9c3ab9"
  },
  {
    "name": "Cain",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Cain.png/192px-Hunter_Cain.png?fe014b"
  },
  {
    "name": "Captain Laffite",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Captain_Laffite.png/192px-Hunter_Captain_Laffite.png?868ec0"
  },
  {
    "name": "Carter",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Carter.png/192px-Hunter_Carter.png?bd5551"
  },
  {
    "name": "Dame of the Dead",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Dame_of_the_Dead.png/192px-Hunter_Dame_of_the_Dead.png?c135f6"
  },
  {
    "name": "Daughter of Decay",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Daughter_of_Decay.png/192px-Hunter_Daughter_of_Decay.png?8c350e"
  },
  {
    "name": "Crossroads Walker",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Crossroads_Walker.png/192px-Hunter_Crossroads_Walker.png?58e030"
  },
  {
    "name": "Dead Blessing",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Dead_Blessing.png/192px-Hunter_Dead_Blessing.png?2a265b"
  },
  {
    "name": "Ghost Face",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Ghost_Face.png/192px-Hunter_Ghost_Face.png?d72021"
  },
  {
    "name": "Hayalî",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Hayal%C3%AE.png/192px-Hunter_Hayal%C3%AE.png?88d37e"
  },
  {
    "name": "Iron Bark",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Iron_Bark.png/192px-Hunter_Iron_Bark.png?f8f373"
  },
  {
    "name": "Lilith",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Lilith.png/192px-Hunter_Lilith.png?46cc46"
  },
  {
    "name": "Llorona's Heir",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Llorona%27s_Heir.png/192px-Hunter_Llorona%27s_Heir.png?cd5434"
  },
  {
    "name": "Lonely Howl",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Lonely_Howl.png/192px-Hunter_Lonely_Howl.png?44f025"
  },
  {
    "name": "Luz Mala",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Luz_Mala.png/192px-Hunter_Luz_Mala.png?bc4306"
  },
  {
    "name": "Monroe",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Monroe.png/192px-Hunter_Monroe.png?8cc930"
  },
  {
    "name": "Mountie",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Mountie.png/192px-Hunter_Mountie.png?858edb"
  },
  {
    "name": "North Star",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_North_Star.png/192px-Hunter_North_Star.png?964ac4"
  },
  {
    "name": "Perchta: Dawn",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Perchta_Dawn.png/192px-Hunter_Perchta_Dawn.png?f4a742"
  },
  {
    "name": "Perchta: Dusk",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Perchta_Dusk.png/192px-Hunter_Perchta_Dusk.png?5bc3ee"
  },
  {
    "name": "Plains Warden",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Plains_Warden.png/192px-Hunter_Plains_Warden.png?865707"
  },
  {
    "name": "Scaramuccia",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Scaramuccia.png/192px-Hunter_Scaramuccia.png?418aed"
  },
  {
    "name": "Scourge: Midian",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Scourge_Midian.png/192px-Hunter_Scourge_Midian.png?c985b8"
  },
  {
    "name": "Scourge: Morrigan",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Scourge_Morrigan.png/192px-Hunter_Scourge_Morrigan.png?c0b5df"
  },
  {
    "name": "Sgt. Bridgewater",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Sgt_Bridgewater.png/192px-Hunter_Sgt_Bridgewater.png?b01023"
  },
  {
    "name": "Silver Spur",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Silver_Spur.png/192px-Hunter_Silver_Spur.png?90c9c2"
  },
  {
    "name": "Skull Taker",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Skull_Taker.png/192px-Hunter_Skull_Taker.png?d0718d"
  },
  {
    "name": "Sofia",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Sofia.png/192px-Hunter_Sofia.png?a721b6"
  },
  {
    "name": "Teche Wraith",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Teche_Wraith.png/192px-Hunter_Teche_Wraith.png?ad0792"
  },
  {
    "name": "The Archaeologist",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Archaeologist.png/192px-Hunter_The_Archaeologist.png?b60a1e"
  },
  {
    "name": "The Beast Hunter",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Beast_Hunter.png/192px-Hunter_The_Beast_Hunter.png?52a1ee"
  },
  {
    "name": "The Bone Doctor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Bone_Doctor.png/192px-Hunter_The_Bone_Doctor.png?cdeb16"
  },
  {
    "name": "The Bone Mason",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Bone_Mason.png/192px-Hunter_The_Bone_Mason.png?179795"
  },
  {
    "name": "The Concubine",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Concubine.png/192px-Hunter_The_Concubine.png?9a8078"
  },
  {
    "name": "The Conspirator",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Conspirator.png/192px-Hunter_The_Conspirator.png?a83b90"
  },
  {
    "name": "The Cowl",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Cowl.png/192px-Hunter_The_Cowl.png?b3da08"
  },
  {
    "name": "The Gunslinger",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Gunslinger.png/192px-Hunter_The_Gunslinger.png?78ad12"
  },
  {
    "name": "The Hyena",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Hyena.png/192px-Hunter_The_Hyena.png?88b6a3"
  },
  {
    "name": "The Kid",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Kid.png/192px-Hunter_The_Kid.png?b4b707"
  },
  {
    "name": "The Miko",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Miko.png/192px-Hunter_The_Miko.png?31a5c1"
  },
  {
    "name": "The Moorhound",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Moorhound.png/192px-Hunter_The_Moorhound.png?17857d"
  },
  {
    "name": "The Penitent",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Penitent.png/192px-Hunter_The_Penitent.png?3bd9fa"
  },
  {
    "name": "The Phantom",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Phantom.png/192px-Hunter_The_Phantom.png?4bbbea"
  },
  {
    "name": "The Prescient",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Prescient.png/192px-Hunter_The_Prescient.png?bff2b5"
  },
  {
    "name": "The Prodigal Daughter",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Prodigal_Daughter.png/192px-Hunter_The_Prodigal_Daughter.png?21eeba"
  },
  {
    "name": "The Prodigal Son",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Prodigal_Son.png/192px-Hunter_The_Prodigal_Son.png?39b606"
  },
  {
    "name": "The Rat",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Rat.png/192px-Hunter_The_Rat.png?715481"
  },
  {
    "name": "The Reaper",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Reaper.png/192px-Hunter_The_Reaper.png?b00fe8"
  },
  {
    "name": "The Reptilian",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Reptilian.png/192px-Hunter_The_Reptilian.png?df8f24"
  },
  {
    "name": "The Researcher",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Researcher.png/192px-Hunter_The_Researcher.png?7af7a5"
  },
  {
    "name": "The Revenant",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Revenant.png/192px-Hunter_The_Revenant.png?7a72d6"
  },
  {
    "name": "The Ronin",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Ronin.png/192px-Hunter_The_Ronin.png?569f99"
  },
  {
    "name": "The Sovereign",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Sovereign.png/192px-Hunter_The_Sovereign.png?a9c3f2"
  },
  {
    "name": "The Turncoat",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Turncoat.png/192px-Hunter_The_Turncoat.png?7d28bd"
  },
  {
    "name": "The Witch Hunter",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Witch_Hunter.png/192px-Hunter_The_Witch_Hunter.png?98bebf"
  },
  {
    "name": "Trapper: Buckshot",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Trapper_Buckshot.png/192px-Hunter_Trapper_Buckshot.png?2ec6a4"
  },
  {
    "name": "Trapper: Snare",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Trapper_Snare.png/192px-Hunter_Trapper_Snare.png?a23559"
  },
  {
    "name": "Weird Sister",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Weird_Sister.png/192px-Hunter_Weird_Sister.png?ff3c33"
  },
  {
    "name": "Zhong Kui",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Zhong_Kui.png/192px-Hunter_Zhong_Kui.png?80a98c"
  },
  {
    "name": "Bruja: Crone",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Bruja_Crone.png/192px-Hunter_Bruja_Crone.png?5d06b4"
  },
  {
    "name": "Bruja: Maiden",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Bruja_Maiden.png/192px-Hunter_Bruja_Maiden.png?16b54a"
  },
  {
    "name": "Devil's Advocate",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Devil%27s_Advocate.png/192px-Hunter_Devil%27s_Advocate.png?8ef7e0"
  },
  {
    "name": "Mama Maye",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Mama_Maye.png/192px-Hunter_Mama_Maye.png?b0cfe3"
  },
  {
    "name": "Stormseer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Stormseer.png/192px-Hunter_Stormseer.png?34ea5d"
  },
  {
    "name": "The Empress",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Empress.png/192px-Hunter_The_Empress.png?bd7e9e"
  },
  {
    "name": "The Fool: Fugitive",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Fool_Fugitive.png/192px-Hunter_The_Fool_Fugitive.png?7ecd25"
  },
  {
    "name": "The Fool: Outlaw",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Fool_Outlaw.png/192px-Hunter_The_Fool_Outlaw.png?79960e"
  },
  {
    "name": "The Hanged Man",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Hanged_Man.png/192px-Hunter_The_Hanged_Man.png?6fa562"
  },
  {
    "name": "The Headsman",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Headsman.png/192px-Hunter_The_Headsman.png?265f44"
  },
  {
    "name": "The Pale Judge",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Pale_Judge.png/192px-Hunter_The_Pale_Judge.png?fd5082"
  },
  {
    "name": "The Skinflint",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Skinflint.png/192px-Hunter_The_Skinflint.png?4710bb"
  },
  {
    "name": "Thorn Wreath",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Thorn_Wreath.png/192px-Hunter_Thorn_Wreath.png?8bc96d"
  },
  {
    "name": "Welder: Flame",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Welder_Flame.png/192px-Hunter_Welder_Flame.png?2ef10f"
  },
  {
    "name": "Welder: Torch",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Welder_Torch.png/192px-Hunter_Welder_Torch.png?3ffa93"
  },
  {
    "name": "Zhuge Liu",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Zhuge_Liu.png/192px-Hunter_Zhuge_Liu.png?ea464a"
  },
  {
    "name": "Burnt Marshall",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Burnt_Marshall.png/192px-Hunter_Burnt_Marshall.png?7ac655"
  },
  {
    "name": "Butcher's Cleaver",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Butcher%27s_Cleaver.png/192px-Hunter_Butcher%27s_Cleaver.png?aaaf56"
  },
  {
    "name": "Cardinal Rain",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Cardinal_Rain.png/192px-Hunter_Cardinal_Rain.png?392c1e"
  },
  {
    "name": "Chum",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Chum.png/192px-Hunter_Chum.png?6c2940"
  },
  {
    "name": "The Fang Shearer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Fang_Shearer.png/192px-Hunter_The_Fang_Shearer.png?516747"
  },
  {
    "name": "False Saint",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_False_Saint.png/192px-Hunter_False_Saint.png?850eae"
  },
  {
    "name": "Gar",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Gar.png/192px-Hunter_Gar.png?ebe94c"
  },
  {
    "name": "Harvest: Day",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Harvest_Day.png/192px-Hunter_Harvest_Day.png?f40ab5"
  },
  {
    "name": "Harvest: Dusk",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Harvest_Dusk.png/192px-Hunter_Harvest_Dusk.png?e60866"
  },
  {
    "name": "Harvest: Midnight",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Harvest_Midnight.png/192px-Hunter_Harvest_Midnight.png?283d37"
  },
  {
    "name": "Kendoka",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Kendoka.png/192px-Hunter_Kendoka.png?425c56"
  },
  {
    "name": "Ochenkov's Widow",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Ochenkov%27s_Widow.png/192px-Hunter_Ochenkov%27s_Widow.png?1a6095"
  },
  {
    "name": "Plague Doctor",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Plague_Doctor.png/192px-Hunter_Plague_Doctor.png?59c4a1"
  },
  {
    "name": "Post Malone: Deposed King",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Post_Malone_Deposed_King.png/192px-Hunter_Post_Malone_Deposed_King.png?18166e"
  },
  {
    "name": "Post Malone: Ringmaster",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Post_Malone_Ringmaster.png/192px-Hunter_Post_Malone_Ringmaster.png?eb7996"
  },
  {
    "name": "Shade: Drifter",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Shade_Drifter.png/192px-Hunter_Shade_Drifter.png?1e8267"
  },
  {
    "name": "Shade: High Noon",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Shade_High_Noon.png/192px-Hunter_Shade_High_Noon.png?f8cea1"
  },
  {
    "name": "The Beekeeper",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Beekeeper.png/192px-Hunter_The_Beekeeper.png?b8ab2b"
  },
  {
    "name": "The Centipede",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Centipede.png/192px-Hunter_The_Centipede.png?675226"
  },
  {
    "name": "The Exile",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Exile.png/192px-Hunter_The_Exile.png?7b3d7e"
  },
  {
    "name": "The Scaled Ward",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Scaled_Ward.png/192px-Hunter_The_Scaled_Ward.png?d741ba"
  },
  {
    "name": "The Shroud",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Shroud.png/192px-Hunter_The_Shroud.png?2ac7b3"
  },
  {
    "name": "The Skinned",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Skinned.png/192px-Hunter_The_Skinned.png?bd7a47"
  },
  {
    "name": "The Statesman",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Statesman.png/192px-Hunter_The_Statesman.png?74c35c"
  },
  {
    "name": "The Third Son",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Third_Son.png/192px-Hunter_The_Third_Son.png?c22a20"
  },
  {
    "name": "The Viper: Frenzy",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Viper_Frenzy.png/192px-Hunter_The_Viper_Frenzy.png?1ac194"
  },
  {
    "name": "The Viper: Onset",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Viper_Onset.png/192px-Hunter_The_Viper_Onset.png?acb66e"
  },
  {
    "name": "The Viper: Rise",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Viper_Rise.png/192px-Hunter_The_Viper_Rise.png?fcd368"
  },
  {
    "name": "The Viper: Surge",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Viper_Surge.png/192px-Hunter_The_Viper_Surge.png?ff701a"
  },
  {
    "name": "The Wayfarer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Wayfarer.png/192px-Hunter_The_Wayfarer.png?c097c4"
  },
  {
    "name": "Thirteenth Mate",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Thirteenth_Mate.png/192px-Hunter_Thirteenth_Mate.png?900c30"
  },
  {
    "name": "Wayward Helmsman",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Wayward_Helmsman.png/192px-Hunter_Wayward_Helmsman.png?769301"
  },
  {
    "name": "Winky",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Winky.png/192px-Hunter_Winky.png?40ce2b"
  },
  {
    "name": "Billy Story",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Billy_Story.png/192px-Hunter_Billy_Story.png?ef1c8e"
  },
  {
    "name": "Kill Buyer",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Kill_Buyer.png/192px-Hunter_Kill_Buyer.png?1e72c6"
  },
  {
    "name": "Lulu",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Lulu.png/192px-Hunter_Lulu.png?990017"
  },
  {
    "name": "Steel Eyed",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Steel_Eyed.png/192px-Hunter_Steel_Eyed.png?479f09"
  },
  {
    "name": "The Infected",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_The_Infected.png/192px-Hunter_The_Infected.png?ee60f0"
  },
  {
    "name": "Umpire's Bane",
    "image": "https://huntshowdown.wiki.gg/images/thumb/Hunter_Umpire%27s_Bane.png/192px-Hunter_Umpire%27s_Bane.png?e0851f"
  }
];

  function getRandomHunter() {
    const randomIndex = Math.floor(Math.random() * hunters.length);
    return hunters[randomIndex];
  }

  const randomHunterBtn = document.getElementById("randomize-hunter");
  const randomAllBtn = document.getElementById("randomize-all-btn");
  const imageEl = document.getElementById("hunter-image");
  const nameEl = document.getElementById("hunters-name");

  function displayRandomHunter() {
    const hunter = getRandomHunter();
    console.log('Chosen hunter:', hunter);

    imageEl.src = hunter.image;
    imageEl.alt = hunter.name;
    nameEl.textContent = hunter.name;
  }

  if (imageEl && nameEl) {
    displayRandomHunter();
  

    if (randomHunterBtn) {
      randomHunterBtn.addEventListener("click", displayRandomHunter);
    }

    if (randomAllBtn) {
      randomAllBtn.addEventListener("click", () => {
        displayRandomHunter();
        renderRandomHealth();
        randomizeTraits();
        randomizeWeapons();
        randomizeToolsAndConsumables();
        /* Call other randomization functions here */
      });
    }
  } else{
  console.warn("Hunter Image or name element not found.");
  }

  /*HEALTH BAR*/

  const healthPatterns = [
  [50, 50, 50],
  [50, 50, 25, 25],
  [50, 25, 50, 25],
  [50, 25, 25, 50],
  [50, 25, 25, 25, 25],
  ];

  function getRandomHealthPattern() {
    const index = Math.floor(Math.random() * healthPatterns.length);
    return healthPatterns[index];
  }

  function renderHealthBar(segments) {
    const bar = document.querySelector(".health-bar");
    if (!bar) return;

    bar.innerHTML = "";

    const total = segments.reduce((sum, v) => sum + v, 0);

    segments.forEach(size => {
      const segment = document.createElement("div");
      segment.classList.add("health-segment");
      segment.style.width = (size / total) * 100 + "%";
      bar.appendChild(segment);
    });
  }

  function renderRandomHealth() {
    const pattern = getRandomHealthPattern();
    renderHealthBar(pattern);
  }

  const healthBtn = document.getElementById("randomize-health");
  if (healthBtn) {
    healthBtn.addEventListener("click", renderRandomHealth);
  }

  /*TRAITS*/
  const traits = [
  {
    "name": "Assailant", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Assailant_Small.png?b0f38e",
  },
  {
    "name": "Bolt Thrower", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Bolt_Thrower_Small.png?6890fa"
  },
  {
    "name": "Fanning", cost: 8,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Fanning_Small.png?7c68de"
  },
  {
    "name": "Fast Fingers", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Fast_Fingers_Small.png?c84755"
  },
  {
    "name": "Hundred Hands", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Hundred_Hands_Small.png?505ec1"
  },
  {
    "name": "Iron Eye", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Iron_Eye_Small.png?5e8952"
  },
  {
    "name": "Levering", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Levering_Small.png?cba47b"
  },
  {
    "name": "Martialist", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Martialist_Small.png?2cc3e8"
  },
  {
    "name": "Pitcher", cost: 6,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Pitcher_Small.png?721378"
  },
  {
    "name": "Scopesmith", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Scopesmith_Small.png?9ddd22"
  },
  {
    "name": "Steady Aim", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Steady_Aim_Small.png?949f4a"
  },
  {
    "name": "Adrenaline", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Adrenaline_Small.png?17d7b9"
  },
  {
    "name": "Bloodless", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Bloodless_Small.png?5abd54"
  },
  {
    "name": "Bulwark", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Bulwark_Small.png?f35b62"
  },
  {
    "name": "Dauntless", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Dauntless_Small.png?4398ff"
  },
  {
    "name": "Doctor", cost: 9,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Doctor_Small.png?87d64c"
  },
  {
    "name": "Hornskin", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Hornskin_Small.png?80a4f8"
  },
  {
    "name": "Mithridatist", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Mithridatist_Small.png?de79a9"
  },
  {
    "name": "Physician", cost: 5,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Physician_Small.png?33dcb0"
  },
  {
    "name": "Salveskin", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Salveskin_Small.png?c7f168"
  },
  {
    "name": "Vigor", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Vigor_Small.png?863a3e"
  },
  {
    "name": "Gator Legs", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Gator_Legs_Small.png?354e05"
  },
  {
    "name": "Greyhound", cost: 5,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Greyhound_Small.png?f3df0e"
  },
  {
    "name": "Kiteskin", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Kiteskin_Small.png?f619d4"
  },
  {
    "name": "Lightfoot", cost: 5,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Lightfoot_Small.png?ab3e26"
  },
  {
    "name": "Surefoot", cost: 6,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Surefoot_Small.png?ad5de9"
  },
  {
    "name": "Ambidextrous", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Ambidextrous_Small.png?df38ed"
  },
  {
    "name": "Beastface", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Beastface_Small.png?ccb359"
  },
  {
    "name": "Blade Seer", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Blade_Seer_Small.png?775e40"
  },
  {
    "name": "Blast Sense", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Blast_Sense_Small.png?6a6d61"
  },
  {
    "name": "Bulletgrubber", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Bulletgrubber_Small.png?cae6d7"
  },
  {
    "name": "Conduit", cost: 5,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Conduit_Small.png?8c352b"
  },
  {
    "name": "Decoy Supply", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Decoy_Supply_Small.png?4a187b"
  },
  {
    "name": "Determination", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Determination_Small.png?7251b9"
  },
  {
    "name": "Frontiersman", cost: 7,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Frontiersman_Small.png?17944b"
  },
  {
    "name": "Ghoul", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Ghoul_Small.png?c0296d"
  },
  {
    "name": "Magpie", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Magpie_Small.png?3b26fa"
  },
  {
    "name": "Necromancer", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Necromancer_Small.png?3fffce"
  },
  {
    "name": "Packmule", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Packmule_Small.png?8d5b25"
  },
  {
    "name": "Pain Sense", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Pain_Sense_Small.png?e3a9ae"
  },
  {
    "name": "Poacher", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Poacher_Small.png?197f64"
  },
  {
    "name": "Poltergeist", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Poltergeist_Small.png?f8c973"
  },
  {
    "name": "Quartermaster", cost: 6,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Quartermaster_Small.png?4e73a6"
  },
  {
    "name": "Resilience", cost: 3,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Resilience_Small.png?660a1e"
  },
  {
    "name": "Serpent", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Serpent_Small.png?9be4eb"
  },
  {
    "name": "Silent Killer", cost: 4,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Silent_Killer_Small.png?5184f4"
  },
  {
    "name": "Vigilant", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Vigilant_Small.png?a26eda"
  },
  {
    "name": "Vulture", cost: 2,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Vulture_Small.png?92a368"
  },
  {
    "name": "Whispersmith", cost: 1,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Whispersmith_Small.png?f857b1"
  },
  {
    "name": "Witness", cost: 5,
    "image": "https://huntshowdown.wiki.gg/images/Trait_Witness_Small.png?57740d"
  },
  ];

  const traitPointsInput = document.getElementById("trait-points");
  const traitSlots = document.querySelectorAll(".trait-slot");
  const traitButton = document.getElementById("randomize-traits");
  const qmCheckbox = document.getElementById("force-quartermaster");
  let currentTraits = [];
  const quartermasterTrait = traits.find(trait => trait.name === "Quartermaster");

  function getAvailableTraitPoints() {
    const points = parseInt(traitPointsInput.value, 10);
    if (isNaN(points) || points< 0) {
      return 0; 
    }
    return points;
  }
    
  function shuffleArray(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function pickRandomTraits(availablePoints, maxSlots, pool) {
  const traitPool = (pool || traits).slice();
  const selected = [];
  let remaining = availablePoints;

  while (remaining > 0 && selected.length < maxSlots && pool.length > 0) {
    const affordable = pool.filter(trait => trait.cost <= remaining);
    if (affordable.length === 0) break;

    const randomIndex = Math.floor(Math.random() * affordable.length);
    const chosen = affordable[randomIndex];

    selected.push(chosen);
    remaining -= chosen.cost;

    const poolIndex = traitPool.indexOf(chosen);
    if (poolIndex !== -1) {
      pool.splice(poolIndex, 1);
    }
  }

  return selected;
  }


  function renderTraitsIntoSlots(selectedTraits) {
    traitSlots.forEach(slot => {
      slot.innerHTML = "";
      slot.removeAttribute("data-tooltip");
    });

    selectedTraits.forEach((trait, index) => {
      if (index >= traitSlots.length) return;

      const slot = traitSlots[index];

      const img = document.createElement("img");
      img.src = trait.image;
      img.alt = trait.name;
      img.classList.add("trait-icon");
      
      slot.dataset.tooltip = `${trait.name} — Cost: ${trait.cost}`;

      slot.appendChild(img);
    });
  }

  function randomizeTraits() {
      const totalPoints = getAvailableTraitPoints();
      let remainingPoints = totalPoints;
      let maxSlots = traitSlots.length;

      const forcedTraits = [];

    // ✅ If checkbox is checked and Quartermaster exists, force it in
    if (qmCheckbox && qmCheckbox.checked && quartermasterTrait) {
      forcedTraits.push(quartermasterTrait);
      remainingPoints = Math.max(totalPoints - quartermasterTrait.cost, 0);
      maxSlots -= 1; // one slot is already taken by Quartermaster
    }

    // Pool for random selection = all traits except the forced ones
    const pool = traits.filter(trait => !forcedTraits.includes(trait));

    // Pick the rest of the traits using remaining points and slots
    const randomTraits = pickRandomTraits(remainingPoints, maxSlots, pool);

    const selectedTraits = forcedTraits.concat(randomTraits);

    currentTraits = selectedTraits;           // for Quartermaster weapon logic later
    renderTraitsIntoSlots(selectedTraits);

    console.log('Available points:', totalPoints);
    console.log('Forced traits:', forcedTraits);
    console.log('Random traits:', randomTraits);
    console.log('Selected traits (final):', selectedTraits);
  }

  if (traitButton) {
    traitButton.addEventListener("click", randomizeTraits);
  }

  function hasQuartermasterTrait() {
    if (qmCheckbox && qmCheckbox.checked) {
    return true;
    }
    if (!currentTraits || currentTraits.length === 0) return false;
    return currentTraits.some(trait => trait.name === "Quartermaster");
  }

  /*WEAPONS*/
  const weapons = [
  {
  "name": "Frontier 73C",
  "image": "https://huntshowdown.wiki.gg/images/Weapon_Frontier_73C.png?840041",
  "price": 41,

  "slotCost": 3,
  "size": "Large Slot",
  "ammoType": "Compact"
  },
  {
  "name": "Frontier 73C Silencer",
  "image": "https://huntshowdown.wiki.gg/images/Weapon_Frontier_73C_Silencer.png?2adc7c",
  "price": 55,

  "slotCost": 3,
  "size": "Large Slot",
  "ammoType": "Compact"
  },
  {
  "name": "Frontier 73C Marksman",
  "image": "https://huntshowdown.wiki.gg/images/Weapon_Frontier_73C_Marksman.png?fff5e2",
  "price": 45,

  "slotCost": 3,
  "size": "Large Slot",
  "ammoType": "Compact"
  },
  {
    "name": "Infantry 73L",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Infantry_73L.png?b7ab4c",
    "price": 78,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Infantry 73L Bayonet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Infantry_73L_Bayonet.png?ca8685",
    "price": 88,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Infantry 73L Sniper",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Infantry_73L_Sniper.png?81760d",
    "price": 90,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Marathon",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Marathon.png?f4934b",
    "price": 68,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Marathon Swift",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Marathon_Swift.png?815b4c",
    "price": 95,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Ranger 73",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Ranger_73.png?8de30e",
    "price": 75,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Ranger 73 Aperture",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Ranger_73_Aperture.png?dd32b8",
    "price": 79,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Ranger 73 Talon",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Ranger_73_Talon.png?fbac8f",
    "price": 85,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Ranger 73 Swift",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Ranger_73_Swift.png?659aad",
    "price": 128,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Vandal 73C",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vandal_73C.png?eb9fd3",
    "price": 35,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Vandal 73C Striker",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vandal_73C_Striker.png?91f6e1",
    "price": 45,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Vandal 73C Bullseye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vandal_73C_Bullseye.png?4f1b61",
    "price": 37,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Bornheim No. 3",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bornheim_No._3.png?ca7dc7",
    "price": 146,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Bornheim No. 3 Match",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bornheim_No._3_Match.png?9726f6",
    "price": 180,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Bornheim No. 3 Extended",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bornheim_No._3_Extended.png?fc1b56",
    "price": 203,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Conversion",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Conversion.png?fdd604",
    "price": 55,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Conversion Chain Pistol",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Conversion_Chain_Pistol.png?3b83fb",
    "price": 84,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "LeMat",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_LeMat.png?30970a",
    "price": 83,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "LeMat Carbine",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_LeMat_Carbine.png?7b7488",
    "price": 115,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "LeMat Carbine Marksman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_LeMat_Carbine_Marksman.png?278e08",
    "price": 127,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Nagant M1895",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895.png?5c8db6",
    "price": 24,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Nagant M1895 Precision",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895_Precision.png?3a670d",
    "price": 29,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Nagant M1895 Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895_Silencer.png?b33be9",
    "price": 27,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Nagant M1895 Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895_Deadeye.png?8af38f",
    "price": 30,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact"
  },
  {
    "name": "New Army",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_New_Army.png?bd193c",
    "price": 90,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "New Army Swift",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_New_Army_Swift.png?432fa7",
    "price": 108,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Officer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Officer.png?e11080",
    "price": 96,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Officer Brawler",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Officer_Brawler.png?d787ba",
    "price": 106,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Officer Carbine",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Officer_Carbine.png?8f464f",
    "price": 183,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "Officer Carbine Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Officer_Carbine_Deadeye.png?243819",
    "price": 192,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Compact"
  },
  {
    "name": "1865 Carbine",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_1865_Carbine.png?2baabc",
    "price": 70,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "1865 Carbine Aperture",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_1865_Carbine_Aperture.png?b39d23",
    "price": 74,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "1865 Carbine Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_1865_Carbine_Silencer.png?81f819",
    "price": 80,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Centennial",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Centennial.png?2a33c1",
    "price": 157,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Centennial Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Centennial_Shorty.png?5258e7",
    "price": 103,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Centennial Sniper",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Centennial_Sniper.png?87b224",
    "price": 181,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Centennial Shorty Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Centennial_Shorty_Silencer.png?eb7de8",
    "price": 137,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Centennial Trauma",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Centennial_Trauma.png?5f9cec",
    "price": 167,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Centennial Pointman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Centennial_Pointman.png?924626",
    "price": 114,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Drilling",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Drilling.png?f932f8",
    "price": 510,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Drilling Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Drilling_Shorty.png?cb7aec",
    "price": 330,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Drilling Hatchet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Drilling_Hatchet.png?597d3f",
    "price": 340,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Maynard Sniper",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Maynard_Sniper.png?6c75a0",
    "price": 139,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Maynard Sniper Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Maynard_Sniper_Silencer.png?8ab661",
    "price": 159,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Springfield 1866",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866.png?4a33b2",
    "price": 38,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Springfield 1866 Marksman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866_Marksman.png?e715c2",
    "price": 42,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Springfield 1866 Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866_Shorty.png?dcd11e",
    "price": 33,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Springfield 1866 Striker",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866_Striker.png?1e852f",
    "price": 43,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Springfield 1866 Bullseye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866_Bullseye.png?1f67c3",
    "price": 35,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Springfield 1866 Bayonet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Springfield_1866_Bayonet.png?c84549",
    "price": 48,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Vetterli 71",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71.png?e9d16f",
    "price": 105,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Vetterli 71 Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71_Deadeye.png?1adf7f",
    "price": 110,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Vetterli 71 Marksman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71_Marksman.png?603a43",
    "price": 116,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Vetterli 71 Bayonet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71_Bayonet.png?baf621",
    "price": 115,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Vetterli 71 Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71_Silencer.png?688f0d",
    "price": 150,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Vetterli 71 Cyclone",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Vetterli_71_Cyclone.png?376e76",
    "price": 280,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Pax",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Pax.png?c4c684",
    "price": 80,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Pax Claw",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Pax_Claw.png?c0fe24",
    "price": 90,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Pax Trueshot",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Pax_Trueshot.png?15f5cc",
    "price": 141,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Scottfield",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Scottfield.png?b2e071",
    "price": 77,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Scottfield Brawler",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Scottfield_Brawler.png?56a9e8",
    "price": 87,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Scottfield Spitfire",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Scottfield_Spitfire.png?c21022",
    "price": 108,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Scottfield Precision",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Scottfield_Precision.png?5db533",
    "price": 85,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Scottfield Swift",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Scottfield_Swift.png?76ef58",
    "price": 95,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Medium"
  },
  {
    "name": "Berthier 1892",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Berthier_1892.png?378314",
    "price": 330,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Berthier 1892 Riposte",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Berthier_1892_Riposte.png?88ef89",
    "price": 340,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Berthier 1892 Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Berthier_1892_Deadeye.png?35b061",
    "price": 347,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Berthier 1892 Marksman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Berthier_1892_Marksman.png?c58a67",
    "price": 363,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Krag",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Krag.png?1bfd6b",
    "price": 450,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Krag Bayonet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Krag_Bayonet.png?8cd2bb",
    "price": 460,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Krag Sniper",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Krag_Sniper.png?520d10",
    "price": 517,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Krag Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Krag_Silencer.png?1e1763",
    "price": 517,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Lebel 1886",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Lebel_1886.png?bf002f",
    "price": 397,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Lebel 1886 Aperture",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Lebel_1886_Aperture.png?2a060a",
    "price": 417,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Lebel 1886 Talon",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Lebel_1886_Talon.png?5b6580",
    "price": 407,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Lebel 1886 Marksman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Lebel_1886_Marksman.png?949043",
    "price": 437,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mako 1895",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mako_1895.png?854f2d",
    "price": 360,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mako 1895 Claw",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mako_1895_Claw.png?656c48",
    "price": 370,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mako 1895 Aperture",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mako_1895_Aperture.png?3f1c4a",
    "price": 378,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Martini-Henry",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Martini-Henry.png?9b66b8",
    "price": 122,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Martini-Henry Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Martini-Henry_Deadeye.png?bfc152",
    "price": 128,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Martini-Henry Riposte",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Martini-Henry_Riposte.png?5b681f",
    "price": 132,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Martini-Henry Marksman",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Martini-Henry_Marksman.png?5dd20c",
    "price": 134,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Martini-Henry Ironside",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Martini-Henry_Ironside.png?25717e",
    "price": 159,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin Obrez",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin_Obrez.png?83297e",
    "price": 290,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin Obrez Mace",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin_Obrez_Mace.png?9653e5",
    "price": 300,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin Obrez Extended",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin_Obrez_Extended.png?585449",
    "price": 350,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin Obrez Match",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin_Obrez_Match.png?49b945",
    "price": 345,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin Obrez Sharpeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin_Obrez_Sharpeye.png?4c3de8",
    "price": 362,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin-Nagant",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin-Nagant.png?a86879",
    "price": 620,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin-Nagant Bayonet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin-Nagant_Bayonet.png?a175bd",
    "price": 630,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin-Nagant Sniper",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin-Nagant_Sniper.png?600556",
    "price": 713,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Mosin-Nagant Avtomat",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Mosin-Nagant_Avtomat.png?9fb909",
    "price": 1250,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Sparks",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Sparks.png?632113",
    "price": 130,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Sparks Pistol",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Sparks_Pistol.png?7381e0",
    "price": 155,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Long"
  },
  {
    "name": "Sparks Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Sparks_Silencer.png?385fc5",
    "price": 150,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Sparks Sniper",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Sparks_Sniper.png?5d4eeb",
    "price": 150,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Long"
  },
  {
    "name": "Sparks Pistol Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Sparks_Pistol_Silencer.png?aa396a",
    "price": 178,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Long"
  },
  {
    "name": "Haymaker",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Haymaker.png?a1f197",
    "price": 279,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Long"
  },
  {
    "name": "Uppercut",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Uppercut.png?cf8461",
    "price": 310,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Long"
  },
  {
    "name": "Uppercut Precision",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Uppercut_Precision.png?760269",
    "price": 321,

    "slotCost": 1,
    "size": "Medium Slot",
    "ammoType": "Long"
  },
  {
    "name": "Uppercut Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Uppercut_Deadeye.png?2152ce",
    "price": 337,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Long"
  },
  {
    "name": "Auto-5",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Auto-5.png?474360",
    "price": 600,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Auto-4 Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Auto-4_Shorty.png?3cf80c",
    "price": 300,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Rival 78",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Rival_78.png?a04a42",
    "price": 150,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Rival 78 Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Rival_78_Shorty.png?8f7acc",
    "price": 125,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Rival 78 Trauma",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Rival_78_Trauma.png?9c0dfb",
    "price": 160,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Rival 78 Mace",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Rival_78_Mace.png?24d15f",
    "price": 135,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Romero 77",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Romero_77.png?28a4f3",
    "price": 66,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Romero 77 Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Romero_77_Shorty.png?6baad5",
    "price": 46,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Romero 77 Talon",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Romero_77_Talon.png?bd6bdf",
    "price": 76,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Romero 77 Hatchet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Romero_77_Hatchet.png?232b25",
    "price": 56,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Romero 77 Alamo",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Romero_77_Alamo.png?436b10",
    "price": 98,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Slate",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Slate.png?1b0c21",
    "price": 333,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Slate Riposte",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Slate_Riposte.png?a1e8f6",
    "price": 343,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Specter 1882",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Specter_1882.png?8c2b99",
    "price": 188,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Specter 1882 Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Specter_1882_Shorty.png?50a076",
    "price": 164,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Specter 1882 Bayonet",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Specter_1882_Bayonet.png?8010e5",
    "price": 198,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Terminus",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Terminus.png?d38ae5",
    "price": 238,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Terminus Shorty",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Terminus_Shorty.png?9aa4b3",
    "price": 218,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Shells"
  },
  {
    "name": "Bomb Lance",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bomb_Lance.png?3a43ab",
    "price": 199,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Special"
  },
  {
    "name": "Bomb Launcher",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bomb_Launcher.png?23f64d",
    "price": 110,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Special"
  },
  {
    "name": "Chu Ko Nu",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Chu_Ko_Nu.png?af4525",
    "price": 75,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Special"
  },
  {
    "name": "Crossbow",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Crossbow.png?d58ef1",
    "price": 50,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Special"
  },
  {
    "name": "Crossbow Deadeye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Crossbow_Deadeye.png?9e19ca",
    "price": 53,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Special"
  },
  {
    "name": "Dolch 96",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Dolch_96.png?bc6f0b",
    "price": 690,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Special"
  },
  {
    "name": "Dolch 96 Claw",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Dolch_96_Claw.png?51e55f",
    "price": 700,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Special"
  },
  {
    "name": "Dolch 96 Bullseye",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Dolch_96_Bullseye.png?ca3410",
    "price": 725,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Special"
  },
  {
    "name": "Dolch 96 Precision",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Dolch_96_Precision.png?7ba2c9",
    "price": 730,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Special"
  },
  {
    "name": "Hand Crossbow",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Hand_Crossbow.png?f4452f",
    "price": 30,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": "Special"
  },
  {
    "name": "Hunting Bow",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Hunting_Bow.png?bba822",
    "price": 57,

    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Special"
  },
  {
    "name": "Nitro Express",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nitro_Express.png?8e6819",
    "price": 1015,

    "slotCost": 3,
    "size": "Large Slot",
    "ammoType": "Special"
  },
  {
    "name": "Baseball Bat",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Baseball_Bat.png?b3d147",
    "price": 40,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": ""
  },
  {
    "name": "Cavalry Saber",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Cavalry_Saber.png?defbfc",
    "price": 50,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": ""
  },
  {
    "name": "Combat Axe",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Combat_Axe.png?7a7357",
    "price": 40,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": ""
  },
  {
    "name": "Katana",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Katana.png?96bda1",
    "price": 115,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": ""
  },
  {
    "name": "Machete",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Machete.png?6b12f4",
    "price": 30,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": ""
  },
  {
    "name": "Railroad Hammer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Railroad_Hammer.png?f8fca0",
    "price": 45,

    "slotCost": 1,
    "size": "Small Slot",
    "ammoType": ""
  },
  {
    "name": "Pair of Nagant M1895",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895.png?5c8db6",
    "price": 48,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Nagant M1895", "Nagant M1895"]
  },
  {
    "name": "Pair of Nagant M1895 Silencer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Nagant_M1895_Silencer.png?b33be9",
    "price": 54,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Nagant M1895 Silencer", "Nagant M1895 Silencer"]
  },
  {
    "name": "Pair of Conversion Pistol",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Conversion.png?fdd604",
    "price": 110,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Conversion Pistol", "Conversion Pistol"]
  },
  {
    "name": "Pair of Conversion Chain Pistol",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Conversion_Chain_Pistol.png?3b83fb",
    "price": 168,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Conversion Chain Pistol", "Conversion Chain Pistol"]
  },
  {
    "name": "Pair of Uppercut",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Uppercut.png?cf8461",
    "price": 620,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Long",
    "isDual": true,
    "baseWeapons": ["Uppercut", "Uppercut"]
  },
  {
    "name": "Pair of Pax",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Pax.png?c4c684",
    "price": 160,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium",
    "isDual": true,
    "baseWeapons": ["Pax", "Pax"]
  },
  {
    "name": "Pair of Pax Claw",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Pax_Claw.png?c0fe24",
    "price": 180,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Medium",
    "isDual": true,
    "baseWeapons": ["Pax Claw", "Pax Claw"]
  },
  {
    "name": "Pair of Bornheim No.3",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bornheim_No._3.png?ca7dc7",
    "price": 292,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Bornheim No.3", "Bornheim No.3"]
  },
  {
    "name": "Pair of Bornheim No.3 Extended",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Bornheim_No._3_Extended.png?fc1b56",
    "price": 406,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Bornheim No.3 Extended", "Bornheim No.3 Extended"]
  },
  {
    "name": "Pair of Officer",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Officer.png?e11080",
    "price": 192,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Officer", "Officer"]
  },
  {
    "name": "Officer Brawler",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Officer_Brawler.png?d787ba",
    "price": 212,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Compact",
    "isDual": true,
    "baseWeapons": ["Officer Brawler", "Officer Brawler"]
  },
  {
    "name": "Pair of Dolch 96",
    "image": "https://huntshowdown.wiki.gg/images/Weapon_Dolch_96.png?bc6f0b",
    "price": 1380,
    "slotCost": 2,
    "size": "Medium Slot",
    "ammoType": "Special",
    "isDual": true,
    "baseWeapons": ["Dolch 96", "Dolch 96"]
  }
  ]

  function pickRandom(arr) {
  if (!arr.length) return null;
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
  }

  const largeWeapons  = weapons.filter(w => w.slotCost === 3);
  const mediumWeapons = weapons.filter(w => w.slotCost === 2);
  const smallWeapons  = weapons.filter(w => w.slotCost === 1);

  const usableWeapons = weapons.filter(w => w.slotCost > 0);

  function getRandomLoadout(hasQuartermaster) {
    if (hasQuartermaster) {
      // Force Large + Medium
      const primary  = pickRandom(largeWeapons);
      const secondary = pickRandom(mediumWeapons);

      return { primary, secondary };
    }

    // No Quartermaster: max 4 slot points for both guns
    const maxSlots = 4;

    // 1) Pick any primary that fits within total budget
    // (Large, Medium or Small, as long as we can still possibly fit another)
    const primary = pickRandom(usableWeapons);
    let remaining = maxSlots - primary.slotCost;

    // 2) Try to pick a secondary that fits the remaining slots
    let secondary = null;
    if (remaining > 0) {
      const candidates = usableWeapons.filter(
        w => w !== primary && w.slotCost <= remaining
      );
      if (candidates.length) {
        secondary = pickRandom(candidates);
      }
    }

    return { primary, secondary };
}

  const primaryBar   = document.getElementById("primary-weapon");
  const secondaryBar = document.getElementById("secondary-weapon");

  function buildWeaponTooltip(w) {
    if (!w) return "";

    const lines = [];

    lines.push(w.name);

    if (w.size) {
      lines.push(w.size);
    }
    if (w.ammoType) {
      lines.push(`Ammo: ${w.ammoType}`);
    } else {
      lines.push(`Melee`);
    }

    if (typeof w.price !== "undefined" && w.price !== null) {
      lines.push(`Price: $${w.price}`);
    }

    return lines.join(" • ");
  }

  function renderWeaponIntoBar(weapon, barEl) {
  barEl.innerHTML = "";
  barEl.removeAttribute("data-tooltip"); 
  if (!weapon) return;

  // Make sure the bar itself behaves correctly
  barEl.style.position = "relative";
  barEl.style.display = "flex";
  barEl.style.alignItems = "center";
  barEl.style.justifyContent = "center";
  barEl.style.overflow = "visible";

  // Wrapper for 1 or 2 images
  const wrapper = document.createElement("div");
  wrapper.classList.add("weapon-wrapper");
  if (weapon.isDual) {
    wrapper.classList.add("weapon-wrapper-dual");
    wrapper.style.gap = "0px";
  } else {
    wrapper.style.gap = "0";
  }

  // Force wrapper to be horizontal flex
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "row";
  wrapper.style.alignItems = "center";
  wrapper.style.justifyContent = "center";
  wrapper.style.flexWrap = "nowrap";
  wrapper.style.maxHeight = "100%";

  const copies = weapon.isDual ? 2 : 1;

  for (let i = 0; i < copies; i++) {
    const img = document.createElement("img");
    img.src = weapon.image;
    img.alt = weapon.name;
    img.classList.add("weapon-icon");

    // Base: keep aspect ratio
  img.style.display    = "block";
  img.style.objectFit  = "contain";
  img.style.flexShrink = "0";
  img.style.height     = "auto";
  img.style.width      = "auto";

  if (weapon.isDual) {
    // Dual pistols: a bit smaller so two fit comfortably
    img.style.maxHeight = "100%";
    img.style.maxWidth  = "100%";

    // Overlap the SECOND pistol slightly on top of the first
    if (i === 1) {
      img.style.marginLeft = "-120px";   // tweak -12 / -20px to taste
    }
  } else {
    // Single weapon: can fill most of the bar
    img.style.maxHeight = "95%";
    img.style.maxWidth  = "100%";
  }

    wrapper.appendChild(img);
  }

  barEl.appendChild(wrapper);

  barEl.dataset.tooltip = buildWeaponTooltip(weapon);
  }



  const randomWeaponsBtn = document.getElementById("randomize-weapons");

  function randomizeWeapons() {
    if (!primaryBar || !secondaryBar) return;

    const hasQM = hasQuartermasterTrait();
    const { primary, secondary } = getRandomLoadout(hasQM);

    renderWeaponIntoBar(primary, primaryBar);
    renderWeaponIntoBar(secondary, secondaryBar);

    console.log("Loadout:", { hasQuarterMaster: hasQM, primary, secondary });
  }

  if (randomWeaponsBtn && primaryBar && secondaryBar) {
    randomWeaponsBtn.addEventListener("click", randomizeWeapons);
  }

  /*  Tools and Consumables  */
  const tools = [
    {
      name: "Blank Fire Decoys",
      image: "https://huntshowdown.wiki.gg/images/Tool_Blank_Fire_Decoys.png?74f6a9"
    },
    {
      name: "Decoys",
      image: "https://huntshowdown.wiki.gg/images/Tool_Decoys.png?10b313"
    },
    {
      name: "Decoy Fuses",
      image: "https://huntshowdown.wiki.gg/images/Tool_Decoy_Fuses.png?7a97cc"
    },
    {
      name: "First Aid Kit",
      image: "https://huntshowdown.wiki.gg/images/Tool_First_Aid_Kit.png?9e26db"
    },
    {
      name: "Flare Pistol",
      image: "https://huntshowdown.wiki.gg/images/Tool_Flare_Pistol.png?b1acee"
    },
    {
      name: "Fusees",
      image: "https://huntshowdown.wiki.gg/images/Tool_Fusees.png?65f5a7"
    },
    {
      name: "Dusters",
      image: "https://huntshowdown.wiki.gg/images/Tool_Dusters.png?6c5376"
    },
    {
      name: "Heavy Knife",
      image: "https://huntshowdown.wiki.gg/images/Tool_Heavy_Knife.png?e47586"
    },
    {
      name: "Knife",
      image: "https://huntshowdown.wiki.gg/images/Tool_Knife.png?829d78"
    },
    {
      name: "Knuckle Knife",
      image: "https://huntshowdown.wiki.gg/images/Tool_Knuckle_Knife.png?7c576f"
    },
    {
      name: "Throwing Axes",
      image: "https://huntshowdown.wiki.gg/images/Tool_Throwing_Axes.png?fb4c4d"
    },
    {
      name: "Throwing Knives",
      image: "https://huntshowdown.wiki.gg/images/Tool_Throwing_Knives.png?af573b"
    },
    {
      name: "Throwing Spear",
      image: "https://huntshowdown.wiki.gg/images/Tool_Throwing_Spear.png?d8d172"
    },
    {
      name: "Derringer Pennyshot",
      image: "https://huntshowdown.wiki.gg/images/Tool_Derringer_Pennyshot.png?c323ad"
    },
    {
      name: "Quad Derringer",
      image: "https://huntshowdown.wiki.gg/images/Tool_Quad_Derringer.png?71f538"
    },
    {
      name: "Alert Trip Mines",
      image: "https://huntshowdown.wiki.gg/images/Tool_Alert_Trip_Mines.png?11fff2"
    },
    {
      name: "Concertina Trip Mines",
      image: "https://huntshowdown.wiki.gg/images/Tool_Concertina_Trip_Mines.png?3909a5"
    },
    {
      name: "Poison Trip Mines",
      image: "https://huntshowdown.wiki.gg/images/Tool_Poison_Trip_Mines.png?9e8051"
    },
    {
      name: "Bear Traps",
      image: "https://huntshowdown.wiki.gg/images/Tool_Bear_Traps.png?5c7440"
    },
    {
      name: "Choke Bombs",
      image: "https://huntshowdown.wiki.gg/images/Tool_Choke_Bombs.png?492d21"
    },
    {
      name: "Spyglass",
      image: "https://huntshowdown.wiki.gg/images/Tool_Spyglass.png?d53f55"
    }
  ];

  const consumables = [
    {
      name: "Ammo Box",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Ammo_Box.png?1eb52a"
    },
    {
      name: "Tool Box",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Tool_Box.png?152fc9"
    },
    {
      name: "Fire Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Fire_Bomb.png?54f085"
    },
    {
      name: "Hellfire Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Hellfire_Bomb.png?eb2d12"
    },
    {
      name: "Liquid Fire Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Liquid_Fire_Bomb.png?4ee589"
    },
    {
      name: "Dynamite Stick",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Dynamite_Stick.png?c6cc1a"
    },
    {
      name: "Dynamite Bundle",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Dynamite_Bundle.png?46348c"
    },
    {
      name: "Waxed Dynamite Stick",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Waxed_Dynamite_Stick.png?215599"
    },
    {
      name: "Big Dynamite Bundle",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Big_Dynamite_Bundle.png?8cf45e"
    },
    {
      name: "Sticky Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Sticky_Bomb.png?4507ef"
    },
    {
      name: "Frag Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Frag_Bomb.png?9e5646"
    },
    {
      name: "Dark Dynamite Satchel",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Dark_Dynamite_Satchel.png?992c28"
    },
    {
      name: "Hive Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Hive_Bomb.png?555be3"
    },
    {
      name: "Poison Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Poison_Bomb.png?81bb31"
    },
    {
      name: "Chaos Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Chaos_Bomb.png?de2beb"
    },
    {
      name: "Antidote Shot",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Antidote_Shot.png?70d0c2"
    },
    {
      name: "Antidote Shot (Weak)",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Antidote_Shot_Weak.png?728a1f"
    },
    {
      name: "Regeneration Shot",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Regeneration_Shot.png?c1d570"
    },
    {
      name: "Regeneration Shot (Weak)",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Regeneration_Shot_Weak.png?3b50ce"
    },
    {
      name: "Stamina Shot",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Stamina_Shot.png?f2bbff"
    },
    {
      name: "Stamina Shot (Weak)",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Stamina_Shot_Weak.png?3d890a"
    },
    {
      name: "Medical Pack",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Medical_Pack.png?38d68f"
    },
    {
      name: "Vitality Shot",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Vitality_Shot.png?338957"
    },
    {
      name: "Vitality Shot (Weak)",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Vitality_Shot_Weak.png?8808fb"
    },
    {
      name: "Recovery Shot",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Recovery_Shot.png?893d86"
    },
    {
      name: "Stalker Beetle",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Stalker_Beetle.png?ce3a1c"
    },
    {
      name: "Choke Beetle",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Choke_Beetle.png?de4f9f"
    },
    {
      name: "Fire Beetle",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Fire_Beetle.png?86739a"
    },
    {
      name: "Concertina Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Concertina_Bomb.png?d8f8a4"
    },
    {
      name: "Flash Bomb",
      image: "https://huntshowdown.wiki.gg/images/Consumable_Flash_Bomb.png?878fe7"
    }
  ];

  function getRandomUniqueItems(sourceArray, count) {
    const pool = [...sourceArray];
    const result = [];

    for (let i = 0; i < count && pool.length > 0; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      result.push(pool.splice(idx, 1)[0]);
    }

    return result;
  }

  function randomizeToolsAndConsumables() {
    const toolSlots = document.querySelectorAll(".tool-slot");
    const consumableSlots = document.querySelectorAll(".consumable-slot");

    // Checkbox
    const firstAidCheckbox = document.getElementById("force-first-aid");
    const forceFirstAid    = firstAidCheckbox ? firstAidCheckbox.checked : false;

    // Tools randomizer
    let toolsPool = [...tools];
    let forcedTool = null;

    if (forceFirstAid) {
      forcedTool = toolsPool.find(t => t.name === "First Aid Kit");
      toolsPool = toolsPool.filter(t => t.name !== "First Aid Kit");
    }

    // Randomize remaining tools
    const randomTools = getRandomUniqueItems(toolsPool, toolSlots.length - (forcedTool ? 1 : 0));

    // Put forced First Aid Kit in slot 0
    const finalTools = forcedTool
      ? [forcedTool, ...randomTools]
      : randomTools;

    // Render tools
    toolSlots.forEach((slot, i) => {
      slot.innerHTML = "";
      slot.removeAttribute("data-tooltip");

      const item = finalTools[i];
      if (!item) return;

      slot.setAttribute("data-tooltip", item.name);
      slot.innerHTML = `
        <div class="loadout-item">
          <img src="${item.image}" alt="${item.name}" class="loadout-icon">
        </div>
      `;
    });

    // Randomize & render consumables
    const randomConsumables = getRandomUniqueItems(consumables, consumableSlots.length);

    consumableSlots.forEach((slot, i) => {
      slot.innerHTML = "";
      slot.removeAttribute("data-tooltip");

      const item = randomConsumables[i];
      if (!item) return;

      slot.setAttribute("data-tooltip", item.name);

      slot.innerHTML = `
        <div class="loadout-item">
          <img src="${item.image}" alt="${item.name}" class="loadout-icon">
        </div>
      `;
    });
  }

  const rendomGearBtn = document.getElementById("randomize-gear-btn");

  if (rendomGearBtn) {
    rendomGearBtn.addEventListener("click", randomizeToolsAndConsumables);
  }
  




});