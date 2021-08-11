
export class MainMenuModel {
	title: string
	url: string
	key: number

	constructor(
		title: string, 
		url: string, 
		key: number
		) {
		this.title = title
		this.url = url
		this.key = key
	}
}
