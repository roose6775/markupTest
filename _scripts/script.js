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

    if (tabName === "rec-viewed-units") {
        getRecentlyViewedUnits();

    }

    document.getElementById(tabName).style.display = "block";
    tablinks[evt].className += " requests-units-tab-active";
}

function getRecentlyViewedUnits() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status === 200) {
            let recentlyViewedUnits = JSON.parse(xhr.responseText);
            let element = document.getElementById("recently-viewed");
            element.innerHTML = "";
            recentlyViewedUnits.forEach((el) => {
                let div = document.createElement('div');
                div.innerHTML = `${el.requestName} : ${el.status}`;
                element.appendChild(div);
            });
        }
    };
    xhr.open('GET','_resources/recentlyViewed.json',false);
    xhr.send();
}