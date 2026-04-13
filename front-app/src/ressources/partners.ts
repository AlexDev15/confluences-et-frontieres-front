export type Partner = {
	location: string;
	secondLocation?: boolean;
	// secondLocation?: string | undefined;
	thirdLocation?: boolean;
	// subLocation?: string | undefined;
	name: string;
	icon: string;
	iso: string;
	image: string;
	imageLocation: string;
	subscriptionDate: string;
	contact?: {
		name?: string;
		address?: string;
		email?: string;
		siteLink?: string;
	},
	position: {
		lat: number;
		lng: number;
	};
}

const partners : Partner[] = [
	{
		location: "Bretagne",
		iso: "fr-br",
		name: "Bretagne",
		icon: "/images/flags/br.png",
		image: "/images/partners/Bretagne.jpg",
		imageLocation: "/images/partners/Bretagne.jpg",
		subscriptionDate: "2022-01-01",
		contact: {
			name: "Région Bretagne",
			address: "283, avenue du Général Patton, CS 21 101, 35711 Rennes Cedex 7, France",
			email: "",
			siteLink: "https://www.bretagne.bzh",
		},
		position: {
			lat: 48.117266,
			lng: -1.677792,
		},
	},
	{
		location: "Rennes",
		secondLocation: true,
		thirdLocation: true,
		iso: "fr-br",
		name: "Rennes",
		icon: "/images/flags/br.png",
		image: "/images/partners/Rennes.jpg",
		imageLocation: "/images/partners/Rennes.jpg",
		subscriptionDate: "2022-05-01",
		contact: {
			name: "Ville de Rennes",
			address: "Hôtel de ville, Place de la Mairie, CS 63126, 35031 Rennes Cedex, France",
			email: "",
			siteLink: "https://metropole.rennes.fr",
		},
		position: {
			lat: 48.117266,
			lng: -1.677792,
		},
	},
	{
		location: "Bruz",
		name: "Bruz",
		secondLocation: true,
		thirdLocation: true,
		iso: "fr-br",
		icon: "/images/flags/br.png",
		image: "/images/partners/Bruz.jpg",
		imageLocation: "/images/partners/Bruz.jpg",
		subscriptionDate: "2023-01-01",
		contact: {
			name: "Ville de Bruz",
			address: "Hôtel de Rennes Métropole, 4 avenue Henri Fréville, CS 93111, 35031 Rennes Cedex, France",
			email: "",
			siteLink: "https://metropole.rennes.fr",
		},
		position: {
			lat: 48.024538,
			lng: -1.747148,
		},
	},
    {
        location: "Bruz",
        name: "Bruz",
        secondLocation: true,
        thirdLocation: true,
        iso: "fr-br",
        icon: "/images/flags/br.png",
        image: "/images/partners/Bruz.jpg",
        imageLocation: "/images/partners/Bruz.jpg",
        subscriptionDate: "2023-01-01",
        contact: {
            name: "Ville de Bruz",
            address: "Hôtel de Rennes Métropole, 4 avenue Henri Fréville, CS 93111, 35031 Rennes Cedex, France",
            email: "",
            siteLink: "https://metropole.rennes.fr",
        },
        position: {
            lat: 48.024538,
            lng: -1.747148,
        },
    },
    {
        location: "Bruz",
        name: "Bruz",
        secondLocation: true,
        thirdLocation: true,
        iso: "fr-br",
        icon: "/images/flags/br.png",
        image: "/images/partners/Bruz.jpg",
        imageLocation: "/images/partners/Bruz.jpg",
        subscriptionDate: "2023-01-01",
        contact: {
            name: "Ville de Bruz",
            address: "Hôtel de Rennes Métropole, 4 avenue Henri Fréville, CS 93111, 35031 Rennes Cedex, France",
            email: "",
            siteLink: "https://metropole.rennes.fr",
        },
        position: {
            lat: 48.024538,
            lng: -1.747148,
        },
    },
	{
		location: "Vimioso",
		name: "Municipality of Vimioso",
		secondLocation: true,
		thirdLocation: true,
		iso: "pt",
		icon: "/images/flags/pt.svg",
		image: "/images/partners/Vimioso.jpg",
		imageLocation: "/images/partners/MairieVimioso.jpg",
		subscriptionDate: "2021-01-01",
		contact: {
			name: "Município de Vimioso",
			address: "Praça Eduardo Coelho, 5230-315 Vimioso, Portugal",
			email: "gi.cmv@cm-vimioso.pt",
			siteLink: "https://www.cm-vimioso.pt",
		},
		position: {
			lat: 41.58435323893914,
			lng: -6.528820980132914,
		},
	},
	{
		location: "Ribadavia",
		name: "Ribadavia Town Hall",
		secondLocation: true,
		thirdLocation: true,
		iso: "es",
		icon: "/images/flags/es.svg",
		image: "/images/partners/Ribadavia.jpg",
		imageLocation: "/images/partners/MairieRibadavia.jpg",
		subscriptionDate: "2022-01-02",
		contact: {
			name: "Concello de Ribadavia / OMIX",
			address: "Praza Maior, 4, 32400 Ribadavia (Ourense), España",
			email: "omixribadavia@gmail.com",
			siteLink: "https://ribadavia.gal",
		},
		position: {
			lat: 42.2878,
			lng: -8.1446,
		},
	},
	{
		location: "Prato",
		name: "Prato Town Hall",
		secondLocation: true,
		thirdLocation: true,
		iso: "it",
		icon: "/images/flags/it.svg",
		image: "/images/partners/Prato.jpg",
		imageLocation: "/images/partners/Prato.jpg",
		subscriptionDate: "2022-05-02",
		position: {
			lat: 43.8791,
			lng: 11.097,
		},
	},
	{
		location: "Iaşi",
		name: "Iaşi Town Hall",
		secondLocation: true,
		thirdLocation: true,
		iso: "ro",
		icon: "/images/flags/ro.svg",
		image: "/images/partners/Iasi.jpg",
		imageLocation: "/images/partners/Iasi.jpg",
		subscriptionDate: "2022-06-01",
		position: {
			lat: 47.1585,
			lng: 27.6014,
		},
	},
].sort((a, b) => {
	return new Date(b.subscriptionDate).getTime() - new Date(a.subscriptionDate).getTime();
}).reverse();

export default partners;
