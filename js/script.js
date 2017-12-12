'use strict'
//родительский класс Container для всяких штук 
function Container() {
	//эти свойства будут у всех детей свои
	this.id = '';
	this.className = '';
	this.htmlCode = '';
}
//для экономии памятти выносим метод в прототип
//этот метод (это поведение) по умолчанию будет
//у всех детей и мы сможем им как то пользоваться
Container.prototype.render = function(){
	return this.htmlCode;
}
//нужен общий для всех метод, который удаляет
//контейнер, здесь его просто обозначим
Container.prototype.remove = function(){
}

//Soli Deo Gloria