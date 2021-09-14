export async function ParseToApiStructure(
	statement_api,
	statementTypes_api,
	options_api,
	optionsTypes_api,
	answers_api
) {
	//alt+532
	//.split() to separate

	let converted_statement = statement_api;

	for (let index = 0; index < statementTypes_api.length; index++) {
		if (
			statementTypes_api[index] === "m2" ||
			statementTypes_api[index] === "m3" ||
			statementTypes_api[index] === "m4"
		) {
			let first_join = [""];

			first_join = converted_statement[index].map((element, position) => {
				return element.join("¶");
			});

			converted_statement[index] = first_join.join("¶");
		} else if (statementTypes_api[index] === "l") {
			if (converted_statement[index].length === 1) {
				converted_statement[index] = converted_statement[index][0];
			} else {
				converted_statement[index] = converted_statement[index].join("¶");
			}
		}
	}

	let hello = "funciona?¶";
}

export default ParseToApiStructure;
