
const characters = [
    // =========================
    // EQUIPE ALPHA — OS CARAS (Α)
    // =========================
    {
        name: "FireFox",
        realName: "João Carlos “JC” Phoenix Winter",
        team: "alpha",
        teamName: "Equipe Alpha — Os Caras (Α)",
        power: "Pirocinese Viva",
        description: "O jovem herói que controla chamas através das emoções.",
        image: "images/firefox.png",
        page: "index.html"
    },
    {
        name: "Jenny Wakeman",
        realName: "Jennifer Wakeman — J3N//NY (XJ-09)",
        team: "alpha",
        teamName: "Equipe Alpha — Os Caras (Α)",
        power: "Arsenal Nanite Adaptativo",
        description: "Uma androide capaz de transformar o próprio corpo em armas e ferramentas.",
        image: "images/jenny-wakeman.png",
        page: "jenny-wakeman.html"
    },
    {
        name: "Sunspot",
        realName: "Calebe Maia Gomes da Silva",
        team: "alpha",
        teamName: "Equipe Alpha — Os Caras (Α)",
        power: "Núcleo Solar",
        description: "Um meta-humano que absorve energia solar e a converte em explosões devastadoras.",
        image: "images/sunspot.png",
        page: "sunspot.html"
    },
    {
        name: "Ivy Blossom",
        realName: "Ivy Jones",
        team: "alpha",
        teamName: "Equipe Alpha — Os Caras (Α)",
        power: "Biomancia Vegetal",
        description: "Uma heroína capaz de controlar plantas e criar vida vegetal.",
        image: "images/ivy-blossom.png",
        page: "ivy-blossom.html"
    },
    {
        name: "Nemesis",
        realName: "Desconhecido",
        team: "alpha",
        teamName: "Equipe Alpha — Os Caras (Α)",
        power: "Trevas Abissais",
        description: "Um humano artificial que manipula trevas vivas e distorce dimensões.",
        image: "images/nemesis.png",
        page: "nemesis.html"
    },
    {
        name: "Midnight Carapace",
        realName: "Morgana Blackwell",
        team: "alpha",
        teamName: "Equipe Alpha — Os Caras (Α)",
        power: "Endurecimento Corporal",
        description: "Uma guerreira bestial especializada em resistência, defesa e proteção dos aliados.",
        image: "images/midnight-carapace.png",
        page: "midnight-carapace.html"
    },

    // =========================
    // EQUIPE BETA — OS CABEÇAS (Β)
    // =========================
    {
        name: "Wild Mustang",
        realName: "Kate Smith",
        team: "beta",
        teamName: "Equipe Beta — Os Cabeças (Β)",
        power: "Espírito do Mustang",
        description: "Uma híbrida de minotauro e centauro que combina força, velocidade e disparos de plasma.",
        image: "images/wild-mustang.png",
        page: "wild-mustang.html"
    },
    {
        name: "Spark Static",
        realName: "Benard Reyes",
        team: "beta",
        teamName: "Equipe Beta — Os Cabeças (Β)",
        power: "Carga Viva",
        description: "Um herói carismático que manipula eletricidade, magnetismo e tecnologia.",
        image: "images/spark-static.png",
        page: "spark-static.html"
    },
    {
        name: "Kriegshammer",
        realName: "Thomas Ritter",
        team: "beta",
        teamName: "Equipe Beta — Os Cabeças (Β)",
        power: "Kriegssystem",
        description: "Um combatente equipado com uma armadura tecnológica e um poderoso martelo cinético.",
        image: "images/kriegshammer.png",
        page: "kriegshammer.html"
    },
    {
        name: "Lichtfluch",
        realName: "Finn Wolff",
        team: "beta",
        teamName: "Equipe Beta — Os Cabeças (Β)",
        power: "Maldição do Lobisomem",
        description: "Um jovem amaldiçoado que luta para preservar sua humanidade apesar de sua forma bestial.",
        image: "images/lichtfluch.png",
        page: "lichtfluch.html"
    },

    // =========================
    // EQUIPE GAMMA — OS SENTIMENTAIS (Γ)
    // =========================
    {
        name: "Soft Paws",
        realName: "Marcy Carter",
        team: "gamma",
        teamName: "Equipe Gamma — Os Sentimentais (Γ)",
        power: "Massa Viva",
        description: "Uma heroína felina que altera seu tamanho, massa e densidade.",
        image: "images/soft-paws.png",
        page: "soft-paws.html"
    },
    {
        name: "Flameback",
        realName: "Mason Reinhardt",
        team: "gamma",
        teamName: "Equipe Gamma — Os Sentimentais (Γ)",
        power: "Respiração Infernal",
        description: "Um bestial dracônico protetor que domina o fogo e combina força com ataques devastadores.",
        image: "images/flameback.png",
        page: "flameback.html"
    },
    {
        name: "ToxicTail",
        realName: "Selene Toxinhazard",
        team: "gamma",
        teamName: "Equipe Gamma — Os Sentimentais (Γ)",
        power: "Toxicologia Viva",
        description: "Uma heroína bestial que produz e controla substâncias tóxicas.",
        image: "images/toxictail.png",
        page: "toxictail.html"
    },
    {
        name: "Lanzar Coneja",
        realName: "Bella Ravenwood",
        team: "gamma",
        teamName: "Equipe Gamma — Os Sentimentais (Γ)",
        power: "Rabbit Bone",
        description: "Uma guerreira coelha marcada pelo passado, com habilidades físicas e combativas especiais.",
        image: "images/lanzar-coneja.png",
        page: "lanzar-coneja.html"
    },
    {
        name: "Dog Watch",
        realName: "Maribel Sandiego",
        team: "gamma",
        teamName: "Equipe Gamma — Os Sentimentais (Γ)",
        power: "Rede Instintiva",
        description: "Uma heroína canina capaz de rastrear, mapear ambientes e estabelecer conexões mentais.",
        image: "images/dog-watch.png",
        page: "dog-watch.html"
    },

    // =========================
    // EQUIPE DELTA — OS ASTROS (Δ)
    // =========================
    {
        name: "Starboy",
        realName: "Conner King",
        team: "delta",
        teamName: "Equipe Delta — Os Astros (Δ)",
        power: "Poderes Solares Kalystronianos",
        description: "Um clone criado para substituir Starman, dotado de força, voo e visão de calor.",
        image: "images/starboy.png",
        page: "starboy.html"
    },
    {
        name: "Terra",
        realName: "Tersa Kamiński",
        team: "delta",
        teamName: "Equipe Delta — Os Astros (Δ)",
        power: "Geoquinese",
        description: "Uma jovem capaz de controlar terra, pedras e minerais, cujo poder acompanha suas emoções.",
        image: "images/terra.png",
        page: "terra.html"
    },
    {
        name: "Blue Scarab",
        realName: "Jorge Donatello",
        team: "delta",
        teamName: "Equipe Delta — Os Astros (Δ)",
        power: "Armadura de Escaravelho Alienígena",
        description: "Um adolescente ligado a um escaravelho alienígena vivo que cria armas e se adapta às ameaças.",
        image: "images/blue-scarab.png",
        page: "blue-scarab.html"
    },
    {
        name: "Dandara Tigra",
        realName: "Indianara Acsa",
        team: "delta",
        teamName: "Equipe Delta — Os Astros (Δ)",
        power: "Instinto Predador",
        description: "Uma heroína brasileira com reflexos, sentidos aguçados e habilidades físicas felinas.",
        image: "images/dandara-tigra.png",
        page: "dandara-tigra.html"
    },
    {
        name: "Kid Bolt",
        realName: "Miles Thompson",
        team: "delta",
        teamName: "Equipe Delta — Os Astros (Δ)",
        power: "Supervelocidade",
        description: "Um velocista impulsivo capaz de vibrar através da matéria e realizar ataques cinéticos.",
        image: "images/kid-bolt.png",
        page: "kid-bolt.html"
    },

    // =========================
    // EQUIPE EPSILON — AS NINJAS (Ε)
    // =========================
    {
        name: "Crimson Lotus",
        realName: "Akari Mitsumine",
        team: "epsilon",
        teamName: "Equipe Epsilon — As Ninjas (Ε)",
        power: "Massa Espiritual",
        description: "Uma líder ninja que concentra energia espiritual para ampliar sua força, densidade e defesa.",
        image: "images/crimson-lotus.png",
        page: "crimson-lotus.html"
    },
    {
        name: "Blue Panda",
        realName: "Hanae Fujimoto",
        team: "epsilon",
        teamName: "Equipe Epsilon — As Ninjas (Ε)",
        power: "Impacto Cinético",
        description: "Uma jovem capaz de absorver impactos e devolvê-los como poderosas ondas de choque.",
        image: "images/blue-panda.png",
        page: "blue-panda.html"
    },
    {
        name: "Vipress",
        realName: "Joana Nogueira",
        team: "epsilon",
        teamName: "Equipe Epsilon — As Ninjas (Ε)",
        power: "Corpo Constritor",
        description: "Uma lutadora brasileira extremamente flexível, especializada em imobilizações e combate corporal.",
        image: "images/vipress.png",
        page: "vipress.html"
    },
    {
        name: "Night Panther",
        realName: "Fatin El Kadar",
        team: "epsilon",
        teamName: "Equipe Epsilon — As Ninjas (Ε)",
        power: "Sombra Predatória",
        description: "Uma combatente furtiva que utiliza sombras para se esconder, mover-se e atacar estrategicamente.",
        image: "images/night-panther.png",
        page: "night-panther.html"
    },

    // =========================
    // EQUIPE ZETA — OS TITÃS (Ζ)
    // =========================
    {
        name: "Nightalon",
        realName: "Dylan Grayson",
        team: "zeta",
        teamName: "Equipe Zeta — Os Titãs (Ζ)",
        power: "Reflexo Aéreo",
        description: "Um vigilante ágil e estratégico, especialista em acrobacias, esquivas, infiltração e combate aéreo.",
        image: "images/nightalon.png",
        page: "nightalon.html"
    },
    {
        name: "Starflare",
        realName: "Koriand’r Sánchez",
        team: "zeta",
        teamName: "Equipe Zeta — Os Titãs (Ζ)",
        power: "Fogo Estelar",
        description: "Uma heroína tamaraneana que converte energia solar em rajadas estelares e força extraordinária.",
        image: "images/starflare.png",
        page: "starflare.html"
    },
    {
        name: "Leaf-Beast",
        realName: "Garfield Leonardo — Leon",
        team: "zeta",
        teamName: "Equipe Zeta — Os Titãs (Ζ)",
        power: "Forma Bestial",
        description: "Um mutante brasileiro capaz de se transformar em animais conhecidos e adquirir suas habilidades.",
        image: "images/leaf-beast.png",
        page: "leaf-beast.html"
    },
    {
        name: "Corvina Blackveil",
        realName: "Rachel Rose",
        team: "zeta",
        teamName: "Equipe Zeta — Os Titãs (Ζ)",
        power: "Véu Abissal",
        description: "Uma híbrida demoníaca que controla sombras e energia abissal ligada a um demônio selado.",
        image: "images/corvina-blackveil.png",
        page: "corvina-blackveil.html"
    },
    {
        name: "Gridlock",
        realName: "Victor Elijah Jones",
        team: "zeta",
        teamName: "Equipe Zeta — Os Titãs (Ζ)",
        power: "Arsenal Modular",
        description: "Um ciborgue tecno-orgânico que transforma o próprio corpo em armas, ferramentas e sistemas de combate.",
        image: "images/gridlock.png",
        page: "gridlock.html"
    }
];

// =========================
// CONFIGURAÇÃO DAS EQUIPES
// =========================

const teamLabels = {
    all: "Todos os personagens",
    alpha: "Equipe Alpha — Os Caras (Α)",
    beta: "Equipe Beta — Os Cabeças (Β)",
    gamma: "Equipe Gamma — Os Sentimentais (Γ)",
    delta: "Equipe Delta — Os Astros (Δ)",
    epsilon: "Equipe Epsilon — As Ninjas (Ε)",
    zeta: "Equipe Zeta — Os Titãs (Ζ)"
};

let selectedCategory = "all";

// =========================
// ELEMENTOS DO HTML
// =========================

const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const characterGrid = document.getElementById("characterGrid");
const resultsTitle = document.getElementById("resultsTitle");
const resultsCount = document.getElementById("resultsCount");
const emptyMessage = document.getElementById("emptyMessage");

// =========================
// NORMALIZAÇÃO DA BUSCA
// Ignora maiúsculas e acentos
// =========================

function normalize(text) {
    return String(text ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

// =========================
// CRIAÇÃO DOS CARDS
// =========================

function createCharacterCard(character) {
    const card = document.createElement("a");
    card.className = "character-card";
    card.href = character.page;
    card.setAttribute("aria-label", `Ver ficha de ${character.name}`);

    const portrait = document.createElement("div");
    portrait.className = "character-portrait";

    const image = document.createElement("img");
    image.src = character.image;
    image.alt = `Retrato de ${character.name}`;
    image.loading = "lazy";

    image.addEventListener("error", () => {
        image.hidden = true;

        if (!portrait.querySelector(".image-placeholder")) {
            const placeholder = document.createElement("span");
            placeholder.className = "image-placeholder";
            placeholder.textContent = "Imagem indisponível";
            portrait.appendChild(placeholder);
        }
    }, { once: true });

    portrait.appendChild(image);

    const content = document.createElement("div");
    content.className = "character-content";

    const teamTag = document.createElement("span");
    teamTag.className = `team-tag team-${character.team}`;
    teamTag.textContent = character.teamName;

    const name = document.createElement("h3");
    name.className = "character-name";
    name.textContent = character.name;

    const realName = document.createElement("p");
    realName.className = "character-real-name";
    realName.textContent = character.realName;

    const description = document.createElement("p");
    description.className = "character-description";
    description.textContent = character.description;

    const power = document.createElement("p");
    power.className = "character-power";

    const powerLabel = document.createElement("strong");
    powerLabel.textContent = "Dom: ";

    power.append(powerLabel, document.createTextNode(character.power));

    const footer = document.createElement("div");
    footer.className = "character-footer";

    const teamName = document.createElement("span");
    teamName.textContent = character.teamName;

    const viewLink = document.createElement("span");
    viewLink.className = "view-character";
    viewLink.textContent = "Ver ficha →";

    footer.append(teamName, viewLink);

    content.append(
        teamTag,
        name,
        realName,
        description,
        power,
        footer
    );

    card.append(portrait, content);

    return card;
}

// =========================
// FILTRAR PERSONAGENS
// =========================

function getFilteredCharacters() {
    const searchTerm = normalize(searchInput?.value || "");

    return characters.filter(character => {
        const matchesCategory =
            selectedCategory === "all" ||
            character.team === selectedCategory;

        const searchableText = normalize([
            character.name,
            character.realName,
            character.teamName,
            character.power,
            character.description
        ].join(" "));

        const matchesSearch = searchableText.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });
}

// =========================
// ATUALIZAR CATÁLOGO
// =========================

function renderCharacters() {
    if (!characterGrid) {
        console.error(
            'Não foi encontrado no HTML um elemento com id="characterGrid".'
        );
        return;
    }

    const filteredCharacters = getFilteredCharacters();

    characterGrid.replaceChildren();

    filteredCharacters.forEach(character => {
        characterGrid.appendChild(createCharacterCard(character));
    });

    if (resultsTitle) {
        resultsTitle.textContent =
            teamLabels[selectedCategory] || teamLabels.all;
    }

    if (resultsCount) {
        const total = filteredCharacters.length;
        resultsCount.textContent =
            `${total} ${total === 1 ? "personagem encontrado" : "personagens encontrados"}`;
    }

    if (emptyMessage) {
        emptyMessage.hidden = filteredCharacters.length > 0;
    }
}

// =========================
// FILTROS DAS EQUIPES
// =========================

if (categoryList) {
    categoryList.addEventListener("click", event => {
        const button = event.target.closest(".category-button");

        if (!button || !categoryList.contains(button)) {
            return;
        }

        const category = button.dataset.category;

        if (!Object.prototype.hasOwnProperty.call(teamLabels, category)) {
            return;
        }

        selectedCategory = category;

        categoryList.querySelectorAll(".category-button").forEach(item => {
            const isSelected = item === button;

            item.classList.toggle("selected", isSelected);
            item.setAttribute("aria-pressed", String(isSelected));
        });

        renderCharacters();
    });
}

// =========================
// CAMPO DE PESQUISA
// =========================

if (searchInput) {
    searchInput.addEventListener("input", renderCharacters);
}

// =========================
// INICIALIZAÇÃO
// =========================

renderCharacters();

console.log(`Catálogo carregado: ${characters.length} personagens.`);
