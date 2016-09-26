"use strict";
openTab(0,'requests')
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" requests-units-tab-active", "");
    }

    document.getElementById(tabName).style.display = "block";
    tablinks[evt].className += " requests-units-tab-active";
}