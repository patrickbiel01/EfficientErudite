function addCssLink(path, id) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = "EfficientErudite"+id;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = path;
  link.media = 'all';
  head.appendChild(link);
}

function partialBlocking() {
  //List of sites where "distraction-free mode" is enabled
  lmSites = ["www.instagram.com", "www.youtube.com", "www.facebook.com", "www.reddit.com", "twitter.com"]; //Add more sites

  //Fetch saved setting for each limited blocking site and
  //Put into a map (domain name : bool rep. if it is partially disabled)
  let lmBlock = [];
  for (site in lmSites) {
    // chrome.storage.sync.get([site], function(result) {
    //   map.set(site, result.key);
    // });
    if (result.key = true) {
      lmBlock.append(site)
    }
  }

  //Grab current domain
  let url = window.location.href;
  let domain = EE_url_domain(url);

  console.log(domain);

  //If the domain is partially disabled
  //   => disable features according to site
  if ( lmBlock.contains(domain) ) {
    switch(domain) {

      case lmSites[0]:
        // instagram blocking
        console.log("THIS IS instagram");
        let main = document.getElementsByTagName('main');
        if (main.length != 0) {
          main[0].style.display = "None"
        }
        let navIcons = document.getElementsByClassName('Fifk5');
        navIcons[0].style.display = "None";
        navIcons[2].style.display = "None";
        navIcons[3].style.display = "None";
        navIcons[4].style.display = "None";
        break;
      case lmSites[1]:
        // youtube blocking
        // let mainPage = document.querySelectorAll('[page-subtype="home"]');
        // if (mainPage.length != 0) {
        //   mainPage[0].style.display = "None";
        // }
        let autoplay = document.getElementById("toggle");
        if (autoplay != null) {
          if (autoplay.hasAttribute("checked")) {
            autoplay.removeAttribute("checked");
          }
        }
        addCssLink("https://github.com/patrickbiel01/EfficientErudite/blob/master/css/1_EE.css", 1)
        }
        break;
      case lmSites[2]:
        // facebook blocking
        addCssLink("https://github.com/patrickbiel01/EfficientErudite/blob/master/2_EE.css", 1)
        break;
      case lmSites[3]:
        // reddit blocking
          addCssLink("https://github.com/patrickbiel01/EfficientErudite/blob/master/3_EE.css", 1)
        break;
      case lmSites[4]:
        // twitter blocking
          addCssLink("https://github.com/patrickbiel01/EfficientErudite/blob/master/4_EE.css", 1)
        break;
      default:

    }
  }

}

partialBlocking()
