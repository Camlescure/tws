// Example story nodes
const storyData = {
    "0": {
        text: "Comme chaque matin, tu te réveilles, il est 5h. Tu as toujours été une lève-tôt, c'est important, il faut préparer le petit déjeuner de toute la famille. Qui ne rêve pas de se lever avec l'odeur du café fumant ? Tu sors de ton lit en douceur pour ne pas réveiller ton mari, et quitte la chambre",
        choices: () => [
            { text: "Le plancher grince", next: () => "1" },
            { text: "Le plancher ne grince pas", next: () => "1" }
        ],
        location:"Chambre"
    },
    "1": {
        text: "Avant de descendre à la couisine, tu t'arrêtes dans ton dressing. Que vas-tu porter aujourd'hui ?",
        choices: () => [
            { text: "Un pyjama pilou-pilou, c'est tout doux!", next: () => "2", moodDelta: -30 },
            { text: "Une petite robe de printemps à fleur, en ajoutant ton tablier par dessus. Classique, efficace, indémodable", next: () => "2" }
        ],
        location:"Dressing"
    },
    "2": {
        text: "Arrivée dans la couisine, tu t'affaires à préparer le petit déjeuner de toute la famille. Qu'est ce que tu vas leur préparer de bon aujourd'hui ?",
        choices: () => [
            { text: "Café noir, tartoche de nut' et basta", next: () => "2a", price: -4, moodDelta: 20, nextIfPilou: "2c" },
            { text: "Oeufs brouillés, charcuterie, jus d'orange pressé, café chaud et gaufres", next: () => "2b", moodDelta: -20, price: -15, nextIfPilou: "2c" }
        ],
        location: "Couisine"
    },
    "2a": {
        text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Qu'il est beau ! Avant que tu aies eu le temps de lui faire un compliment, il regarde la table du petit déjeuner, remarque les tartines de Nutella.. Il s'exclame enfin : 'SUPER !! Exactement comme chez Maman, merci ma chérie'",
        choices: () => [
            { text: "Bravo ! Après avoir dévoré son petit déjeuner en lisant son journal, en partant au travail, ton mari t'a fait un bisou sur la joue et t'a glissé un billet de 20$", next: () => "3", price: 20 }
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
        text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Avant que tu aies eu le temps de lui faire un compliment, il lève les yeux vers toi, et te jete d'un air ahuri : 'Qu'est ce que c'est que cette tenue ? Un pilou pilou vraiment ? T'es dégueulasse, qu'est ce que j'ai fait pour mériter ça ?'. Il te jette un dernier regard noir avant de partir au travail sans toucher à son petit déjeuner...",
        choices: () => [
            { text: "Peu fière de toi, tu montes te changer pour enfiler une tenue plus correcte", next: () => "FIN1" }
        ],
        location: "Couisine"
    },
    // TODO ajouter le nombre d'enfants global
    "3": {
        text: "Ton mari parti au travail, tu te retrouves donc seule dans la couisine. Il est temps de réveiller les enfants. Mais d'ailleurs, tu as combien d'enfants ?",
        choices: () => [
            { text: "Malheureusement, 0. Tu n'as pas encore eu le loisir d'accueillir la vie, mais ça ne saurait tarder, chaque chose en son temps.", next: () => "FIN1" },
            { text: "2 enfants, un garçon et une fille, ce sont des amours", next: () => "4" },
            { text: "9 enfants ! Et tu ne comptes pas t'arrêter là. Tu adores prendre soin de ta petite tribu", next: () => "4" }
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
            { text: "'Reste à la maison mon coeur, maman va s'occuper de toi.'", next: () => "5"}
        ],
        location: "ChambreEnfant"
    },
    "5": {
        text: "Tu prépares le petit déjeuner des enfants.",
        choices: () => [
            { text: "Tu leur concoctes un bon petit déjeuner, ils ont besoin de force pour leur journée.", next: () => "5a" }, // TODO si on choisit cette option, il faut calculer si on a assez de thune (5$ par enfant)
            { text: "Ils mangeront les restes de leurs pères, des tartines suffiront.", next: () => "5b" }
        ],
        location: "Couisine"
    },
    
    "5a": {
        text: "",
        choices: () => [
            {},
            {}
        ],
        location: "Couisine"
    },
    "FIN1": {
        text: "0 enfant ! Réveille toi ma grande ! On t'héberge pas pour ta laine ! Il s'agirait de s'y filer, ton mari a besoin d'une descendance.",
        choices: () => [],
        location: "Bouh",
        emoji: "🐐"
    }
};

export default storyData;