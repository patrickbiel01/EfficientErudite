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

function EE_url_domain(data) {
  var    a = document.createElement('a');
         a.href = data;
  return a.hostname;
}

function partialBlocking() {
  //List of sites where "distraction-free mode" is enabled
  let siteList = ["www.instagram.com", "www.youtube.com", "www.facebook.com", "www.reddit.com", "twitter.com"]; //Add more sites

  //Fetch saved setting for each limited blocking site and
  //Put into a map (domain name : bool rep. if it is partially disabled)
    // chrome.storage.sync.get([site], function(result) {
    //   map.set(site, result.key);
    // });
    // if (result.key = true) {
    //   lmBlock.append(site)
    // }

  chrome.storage.sync.get(['state'], function(result1) {
    let studyMode = result1.state;
    chrome.storage.sync.get(['lm'], function(result2) {
      let lmStateList = result2.lm;

      let url = window.location.href;
      let domain = EE_url_domain(url);
      let index = siteList.indexOf(domain);

      if (index < 0) {
        return;
      }
      if ( studyMode && lmStateList[index] ) {
        switch(domain) {

          case siteList[0]:
            // instagram blocking
            console.log("THIS IS instagram");
            // let main = document.getElementsByTagName('main');
            // if (main.length != 0) {
            //   main[0].style.display = "None"
            // }
            let navIcons = document.getElementsByClassName('Fifk5');
            navIcons[0].style.display = "None";
            navIcons[2].style.display = "None";
            navIcons[3].style.display = "None";
            navIcons[4].style.display = "None";
            addCssLink(chrome.extension.getURL("css/0_EE.css"), 0)
            break;
          case siteList[1]:
            // youtube blocking
            //TODO: Fix autoplay disable
            let autoplay = document.getElementById("toggle");
            if (autoplay != null) {
              if (autoplay.hasAttribute("checked")) {
                autoplay.removeAttribute("checked");
              }
            }
            addCssLink(chrome.extension.getURL("css/1_EE.css"), 1)
            break;
          case siteList[2]:
            // facebook blocking
            addCssLink(chrome.extension.getURL("css/2_EE.css"), 2)
            break;
          case siteList[3]:
            // reddit blocking
              addCssLink(chrome.extension.getURL("css/3_EE.css"), 3)
            break;
          case siteList[4]:
            // twitter blocking
              addCssLink(chrome.extension.getURL("css/4_EE.css"), 4)
            break;
          default:

        }
      }

    });
  });
  }

partialBlocking()
