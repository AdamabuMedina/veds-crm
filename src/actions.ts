"use server"
export async function createAction(formData: FormData) {
	const clientName = formData.get("clientName")
	if (clientName) {
		console.log(clientName)
	} else {
		console.log("Client name not found")
	}
}
