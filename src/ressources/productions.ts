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

export type Production = {
	title: string;
	image: string;
	description: string;
	location: string;
	date: string;
	details?: { title: string, langs: {lang: string; link: string}[] }[];
	linkedEvent?: string[];
	linkID: string;
	type: string;
};

export type ProductionsResponse = {
	maxPage: number;
	data: Production[];
};

export function getProductions() : Production[] {
	return [
         {
            title: "La Première Création muralle de Vimioso",
            image: "/images/productions/GrandeMuraille.jpg",
            description:
                "Organisé à Vimioso à l'automne 2023 par INTER+VALUE et la municipalité locale qui apporte l'aide active de ses services et son appui total en ressources logistiques et tissu d'infrastructures, le premier évènement portera le nom de BIENNALE car il est prévu de le renouveler en cycle bisannuel.",
			location: "Vimioso",
            date: "2023-09-27",
			details: [
				{
					title: "Le programme",
					langs: [
						{
							"lang": "fr",
							"link": "/ressources/events/details/BiennalDeViomioso_2023.pdf"
						}
					]
				}
			],
			linkedEvent: ["inauguration-d-une-grande-fresque-murale-dediee-aux-soeurs-chouzas"],
            linkID: "la-premiere-creation-muralle-de-vimioso",
			type: "production",
         },
	].sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getFilteredProductions(limit?: number, page?: number, search?: string, lang?: string) {
	let productionResponse: ProductionsResponse = { maxPage: 0, data: [] };

	let nextProductions = getProductions();

	productionResponse.data = nextProductions;

	if (search && search !== "") productionResponse.data = productionResponse.data.filter((production) => {
            // @ts-ignore
            if (translations[lang || "fr"] && translations[lang || "fr"].Productions && translations[lang || "fr"].Productions[production.linkID] && translations[lang || "fr"].Productions[production.linkID].name) {
				// @ts-ignore
				if (translations[lang || "fr"].Productions[production.linkID].name.toLowerCase().includes(search.toLowerCase())) return true;
                return false;
			}

            return false;
        }
    );
	if (limit && page) productionResponse.data = productionResponse.data.slice((page - 1) * limit, page * limit);

	if (!search || search === "") productionResponse.maxPage = Math.ceil(nextProductions.length / (limit || 1));
	else productionResponse.maxPage = Math.ceil(productionResponse.data.length / (limit || 1));

	if (productionResponse.maxPage === 0) productionResponse.maxPage = 1;

	return productionResponse;
}

export function getProductionsByEvent(eventLinkID: string) {
	return getProductions().filter((production) => production.linkedEvent?.includes(eventLinkID));
}