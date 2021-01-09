//Pomodoro Example: https://levelup.gitconnected.com/how-to-use-background-script-to-fetch-data-in-chrome-extension-ef9d7f69625d

function saveState () {
  let checker = document.getElementById("myonoffswitch");
  chrome.storage.sync.set({ "state": checker.checked }, function(){
  //  A data saved callback omg so fancy
  });
}

document.getElementById("myonoffswitch").addEventListener("click", saveState);

// let oAnchor = document.getElementById("optionsLink");
// oAnchor.setAttribute('href', chrome.extension.getURL(path: "options.html") );


try {
  chrome.storage.sync.get(['state'], function(result) {
    document.getElementById("myonoffswitch").checked = result.state;
  });
} catch (e) {
  chrome.storage.sync.set({ "state": false }, function(){
    document.getElementById("myonoffswitch").checked = false;
  });
}
