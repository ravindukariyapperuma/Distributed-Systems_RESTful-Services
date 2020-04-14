/**
 * 
 */

function getDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/book_service/rest/books/" + $("#id").val(),
        type: "GET",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
            //here is your json.
              // process it
        	  $("#title").text(data.title);
        	  $("#price").text(data.price);

        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#title").text("Sorry! Book not found!");
        		$("#price").text("");
        },
        timeout: 120000,
    });
};

function addDetails(){
	
	var book = {
            id: $("#newid").val(),
            title:$("#title").val(),
            price:$("#price").val()
        }
	
	
	jQuery.ajax({
        url: "http://localhost:8080/BookService/rest/books/",
        type: "POST",
        contentType: "application/json",  
        dataType:'json',
        data: JSON.stringify(book),
        success: function(data, textStatus, errorThrown) {
        	 $("#span").html(data);
        },
    });
};


function deleteDetails(){
	jQuery.ajax({
        url: "http://localhost:8080/BookService/rest/books/" + $("#id").val(),
        type: "DELETE",
        contentType: "application/json",  
        dataType:'json',
        success: function(data, textStatus, errorThrown) {
        	 $("#span").html(data);

        },
        error : function(jqXHR, textStatus, errorThrown) {
        		$("#span").text("Sorry! Book can not delete!");
        		
        },
        timeout: 120000,
    });
};
