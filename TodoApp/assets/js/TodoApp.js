// Check off todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

//Take input and append it to list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabs new input text
		var todoInput = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span id='delete'><i class='far fa-minus-square'></i></span> " + todoInput + "</li>")
	}
})

//Click edit and it will open and close add item

$("#edit").click(function(){
	$("input[type='text']").fadeToggle();
});

