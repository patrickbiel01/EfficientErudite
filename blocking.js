
function EE_url_domain(data) {
  var    a = document.createElement('a');
         a.href = data;
  return a.hostname;
}

function blockBlackList() {
  let state = true;
  chrome.storage.sync.get(["blacklist"], function(result) {
    state = result.key;
  });
  if (!state) {
    return;
  }

  let url = window.location.href;
  let domain = EE_url_domain(url);

  console.log(domain);

  //Blacklist - array of strings rep. blacklisted domains
  let blacklist = [];
  chrome.storage.sync.get(["blacklist"], function(result) {
    blacklist = result.key;
  });

  if ( !blacklist.includes(domain) ) {
    return;
  }
  let contents = document.body.innerHTML;
  let message = "<div style='background-color: Black;'><h2  style='color: White; text-align: Center;'>Stay on the path. Keep Focused!</h2></div>"
  contents = message + "<div style='display: None'>" + contents + "</div>";
  document.body.innerHTML = contents;
}

blockBlackList()
