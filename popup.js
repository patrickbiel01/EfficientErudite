function saveState () {
  let checker = document.getElementById("myonoffswitch");
  chrome.storage.sync.set({ "state": checker.checked }, function(){
  //  A data saved callback omg so fancy
  });
}

document.getElementById("myonoffswitch").addEventListener("click", saveState);

try {
  chrome.storage.sync.get(['state'], function(result) {
    document.getElementById("myonoffswitch").checked = result.state;
  });
} catch (e) {
  chrome.storage.sync.set({ "state": false }, function(){
    document.getElementById("myonoffswitch").checked = false;
  });
}
