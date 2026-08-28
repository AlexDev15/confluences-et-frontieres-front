import fr from "@/lang/translations/fr.json";
import en from "@/lang/translations/en.json";
import pt from "@/lang/translations/pt.json";
import es from "@/lang/translations/es.json";
import gl from "@/lang/translations/gl.json";

const translations = {
	fr: fr,
	en: en,
	pt: pt,
	es: es,
	gl: gl,
};

export type Event = {
	title: string;
	partners: string[];
	image: string;
	description: string;
	location: string;
	details?: { title: string, langs: {lang: string; link: string}[] }[];
	start: string;
	end?: string;
	linkedProductions?: string[];
	linkID: string;
	color: string;
	type: string;
};

export type EventsResponse = {
	maxPage: number;
	data: Event[];
};

export type EventsByDay = {
	date: string;
	events: Event[];
};

export function getEvents() : Event[] {
	return [
		// ------------------------------------------------------------------------ //

		// {
		// 	title: "La Première Biennale interculturelle de Vimioso",
		// 	partners: ["Vimioso"],
		// 	image: "/images/events/LaNouvelleBiennalDeVimioso.jpg",
		// 	description:
		// 		"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
		// 	location: "Vimioso",
		// 	details: [
		// 		{
		// 			"lang": "fr",
		// 			"link": "/ressources/events/details/BiennalDeViomioso_2023.pdf",
		// 		},
		// 	],
		// 	start: "2023-09-27",
		// 	end: "2023-09-30T01:00:00",

		// 	linkID: "la-premiere-biennale-interculturelle-de-vimioso",

		// 	color: "#26a2a6",

		// 	type: "event",
		// },
		{
			title: "Rencontre d’orchestres philarmoniques",
			partners: ["Vimioso"],
			image: "/images/events/RencontreOrchestre.jpg",
			description:
				"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
			location: "Vimioso",
			start: "2023-09-30",

			linkID: "rencontre-d-orchestres-philarmoniques",

			color: "#aba56d",

			type: "event",
		},
		{
			title: "Nouvelles fresques murales à Bruz",
			partners: ["Bruz"],
			image: "/images/events/FresqueMuralBruz.jpeg",
			description:
				"Bénéficiaire d'un budget municipal octroyé par le Comité citoyen de la vie culturelle de Bruz, INTER+VALUE a choisi cette ville de Bretagne comme terrain d’expression pour le street art, porteur de valeurs culturelles et patrimoniales mises en exergue par le projet Confluences & Frontières. L'artiste chilien Allan Halley, qui s'est déjà exprimé sur les murs de Vimioso, au Portugal, en 2023, va peindre quatre fresques murales à Bruz entre début juin et fin septembre 2024. Tout d'abord, une grande fresque doit être réalisée en centre ville, sur un mur extérieur de la salle de spectacles du Grand Logis ; ensuite, les écoles du quartier du Vert-Buisson seront destinataires d'une seconde création à laquelle participeront des élèves. En septembre, viendra le tour de deux nouvelles fresques…",
			location: "Bruz",
			start: "2024-06-06",

			linkID: "nouvelles-fresques-murales-a-bruz",

			color: "#074eea",

			type: "event",
		},
		{
			title: "Trás-os-Montes – Exposition de photos à la MIR",
			partners: ["Rennes"],
			image: "/images/events/Trás-os-Montes-MIR.jpg",
			description:
				"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
			location: "Rennes",
			start: "2023-09-08",

			linkID: "traos-montes-exposition-de-photos-a-la-mir",

			color: "#53d856",

			type: "event",
		},
		// {
		// 	title: "Joias Vales de Vimioso – Exposition de bijoux de Manuela Ferraz",
		// 	partners: ["Viomioso"],
		// 	image: "/images/events/RencontreOrchestre.jpg",
		// 	description:
		// 		"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
		// 	location: "Vimioso",
		// 	start: "2023-09-28",

		// 	linkID: "joias-vales-de-vimioso-exposition-de-bijoux-de-manuela-ferraz",

		// 	color: "#37b5a9",

		// 	type: "event",
		// },
		{
			title: "Poetas – Exposition de portraits peints de Carla Mendes",
			partners: ["Viomioso"],
			image: "/images/events/POETAS-Portrait.png",
			description:
				"L'artiste lisboète Carla Mendes Côrte-Real a réalisé 45 portraits peints de poètes portugais célèbres pour les exposer pendant deux mois à la Maison de la Culture de Vimioso à l'occasion de la 1ère Biennale interculturelle, transfrontalière et européenne réalisée dans ce bourg du nord-est du Portugal. L'exposition a été inaugurée le 27 avril au matin en présence des autorités municipales, de l'équipe d'INTER+VALUE, du public local et de nombreux visiteurs français de Bretagne qui se sont déplacés pour l'évènement. L'inauguration a donné lieu à des discours de circonstance, à des lectures ou récitations de poèmes et à une animation musicale par le groupe D'Alma Fado, composé d'une chanteuse et de deux guitaristes venus de la ville voisine de Bragance.",
			location: "Vimioso",
			start: "2023-09-28",

			linkID: "poetas-exposition-de-portraits-peints-de-carla-mendes",

			color: "#66778c",

			type: "event",
		},
		{
			title: "1er Congrès international, interculturel et plurilingue",
			partners: ["Viomioso"],
			image: "/images/events/1er_Congrès_international_interculturel_et_plurilingue.jpg",
			description:
				"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
			location: "Vimioso",
			start: "2023-09-28",

			linkID: "1er-congres-international-interculturel-et-plurilingue",

			color: "#5f306b",

			type: "event",
		},
		{
			title: "1ère Biennale interculturelle, transfrontalière et européenne de Vimioso",
			partners: ["Viomioso"],
			image: "/images/events/1er_Biennal_Interculturel_Vimioso.jpg",
			description:
				"Conçu par Manuel de Lima, président d'INTER+VALUE, et organisé à Vimioso à l'automne 2023 par l'association et la municipalité locale qui apporte l'aide active de ses services et son appui en ressources logistiques et tissu d'infrastructures, le premier grand évènement de Confluences & Frontières porte le nom de Biennale, suggéré par le maire de Vimioso, Jorge Fidalgo, car il est prévu de le renouveler en cycle bisannuel, et les qualificatifs interculturelle, transfrontalière et européenne qui précisent ses objectifs et définissent les cadres dans lesquels il s'intègre.",
			location: "Vimioso",
			start: "2023-09-27",

			linkID: "1ere-biennale-interculturelle-transfrontaliere-et-europeenne-de-vimioso",

			details: [
				{
					title: "Le Programme",
					langs: [
						{
							"lang": "fr",
							"link": "/ressources/events/details/BiennalDeViomioso_2023.pdf"
						}
					]
				},
				{
					title: "Les détails de notre expédition",
					langs: [
						{
							"lang": "fr",
							"link": "/ressources/events/details/BiennalDeViomioso_2023.pdf"
						},
						{
							"lang": "en",
							"link": "/ressources/events/details/BiennalDeViomioso_2023.pdf"
						},

					]
				}
			],

			color: "#6861b0",

			type: "event",
		},
		{
			title: "Trás-os-Montes – Exposition de photos d'Eduardo Perez",
			partners: ["Viomioso"],
			image: "/images/events/RencontreOrchestre.jpg",
			description:
				"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
			location: "Vimioso",
			start: "2022-08-07",

			linkID: "traos-montes-exposition-de-photos-d-eduardo-perez",

			color: "#da506b",

			type: "event",
		},
		{
			title: "1ère Biennale interculturelle, transfrontalière et européenne de Ribadavia",
			partners: ["Ribadavia"],
			image: "/images/events/1ère_Biennale_interculturelle_transfrontalière_et_européenne_de_Ribadavia.jpg",
			description:
				"À l'instar de Vimioso, Ribadavia souhaite réaliser une Biennale interculturelle, transfrontalière et européenne. La première doit avoir lieu sur trois jours fin octobre 2024. Elle sera organisée par la municipalité, avec la contribution active de ses services et son appui en ressources logistiques et tissu d'infrastructures, et INTER+VALUE qui apporte son concours en expertise, réseau de relations et participation d'intervenants bretons et portugais.",
			location: "Ribadavia",
			start: "2024-10-27",

			linkID: "1ere-biennale-interculturelle-transfrontaliere-et-europeenne-de-ribadavia",

			color: "#9f71a5",

			linkedProductions: ["la-premiere-creation-muralle-de-vimioso"],

			type: "event",
		},
		{
			title: "Inauguration d'une grande fresque murale dédiée aux soeurs Chouzas",
			partners: ["Ribadavia"],
			image: "/images/events/SoeurTouzas.jpg",
			description:
				"Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
			location: "Ribadavia",
			start: "2023-03-08",

			linkedProductions: ["la-premiere-creation-muralle-de-vimioso"],

			linkID: "inauguration-d-une-grande-fresque-murale-dediee-aux-soeurs-chouzas",

			color: "#b3e28a",

			type: "event",
		},
	].sort((a, b) => (new Date(a.start) > new Date(b.start) ? -1 : 1));
}

export function getNextEvents(limit?: number, page?: number, search?: string, lang?: string) {
	let eventResponse: EventsResponse = { maxPage: 0, data: [] };

	let nextEvents = getEvents()
		.filter((event) => new Date(event.start) >= new Date())
		.sort((a, b) => (new Date(a.start) < new Date(b.start) ? -1 : 1));

	eventResponse.data = nextEvents;

	// @ts-ignore
	if (search && search !== "") eventResponse.data = eventResponse.data.filter((event) => {
		// @ts-ignore
		if (translations[lang || "fr"] && translations[lang || "fr"].Events && translations[lang || "fr"].Events[event.linkID] && translations[lang || "fr"].Events[event.linkID].name) {
			// @ts-ignore
			if (translations[lang || "fr"].Events[event.linkID].name.toLowerCase().includes(search.toLowerCase()))
				return true;
			return false;
		}

		return false;
		}
	);

	if (limit && page) eventResponse.data = eventResponse.data.slice((page - 1) * limit, page * limit);

	if (!search || search === "") eventResponse.maxPage = Math.ceil(nextEvents.length / (limit || 1));
	else eventResponse.maxPage = Math.ceil(eventResponse.data.length / (limit || 1));

	if (eventResponse.maxPage === 0) eventResponse.maxPage = 1;

	return eventResponse;
}

export function getPastEvents(limit?: number, page?: number, search?: string, lang?: string) {
	let eventResponse: EventsResponse = { maxPage: 0, data: [] };

	let pastEvents = getEvents()
		.filter((event) => new Date(event.start) < new Date())
		.sort((a, b) => (new Date(a.start) > new Date(b.start) ? -1 : 1));

	eventResponse.data = pastEvents;

	// @ts-ignore
	if (search && search !== "") eventResponse.data = eventResponse.data.filter((event) => {
		// @ts-ignore
		if (translations[lang || "fr"] && translations[lang || "fr"].Events && translations[lang || "fr"].Events[event.linkID] && translations[lang || "fr"].Events[event.linkID].name) {
			// @ts-ignore
			if (translations[lang || "fr"].Events[event.linkID].name.toLowerCase().includes(search.toLowerCase()))
				return true;
			return false;
		}

		return false;
		}
	);

	if (limit && page) eventResponse.data = eventResponse.data.slice((page - 1) * limit, page * limit);

	if (!search || search === "") eventResponse.maxPage = Math.ceil(pastEvents.length / (limit || 1));
	else eventResponse.maxPage = Math.ceil(eventResponse.data.length / (limit || 1));

	if (eventResponse.maxPage === 0) eventResponse.maxPage = 1;

	return eventResponse;
}

export function getEventsByDay(month: number, year: number) {
	const eventsFiltered = getEvents().filter((event) => (new Date(event.start).getMonth() === month && new Date(event.start).getFullYear() === year) || (event.end && new Date(event.end).getMonth() === month && new Date(event.end).getFullYear() === year));

	let eventsByDay: EventsByDay[] = [];

	eventsFiltered.forEach((event) => {
		const startDate = new Date(event.start);
		const endDate = event.end ? new Date(event.end) : startDate;

		for (let i = startDate.getDate(); i <= endDate.getDate(); i++) {
			const date = new Date(startDate.getFullYear(), startDate.getMonth(), i);
			const dateStr = date.toISOString().split("T")[0];

			const day = eventsByDay.find((day) => day.date === dateStr);

			if (day) day.events.push(event);
			else eventsByDay.push({ date: dateStr, events: [event] });
		}
	});

	eventsByDay = eventsByDay.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));

	return eventsByDay;
}

export function getEventsByProduction(production: string) {
	return getEvents().filter((event) => event.linkedProductions && event.linkedProductions.includes(production));
}