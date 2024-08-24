
const tabButtons = document.querySelectorAll(".tablinks");
for(var i = 0; i < tabButtons.length; i++){
    tabButtons[i].addEventListener("click", function(){
        var tabName = this.dataset.tab;
        var tabcontent = document.getElementById(tabName);

        const allTabContent = document.querySelectorAll(".tabcontent")
        const allTabButtons = document.querySelectorAll(".tablinks")

        for(j=0; j<allTabContent.length; j++){
            allTabContent[j].style.display = "none"; 
        }

        for(k=0; k<allTabButtons.length; k++){
            allTabButtons[k].classList.remove("active"); 
        }

        tabcontent.style.display = "block";
        this.classList.add("active");
    });

}
document.querySelector(".tablinks").click();


