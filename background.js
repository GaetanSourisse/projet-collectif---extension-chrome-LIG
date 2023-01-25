chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status == 'complete'){
      // Get the screenshot of the current tab
      chrome.tabs.captureVisibleTab(null, { format: "png" }, function (screenshotUrl) {
        chrome.storage.local.set({image: screenshotUrl})
      })
      chrome.scripting.executeScript({
          files: ['appOn.js'],
          target: {tabId: tab.id}
        })
      //on rajoute un clear du storage au lancement de l'extension
      chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
      });
    }
  });



