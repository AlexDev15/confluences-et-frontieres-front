import { MetadataRoute } from "next";

// Import the events from the ressources
import { getEvents } from "@/ressources/events";

// Import partners from the ressources
import partners from "@/ressources/partners";

const baseUrl = "https://confront.website";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: `${baseUrl}/fr`,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${baseUrl}/fr/events`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/fr/events/coming`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/fr/events/past`,
			lastModified: new Date(),
			priority: 0.8,
		},
		...getEvents().map((event) => {
			return {
				url: `${baseUrl}/fr/events/${event.linkID}`,
				lastModified: new Date(),
				priority: 0.8,
			};
		}),
		{
			url: `${baseUrl}/fr/project`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${baseUrl}/fr/partners`,
			lastModified: new Date(),
			priority: 0.8,
		},
		...partners.map((partner) => {
			return {
				url: `${baseUrl}/fr/partners/${partner.location.toLowerCase()}`,
				lastModified: new Date(),
				priority: 0.8,
			};
		}),
		{
			url: `${baseUrl}/fr/contacts`,
			lastModified: new Date(),
			priority: 0.5,
		},
	];
}
