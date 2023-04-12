const addTOdb = (id) => {
	let appliedJob = getJobCart();

	const quantity = appliedJob[id];
	if(!quantity){
		appliedJob[id] = 1;
	}
	else{
		const newQuantity = quantity + 1;
		appliedJob[id] = newQuantity;
	}
	localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};

const getJobCart = () => {
	let appliedJob = {};
	const storedCart = localStorage.getItem("applied-job");
	if(storedCart){
		appliedJob = JSON.parse(storedCart);
	}
	return appliedJob;
};

export { addTOdb, getJobCart };