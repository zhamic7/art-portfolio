var expand = document.getElementsByClassName("collapsible");
        for (var i = 0; i < expand.length; i++)
        {
            expand[i].addEventListener("click", function()
            {
                this.classList.toggle("active");
                var content = document.getElementsByClassName("info");
                if (content[0].style.display == "inline-block")
                {
                    content[0].style.display = "none";
                }
                else
                {
                    content[0].style.display = "inline-block";
                }
            });
        }