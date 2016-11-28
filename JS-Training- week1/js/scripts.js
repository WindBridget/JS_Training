var Items = function(){
}

Items.prototype.editRow = null;

Items.prototype.Display = function(ctl){
	this.editRow = $(ctl).parent().parent().parent();
	var cols = this.editRow.children().children("div");
	$("#Title").val($(cols[0]).text());
	$("#Desctiption").val($(cols[1]).text());
	$("#updateButton").text("Update");
};
Items.prototype.Update = function(){
	if ($("#updateButton").text() == "Update") {
		this.UpdateInList();
	}
	else {
		this.AddToList();
	}
	this.formClear();
	$("#Title").focus();
};

Items.prototype.AddToList = function(){
	$("#ToDo").append(this.BuildItem());
};

Items.prototype.UpdateInList = function(){
	$(this.editRow).after(this.BuildItem());
	$(this.editRow).remove();
	this.formClear();
	$("#updateButton").text("Submit");
};

Items.prototype.BuildItem = function(){
	if ($("#Title").val() == null || $("#Title").val() == "") {
		alert("Missing title");
		return false;
	}
	else if ($("#Desctiption").val() == null || $("#Desctiption").val() == "") {
		alert("Missing description");
		return false;
	}			
	else {
		var ret = "<li class='col-md-2'>" + "<div class='item'>" + "<div class='item-title'>" + $("#Title").val() + "</div>" +
			"<div class='item-description'>" + $("#Desctiption").val() + "</div>" + "<div>" +
			"<button type='button'" + "class='btn btn-danger'" + "onclick='item.Display(this);'>" + "Edit" + "</button>" 
		+ " " + "<button type='button'" + "class='btn btn-danger'" + "onclick='item.Delete(this);'>" + "Delete" + "</button>" + " "
		+"<button type='button'" + "class='btn btn-danger'" + "onclick='item.MoveToDoneList(this);'>" + "Done" + "</button>" +
			"</div>" + "</div>" + "</li>" ;
		return ret;

	}
};
Items.prototype.setTitleVal = function(ctl){
	this.tTitle.push(ctl);
}
Items.prototype.getTitleVal = function(){
	return this.tTitle;
}

Items.prototype.MoveToDoneList = function(ctl){
	this.editRow = $(ctl).parent().parent().parent();
	var cols = this.editRow.children().children("div");
	$(".item-title").val($(cols[0]).text());
	$(".item-description").val($(cols[1]).text());
	var ret = "<li class='col-md-2'>" + "<div class='item'>" + "<div class='item-title'>" + $(".item-title").val() + "</div>" +
		"<div  class='item-description'>" + $(".item-description").val()  + "</div>" + "<div>" +
		"<button type='button'" + "class='btn btn-danger'" + "onclick='item.Display(this);'>" + "Edit" + "</button>" 
	+ " " + "<button type='button'" + "class='btn btn-danger'" + "onclick='item.Delete(this);'>" + "Delete" + "</button>" + " " +
	"<button type='button'" + "class='btn btn-danger'" + "onclick='item.MoveToToDoList(this);'>" + "ToDo" + "</button>" +	"</div>" + "</div>" + "</li>";
	$("#Done").append(ret);
	$(ctl).parents("li").remove();
};

Items.prototype.MoveToToDoList = function(ctl){
	this.editRow = $(ctl).parent().parent().parent();
	var cols = this.editRow.children().children("div");
	$(".item-title").val($(cols[0]).text());
	$(".item-description").val($(cols[1]).text());
	var ret = "<li class='col-md-2'>" + "<div class='item'>" + "<div class='item-title'>" + $(".item-title").val() + "</div>" +
		"<div  class='item-description'>" + $(".item-description").val()  + "</div>" + "<div>" +
		"<button type='button'" + "class='btn btn-danger'" + "onclick='Display(this);'>" + "Edit" + "</button>" 
	+ " " + "<button type='button'" + "class='btn btn-danger'" + "onclick='Delete(this);'>" + "Delete" + "</button>" + " " +
	"<button type='button'" + "class='btn btn-danger'" + "onclick='item.MoveToDoneList(this);'>" + "Done" + "</button>" +	"</div>" + "</div>" + "</li>";
	$("#ToDo").append(ret);
	$(ctl).parents("li").remove();
};

Items.prototype.formClear = function(){
	$("#Title").val("");
	$("#Desctiption").val("");
};
Items.prototype.Delete = function(ctl){
	$(ctl).parents("li").remove();
};


var item = new Items();
