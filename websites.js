//script runs when on any amazon page

function amazonJQ()
{
	debugger;
	var buyButton = $("#add-to-cart-button");
	var price = $("#priceblock_ourprice");
	var oneStarRatingList = $(".a-icon a-icon-star a-star-1 review-rating");
	
	if(buyButton != null)
	{
		buyButton.parent().click(function(){
			buyButton.attr("disabled","disabled");
			
			alert("dont buy this!");
		})
	}
}

function ebayJQ()
{
	debugger;
	var buyButon = $("#binBtn_btn");
	if(buyButton != null)
	{
		buyButton.parent().click(function(){
			alert("dont buy this!");
		})
	}
}