chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status == 'complete'){
      // Get the screenshot of the current tab
      chrome.tabs.captureVisibleTab(null, { format: "png" }, function (screenshotUrl) {
        chrome.storage.local.set({image: screenshotUrl})
      })
      // execute le script
      chrome.scripting.executeScript({
          files: ['appOn.js'],
          target: {tabId: tab.id}
        });
    };
  });



