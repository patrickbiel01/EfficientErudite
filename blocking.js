
function EE_url_domain(data) {
  var    a = document.createElement('a');
         a.href = data;
  return a.hostname;
}

function blockSites() {
  //let siteList = ["www.instagram.com", "www.youtube.com", "www.facebook.com", "www.reddit.com", "twitter.com"];

  try {
    chrome.storage.sync.get(["blocked"], function(result1) {
      let stateList = result1.blocked;
      chrome.storage.sync.get(['state'], function(result2) {
        let studyMode = result2.state;

        let url = window.location.href;
        let domain = EE_url_domain(url);

        console.log(domain);
        console.log(stateList);
        console.log(studyMode);

        if ( stateList.includes(domain) && studyMode ) {
          let contents = document.body.innerHTML;
          let message = "<div style='background-color: Black;'><h2  style='color: White; text-align: Center;'>Stay on the path. Keep Focused!</h2></div>"
          contents = message + "<div style='display: None'>" + contents + "</div>";
          document.body.innerHTML = contents;
        }
      });
    });
  } catch (e) {}

}

blockSites()
