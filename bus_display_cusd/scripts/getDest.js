function getDest() {
  var token = 'Bearer e5159b89-86c1-3cca-8412-59de037c674b';
  var routeid; 
  return $.ajax({
    url: 'https://gateway.api.cloud.wso2.com:443/t/mystop/tcat/v1/rest/Routes/Get/'+routeid,
    type: 'GET',
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", token);
    },
    //data: 'json=' + escape(JSON.stringify(createRequestObject)),
    success: function(msg) {
      window.routedata = msg;
      var routedata = msg;
      // for (let route of data[0].RouteDirections) {
      //   $("#serv_info").append("<div class='serv_info_sub'><p>" + route.RouteId + "</p></div>");
      }
    },
    // error: function(XMLHttpRequest, textStatus, errorThrown) {
    //   alert(errorThrown);
    // }
  });
}