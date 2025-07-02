export var initTwsModel = {
    mood: 50,
    pilou: false,
    wallet: 30,
    children: 0,
    childrenHome: false,
};

const storyData = {
    "0": {
        text: "Comme chaque matin, tu te réveilles, il est 5h. Tu as toujours été une lève-tôt, c'est important, il faut préparer le petit déjeuner de toute la famille. Qui ne rêve pas de se lever avec l'odeur du café fumant ? Tu sors de ton lit en douceur pour ne pas réveiller ton mari, et quitte la chambre",
        choices: () => [
            { text: "Le plancher grince", next: () => "1" },
            { text: "Le plancher ne grince pas", next: () => "1" }
        ],
        location: "Chambre"
    },
    "1": {
        text: "Avant de descendre à la couisine, tu t'arrêtes dans ton dressing. Que vas-tu porter aujourd'hui ?",
        choices: () => [
            { text: "Un pyjama pilou-pilou, c'est tout doux!", next: (twsModel) => { twsModel.mood -= 30; twsModel.pilou = true; return "2" } },
            { text: "Une petite robe de printemps à fleur, en ajoutant ton tablier par dessus. Classique, efficace, indémodable", next: () => "2" }
        ],
        location: "Dressing"
    },
    "2": {
        text: "Arrivée dans la couisine, tu t'affaires à préparer le petit déjeuner de toute la famille. Qu'est ce que tu vas leur préparer de bon aujourd'hui ?",
        choices: () => [
            { text: "Café noir, tartoche de nut' et basta", next: (twsModel) => { twsModel.mood += 20; twsModel.wallet -= 4; return twsModel.pilou ? "2c" : "2a" } },
            { text: "Oeufs brouillés, charcuterie, jus d'orange pressé, café chaud et gaufres", next: (twsModel) => { twsModel.mood -= 20; twsModel.wallet -= 15; return twsModel.pilou ? "2c" : "2b" } }
        ],
        location: "Couisine"
    },
    "2a": {
        text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Qu'il est beau ! Avant que tu aies eu le temps de lui faire un compliment, il regarde la table du petit déjeuner, remarque les tartines de Nutella.. Il s'exclame enfin : 'SUPER !! Exactement comme chez Maman, merci ma chérie'",
        choices: () => [
            { text: "Bravo ! Après avoir dévoré son petit déjeuner en lisant son journal, en partant au travail, ton mari t'a fait un bisou sur la joue et t'a glissé un billet de 20$", next: (twsModel) => { twsModel.wallet += 20; return "3" }}
        ],
        location: "Couisine"
    },
    "2b": {
        text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Qu'il est beau ! Avant que tu aies eu le temps de lui faire un compliment, il s'assied en silence, porte une gauffre à sa bouche. Il finit par s'exclamer avec un air de dégoût : 'POUAH, c'est immonde. Tu as encore pris ton temps ce matin, les gaufres sont froides, c'est immangeable.'",
        choices: () => [
            { text: "Quelle erreur... Tu retiens tes larmes alors qu'il part au travail sans te dire au revoir.", next: () => "3" }
        ],
        location: "Couisine"
    },
    "2c": {
        text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Avant que tu aies eu le temps de lui faire un compliment, il lève les yeux vers toi, et te jete d'un air ahuri : 'Qu'est ce que c'est que cette tenue ? Un pilou pilou vraiment ? T'es dégueulasse, qu'est ce que j'ai fait pour mériter ça ? 🤮'. Il te jette un dernier regard noir avant de partir au travail sans toucher à son petit déjeuner...",
        choices: () => [
            { text: "Peu fière de toi, tu montes te changer pour enfiler une tenue plus correcte", next: () => "3" }
        ],
        location: "Couisine"
    },
    "3": {
        text: "Ton mari parti au travail, tu te retrouves donc seule dans la couisine. Il est temps de réveiller les enfants. Mais d'ailleurs, tu as combien d'enfants ?",
        choices: () => [
            { text: "Malheureusement, 0. Tu n'as pas encore eu le loisir d'accueillir la vie, mais ça ne saurait tarder, chaque chose en son temps.", next: () => "FIN1" },
            { text: "2 enfants, un garçon et une fille, ce sont des amours", next: (twsModel) => { twsModel.children = 2; console.log(twsModel); return "4" }},
            { text: "9 enfants ! Et tu ne comptes pas t'arrêter là. Tu adores prendre soin de ta petite tribu", next: (twsModel) => { twsModel.children = 9; return "4" }}
        ],
        location: "Couisine"
    },
    "4": {
        text: "Tu montes dans la chambre des enfants pour les réveiller. Comment les réveilles-tu ?",
        choices: () => [
            { text: "Tu es de bonne humeur, tu les réveilles tendrement. Bien dormi mon coeur ? ", next: () => "4a" },
            { text: "Tu n'as pas le temps. Tu cries dans l'escalier : 'ALLEZ, DEBOUT, C'EST L'HEURE DE SE LEVER'", next: () => "5" }
        ],
        location: "ChambreEnfant"
    },
    "4a": {
        text: "Jean-Eude, ton troisième, te répond d'une voix faible : 'Je me sens malade mère'. Effectivement, en posant ta main sur son front, tu le sens brûlant. C'est sûr, il ne pourra pas aller à l'école aujourd'hui",
        choices: () => [
            { text: "'Reste à la maison mon coeur, maman va s'occuper de toi.'", next: (twsModel) => { twsModel.childrenHome = true; return "5" }}
        ],
        location: "ChambreEnfant"
    },
    "5": {
        text: "Tu prépares le petit déjeuner des enfants.",
        choices: () => [
            { text: "Tu leur concoctes un bon petit déjeuner, ils ont besoin de force pour leur journée.", next: (twsModel) => { 
                if (twsModel.wallet >= 5*twsModel.children){
                    twsModel.wallet -= 5*twsModel.children;
                    return  "5a" 
                }
                else {
                    return "5b" 
                }
            }}, 
            { text: "Ils mangeront les restes de leurs pères, des tartines suffiront.", next: (twsModel) => "5a" }
        ],
        location: "Couisine"
    },
    "5a": {
        text: "Les enfants ont bien mangé, il est temps pour eux de partir à l'école.",
        choices: (twsModel) => {
            if (twsModel.childrenHome) {
                return [{ text: "Les enfants dans le bus scolaire, tu te rends immédiatement chez le médecin pour Jean-Eude, le pauvre chou est brûlant 🥵", next: () => "9" }]
            }
            else 
            {
                return [{ text: "Les enfants dans le bus scolaire, tu attrapes ton panier, et tu te dépêches d'aller faire les courses.", next: () => "6" }]
            }
        },
        location: "Bus"
    },

    "5b": {
        text: "Désolée, tu n'as pas assez d'argent pour proposer ce genre de petit déjeuner à tes enfants. Tu n'as pas assez bien géré le budget de la famille, c'est pourtant ton rôle. Un de tes enfants n'aura donc pas à manger ce matin, c'est la troisième fois cette semaine, en sous-nutrition il ne finira pas la journée vivant. Qui va mourir ?",
        choices: () => [
            { text: "Joseph, l'aîné. A 15 ans, il commence à coûter cher en nourriture, et lorsqu'il voudra faire les mêmes études que son père, cela coûtera encore plus.", next: (twsModel) => { twsModel.children -= 1; twsModel.mood -= 30; return "6" }},
            { text: "Augustine, la petite dernière. Cela vous fera économiser une dot.", next: (twsModel) => { twsModel.children -= 1; twsModel.mood += 20; return "6" }}
        ],
        location: "Couisine"
    },

    "6": {
        text: "Comment te rends tu au supermarché ?",
        choices: () => [
            { text: "Tu prends le bus, tu n'as pas le permis. Conduire, c'est une affaire d'homme bien sûr.", next: (twsModel) => { twsModel.mood += 10; return "8" }},
            { text: "Tu prends la voiture, ce sera plus facile pour transporter tout ce que tu dois acheter pour ta petite famille.", next: (twsModel) => { twsModel.mood -= 60; return "7"}}
        ],
        location: "Couisine"
    },

    "7": {
        text: "En sortant du garage, tu fais une erraflure sur la voiture. Ton mari va être furieux. Voilà ce qui arrive quand une femme prend le volant. En espérant que cela te serve de leçon.",
        choices: () => [
            { text: "Tremblante, tu fais très attention sur la route jusqu'au supermarché", next: () => "8"  },
        ], 
        location: "Garage"
    },

    "8": {
        text: "Arrivée au supermarché, tu choisis les produits qu'il y a sur ta liste",
        choices: () => [],
        location: "Supermarche"
    },

    "9" : {
        text: "Le médecin examine Jean-Eude. 'C'est une simple angine. Une bonne soupe préparée par maman, du repos, et tu pourras retourner à l'école en un rien de temps.' Après avoir rédigé l'ordonnance, il se tourne vers toi. Et vous, xxx, comment allez-vous ?",
        choices: () => [
            { text: "Tu fais ton plus beau sourire. 'Tout va bien docteur, mon mari est formidable et mes enfants sont merveilleux, je ne pourrais rêver mieux.", next: (twsModel) => { twsModel.mood += 20; return "10" }},
            { text: "Après réflexion, tu décides de dire la vérite. 'Ecoutez docteur, à vrai dire, pas très bien..." , next: () => "11" }
        ],
        location: "Medecin"
    },

    "10" : {
        text: "Le médecin te sourit. 'Quel plaisir d'entendre de telles choses. Je ne manquerai pas d'en toucher deux mots à votre mari, il serait ravi de savoir que vous êtes une bonne épouse.",
        choices: () => [
            { text: "Il est temps pour toi d'aller faire quelques courses.", next: () => "6" }
        ], 
        location: "Medecin"
    },

    "11": { 
        text: "'Je ne m'en sors pas, avec toutes les tâches ménagères... Mon mari est si strict et il m'aide très rarement avec les enfants..'", 
        choices: () => [
            { text: "..." , next: () => "12" },
        ],
        location: "Medecin"
    },

    "12": {
        text: "Tu enchaînes: 'Et avec lui, pas question d'aborder la charge mentale. C'est à croire que nous vivons en 1960 docteur.. Je n'ai même pas de compte bancaire, rendez-vous compte !'",
        choices: () => [
            { text: "...", next: () => "13" }
        ],
        location: "Medecin"
    },

    "13" : {
        text: "'J'ai l'impression d'être bonne uniquement à pondre des enfants, et à lui faire la popote.. Vraiment docteur, je songe chaque jour à le quitter, à m'enfuir, retrouver ma liberté...'",
        choices: () => [
            { text: "Tu lèves des yeux embués de larmes vers ton médecin", next: () => "FIN2" }
        ],
        location: "Medecin"
    },

    "FIN1": {
        text: "0 enfant ! Réveille toi ma grande ! On t'héberge pas pour ta laine ! Il s'agirait de s'y filer, ton mari a besoin d'une descendance.",
        choices: () => [],
        location: "Bouh",
        emoji: "🐐"
    },

    "FIN2": {
        text: "En prenant son téléphone, le médecin t'annonce d'une voix dure: 'C'est inadmissible. Comment osez-vous tenir des propos pareil ? Vous n'êtes qu'une ingrate. Vous pensez à ce que votre mari endure chaque jour au bureau ? A la difficulté d'être un homme dans notre société actuelle.. Vraiment, tout part à volo. On ne peut plus rien dire. Il n'y a plus de saisons. J'appelle immédiatement l'hôpital psychatrique, vous êtes hystérique, nous allons vous faire interner. Votre mari sera salement déçu.'",
        choices: () => [], 
        location: "Hopital",
        emoji: "😡"
    }
};

export default storyData;