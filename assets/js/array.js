const mods = [
  { id: 1, titulo: "dungeons and combat", descricao: "armaduras espadas, porem sem bosses e dangeus", link: "Dungeons And Combat - Minecraft Mods - CurseForge" },
  { id: 2, titulo: "when dungeons arise", descricao: "novas dangeus sem boss", link: "When Dungeons Arise - Forge! - Files - Minecraft Mods - CurseForge" },
  { id: 3, titulo: "quest e rewards", descricao: "add quest secundarias", link: "Realm RPG: Quests & Rewards - Files - Minecraft Mods - CurseForge" },
  { id: 5, titulo: "improvable squius tres", descricao: "add progressão de skills", link: "Improvable Skills 3 - Files - Minecraft Mods - CurseForge" },
  { id: 6, titulo: "serene seasons", descricao: "estaçoes do ano e cllima automatico", link: "https://www.curseforge.com/minecraft/mc-mods/serene-seasons/files/all?page=1&pageSize=20&version=1.20.1&gameVersionTypeId=1&showAlphaFiles=hide" },
  { id: 7, titulo: "epic fight", descricao: "modifica as animações do player", link: "Epic Fight - Files - Minecraft Mods - CurseForge" },
  { id: 8, titulo: "better combat", descricao: "modifica as animações do player", link: "https://www.curseforge.com/minecraft/mc-mods/better-combat-by-daedelus/files/all?page=1&pageSize=20&version=1.20.1&gameVersionTypeId=1&showAlphaFiles=hide" },
  { id: 9, titulo: "the twilight forest", descricao: "add dimensão, boses e itens", link: "https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest/files/all?page=1&pageSize=20&version=1.20.1&gameVersionTypeId=1&showAlphaFiles=hide" },
  { id: 10, titulo: "ftb quest", descricao: "add quest principal (que agente vai fzr)", link: "FTB Quests (NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 11, titulo: "sophisticated backpack", descricao: "mochila", link: "https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/all?page=1&pageSize=20&version=1.20.1&gameVersionTypeId=1&showAlphaFiles=hide" },
  { id: 12, titulo: "iron chest", descricao: "baus com tamanhos variados", link: "https://www.curseforge.com/minecraft/mc-mods/iron-chests/files/all?page=1&pageSize=20&version=1.20.1&gameVersionTypeId=1&showAlphaFiles=hide" },
  { id: 13, titulo: "yung's better cave", descricao: "modifica a geração das cavernas", link: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-caves" },
  { id: 14, titulo: "yung's biome caves", descricao: "bioma em cavernas", link: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-caves" },
  { id: 15, titulo: "yung's api", descricao: "api do yong's mod", link: "YUNG's API (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 16, titulo: "yung's nether foretress", descricao: "melhora a fortaleza do nether", link: "YUNG's Better Nether Fortresses (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 17, titulo: "yung''s witch huts", descricao: "melhora a casa de bruxa", link: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-witch-huts" },
  { id: 18, titulo: "yung's better end island", descricao: "pequenas melhorias na ilha do end", link: "YUNG's Better End Island (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 19, titulo: "yung's better jungle temple", descricao: "melhora o templo da jungle", link: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-jungle-temples" },
  { id: 20, titulo: "yung's better ocean  monument", descricao: "melhora o monuemnto do oceano", link: "YUNG's Better Ocean Monuments (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 21, titulo: "yung's better desert temple", descricao: "melhora o templo do deserto", link: "https://www.curseforge.com/minecraft/mc-mods/yungs-better-desert-temples" },
  { id: 22, titulo: "yung's better dungeons ", descricao: "add uma nova dungeon", link: "YUNG's Better Dungeons (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 23, titulo: "yung's better stronghold", descricao: "melhora a stronghold", link: "YUNG's Better Strongholds (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 24, titulo: "yung's better mineshaft", descricao: "melhora as minas abandonadas", link: "YUNG's Better Mineshafts (Forge/NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 25, titulo: "ribbits", descricao: "sapos q pesca e canta", link: "https://www.curseforge.com/minecraft/mc-mods/ribbits" },
  { id: 27, titulo: "the crias money", descricao: "add dinheiro", link: "Good O'l Currency The Crias - Minecraft Mods - CurseForge" },
  { id: 28, titulo: "rats", descricao: "rayinho dahora", link: "Rats - Minecraft Mods - CurseForge" },
  { id: 29, titulo: "music box", descricao: "caixa de som que toca msc", link: "https://www.curseforge.com/minecraft/mc-mods/music-box" },
  { id: 30, titulo: "simples tumbes", descricao: "tumbas do renascimento", link: "Simple Tomb - Gallery - Minecraft Mods - CurseForge" },
  { id: 35, titulo: "aquamerai", descricao: "add ambientação ao mar, mobs, bosses, armas e itens", link: "Aquamirae (Forge) - Files - Minecraft Mods - CurseForge" },
  { id: 36, titulo: "better end", descricao: "add biomas ao the end", link: "BetterEnd Forge - Files - Minecraft Mods - CurseForge" },
  { id: 37, titulo: "terralith", descricao: "aprimora a geração de mundo e add biomas", link: "Terralith - Files - Minecraft Mods - CurseForge" },
  { id: 38, titulo: "CTOV", descricao: "arpimora a geraçoa de vilas no mine", link: "ChoiceTheorem's Overhauled Village - Files - Minecraft Mods - CurseForge" },
  { id: 39, titulo: "towns and towers", descricao: "novas vilas e outras estruturas em diversos biomas", link: "Towns and Towers - Files - Minecraft Mods - CurseForge" },
  { id: 40, titulo: "xaeros world map", descricao: "mapa", link: "Xaero's World Map - Files - Minecraft Mods - CurseForge" },
  { id: 41, titulo: "L_Elder's_Cataclysm", descricao: "add varios novos bosses e estruturas nas 3 dimenções", link: "L_Ender 's Cataclysm - Files - Minecraft Mods - CurseForge" },
  { id: 42, titulo: "lootr", descricao: "loot indivual em cada bau", link: "Lootr (Forge & NeoForge) - Files - Minecraft Mods - CurseForge" },
  { id: 43, titulo: "endrem", descricao: "novos olhos do end para abrir o portal", link: "End Remastered [NeoForge/Fabric] - Files - Minecraft Mods - CurseForge" },
  { id: 44, titulo: "nature compass", descricao: "add uma bussola para encontrar biomas", link: "Nature's Compass - Files - Minecraft Mods - CurseForge" },
  { id: 45, titulo: "explorer compass", descricao: "add uma bussola para encontrar estruturas", link: "Explorer's Compass - Files - Minecraft Mods - CurseForge" },
  { id: 46, titulo: "ars noveau", descricao: "add magias", link: "Ars Nouveau - Files - Minecraft Mods - CurseForge" },
  { id: 47, titulo: "alex mobs", descricao: "add novos mobs ", link: "https://www.curseforge.com/minecraft/mc-mods/alexs-mobs" },
  { id: 48, titulo: "true ending", descricao: "aprimora a batalha final contra o dragão", link: "https://www.curseforge.com/minecraft/mc-mods/true-ending" },
  { id: 49, titulo: "tom's simple storage", descricao: "add um sistema de conexão entre seus baus", link: "https://www.curseforge.com/minecraft/mc-mods/toms-storage" },
  { id: 50, titulo: "jei", descricao: "jei", link: "https://www.curseforge.com/minecraft/mc-mods/jei" },
  { id: 51, titulo: "artifacts", descricao: "adiciona artefatos com habilidades unicas", link: "https://www.curseforge.com/minecraft/mc-mods/artifacts" },
  { id: 52, titulo: "EEEAB's mobs", descricao: "add dungeons, bosses, mobs e itens", link: "https://www.curseforge.com/minecraft/mc-mods/eeeabs-mobs" },
  { id: 53, titulo: "annihilation recreated", descricao: "add um boss em uma coordenada especifica", link: "https://www.curseforge.com/minecraft/mc-mods/annihilation-recreated" },
  { id: 54, titulo: "vein miner", descricao: "mineração em veia", link: "https://www.curseforge.com/minecraft/mc-mods/veinminer" },
  { id: 55, titulo: "enchanting infuser", descricao: "add mesa de encantamento melhjor", link: "https://www.curseforge.com/minecraft/mc-mods/enchanting-infuser" },
  { id: 56, titulo: "relics", descricao: "add reliquias diferentes", link: "https://www.curseforge.com/minecraft/mc-mods/relics" },
  { id: 57, titulo: "create", descricao: "add mecanismo de automatização", link: "https://www.curseforge.com/minecraft/mc-mods/create" },
  { id: 58, titulo: "mahou tsukai", descricao: "add itens magicos", link: "https://www.curseforge.com/minecraft/mc-mods/mahou-tsukai" }
];

mods.forEach((mod) => {
  return document.getElementById("lista").innerHTML += `
  <div class="mod">
    <h4>${mod.titulo}</h4>
    <p>${mod.descricao}</p>
    <a href="${mod.link}">Download</a>
  </div>
  `
});

const input = document.getElementById("mods-input");

input.addEventListener("input", () => {
  document.getElementById("lista").innerHTML = "";
  mods.forEach((mod) => {
    if (mod.titulo.toLowerCase().includes(input.value.toLowerCase())) {
      document.getElementById("lista").innerHTML += `
      <div class="mod">
        <h4>${mod.titulo}</h4>
        <p>${mod.descricao}</p>
        <a href="${mod.link}">Download</a>
      </div>
      `
    }
  });
});