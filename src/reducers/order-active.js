export default function (state=null, action) {
	
	switch (action.type) {
		case "car_selected":
			return action.payload;
			break;
		default:
			return state;
	}
}