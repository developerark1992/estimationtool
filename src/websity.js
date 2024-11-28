function toggleBorder(element) {
    // Remove 'clicked' class from all cards
    document.querySelectorAll('.clicked').forEach(card => card.classList.remove('clicked'));
    // Add 'clicked' class to the clicked card
    element.classList.toggle('clicked');
}


//Tabs Script

function showTab(tab) {
    // Get tab buttons and contents
    const tabs = document.querySelectorAll(".tab-btn");
    const basicContent = document.getElementById("basicContent");
    const premiumContent = document.getElementById("premiumContent");

    // Reset styles
    tabs.forEach((tab) => tab.classList.remove("active-tab"));

    // Show the selected tab
    if (tab === "basic") {
      document.getElementById("basicTab").classList.add("active-tab");
      basicContent.classList.remove("hidden");
      premiumContent.classList.add("hidden");
    } else {
      document.getElementById("premiumTab").classList.add("active-tab");
      premiumContent.classList.remove("hidden");
      basicContent.classList.add("hidden");
    }
  }


  function activateTab(activeTabId, inactiveTabId) {
    // Get the active and inactive tabs
    const activeTab = document.getElementById(activeTabId);
    const inactiveTab = document.getElementById(inactiveTabId);
  
    // Apply active styles
    activeTab.classList.remove(
      "text-gray-500", 
      "border-2", 
      "border-stone-300"
    );
    activeTab.classList.add(
      "bg-sky-500", 
      "text-white", 
      "border-b-2", 
      "border-sky-500"
    );
  
    // Reset inactive tab styles
    inactiveTab.classList.remove(
      "bg-sky-500", 
      "text-white", 
      "border-b-2", 
      "border-sky-500"
    );
    inactiveTab.classList.add(
      "text-gray-500", 
      "border-2", 
      "border-stone-300"
    );
  }
  