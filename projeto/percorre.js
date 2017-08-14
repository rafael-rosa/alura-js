function percorreArray(array,comportamento){

	for (var i = 0; i < array.length; i++) {
		comportamento(array[i]);
	}
}