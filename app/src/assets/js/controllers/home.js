var _module  = angular.module('teste.controllers');

_module.controller('ctrHome', ['$scope', 'api', '$location', '$timeout', function($scope, api, $location, $timeout) {
	//$(document).ready(function(){

  	//});
	$.get(
   "https://www.googleapis.com/youtube/v3/channels",{
   part : 'contentDetails', 
   forUsername : 'VAGAStecnologia',
   key: 'AIzaSyCXhj70Kvxzw4DtX-1bgZ2Wuy6sT5qzy7A'},
   function(data) {
    //console.log(data);

      $.each( data.items, function( i, item ) {
        //console.log(item);
          pid = item.contentDetails.relatedPlaylists.uploads;
          getVids(pid);
      });
  }
);
//https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=v32TXetoAns&key=AIzaSyCXhj70Kvxzw4DtX-1bgZ2Wuy6sT5qzy7A

//Get Videos
function getVids(pid){

    $.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",{
        part : 'snippet', 
        maxResults : 5,
        playlistId : pid,
        key: 'AIzaSyCXhj70Kvxzw4DtX-1bgZ2Wuy6sT5qzy7A'},
        function(data) {
            var results;
            //console.log(data);
            $.each(data.items, function(i, item) {
                var getViews = item.snippet.resourceId.videoId
                	listIds = [];
                	listIds.push(getViews)
                	//listIds.push(getViews);
                	console.log(listIds);

                
                results = '<li>'+ item.snippet.title +'</li>';
                $('#results').append(results);

               // fnGetViews(getViews);

            });
        }
    );
}
 function fnGetViews(idVideo){
 	console.log(idVideo)
  $.ajax({
  	url: 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id="'+idVideo+'"&key=AIzaSyCXhj70Kvxzw4DtX-1bgZ2Wuy6sT5qzy7A',
  	dataType: 'json',
  	success: function(data) {
  		console.log(data);
  	}
  });
     
    
}

}]);
 
module.exports = _module;