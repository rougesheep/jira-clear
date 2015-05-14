// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('selectedIssue') > -1 && tab.url.indexOf('jira') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab){
  array=tab.url.split("?");
  args=tab.url.split("&");
  args.pop();
  new_uri=args.join("&");
  //Reload current tab with embedded URL
  chrome.tabs.update(tab.id, {url: new_uri});
});
