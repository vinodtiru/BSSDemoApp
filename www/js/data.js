// Store object
var globalVar = 0; /*0 means not loaded and 1 means loaded*/

$(document).on('pageinit', function () {
    if (globalVar < 1) {
        globalVar = 1;
        var listItemHtml = '';
        $.getJSON("js/demo.json", function (data) {
            $('#mainlist').empty();
            /* list loop */
            $(data.bssitems).each(function (index, value) {
                listItemHtml = '';
                listItemHtml = listItemHtml + '<li> <a href="#' + value.id + 'Details"> <div class="listItem"> <img class="listImage" src="img/' + value.id + '.jpg" />';
                listItemHtml = listItemHtml + '<p>' + value.name + '</p>';
                if (value.sale > 0) {
                    listItemHtml = listItemHtml + '<p class="sale-text">Sale</p>';
                }
                listItemHtml = listItemHtml + '<p class="itemShortDesc">' + value.shortdescription + '</p>';
                listItemHtml = listItemHtml + '<p class="itemBy">' + value.company + '</p>';
                listItemHtml = listItemHtml + '<p class="itemUsualPrice">' + value.listprice + '</p>';
                listItemHtml = listItemHtml + '<p class="itemSalePrice">' + value.saleprice + '</p>';
                listItemHtml = listItemHtml + '</div></a></li>';

                $('#mainlist').append(listItemHtml);
            });

            var itemDetailsHtml = '';
            itemDetailsHtml = '';
            /*Loop for page details*/
            $(data.bssitems).each(function (index, value) {
                

                itemDetailsHtml = itemDetailsHtml + '<div id="' + value.id + 'Details" data-role="page" class="detailsPage">';

                itemDetailsHtml = itemDetailsHtml + '<div data-role="header" data-position="fixed" id="AppHeader">';
                itemDetailsHtml = itemDetailsHtml + '<a href="#MainListPage" data-role="button" data-icon="back" data-iconpos="notext" id="ab_back" data-mini="false" data-theme="a" data-shadow="false"></a>';
                itemDetailsHtml = itemDetailsHtml + '<a data-role="button" data-iconpos="notext" id="ab_cart" data-mini="false" data-theme="a" data-shadow="false">3</a>';
                itemDetailsHtml = itemDetailsHtml + '<div id="header-home">';
                itemDetailsHtml = itemDetailsHtml + '<a data-role="button" data-iconpos="notext" id="AppLogo" data-mini="false" data-theme="a" data-shadow="false"></a>';
                itemDetailsHtml = itemDetailsHtml + '</div></div>';

                itemDetailsHtml = itemDetailsHtml + '<img class="detailsImage" src="img/' + value.id + '.jpg" />';
                itemDetailsHtml = itemDetailsHtml + '<p>' + value.name + '</p>';
                itemDetailsHtml = itemDetailsHtml + '<p class="itemShortDesc">' + value.shortdescription + '</p>';
                itemDetailsHtml = itemDetailsHtml + '<p class="itemBy">' + value.company + '</p>';
                itemDetailsHtml = itemDetailsHtml + '<p class="itemUsualPrice">' + value.listprice + '</p>';
                itemDetailsHtml = itemDetailsHtml + '<p class="itemSalePrice">' + value.saleprice + '</p>';
                itemDetailsHtml = itemDetailsHtml + '<a id="buyButton" data-role="button" data-inline="true">BUY NOW</a>';
                itemDetailsHtml = itemDetailsHtml + '<a id="addToCartButton" data-role="button" data-inline="true" >ADD TO CART</a>';
                itemDetailsHtml = itemDetailsHtml + value.features;
                itemDetailsHtml = itemDetailsHtml + value.productdetails;
                itemDetailsHtml = itemDetailsHtml + value.productdescription;
                itemDetailsHtml = itemDetailsHtml + '</div>'; /*The last line End*/

            });
            $('#myBody').append(itemDetailsHtml);


        });
    }
});