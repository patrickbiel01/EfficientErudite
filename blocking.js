
function EE_url_domain(data) {
  var    a = document.createElement('a');
         a.href = data;
  return a.hostname;
}

let url = window.location.href;
let domain = EE_url_domain(url);

console.log(domain);

//Blacklist - array of strings rep. blacklisted domains
let blacklist = [];
chrome.storage.sync.get(["blacklist"], function(result) {
  blacklist = result;
});
//Fetch bl urls from saved files/cookies

if ( blacklist.includes(domain) ) {
  let contents = document.body.innerHTML;
  let message = "<div style='background-color: Black;'><h2  style='color: White; text-align: Center;'>Stay on the path. Keep Focused!</h2></div>"
  contents = message + "<div style='display: None'>" + contents + "</div>";
  document.body.innerHTML = contents;
}
