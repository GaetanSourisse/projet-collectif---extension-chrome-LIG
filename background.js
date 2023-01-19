let monTabId = 0
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status == 'complete'){
        monTabId = tabId;
    }
})

