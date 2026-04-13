export function IsDateValid(date: string): boolean {
	return !isNaN(Date.parse(date));
}

export function GetDate(date: string): Date {
	return new Date(date);
}

export function isDateIsInThePast(date: Date): boolean {
	return date < new Date();
}

export function isDateIsInTheFuture(date: Date): boolean {
	return date > new Date();
}
