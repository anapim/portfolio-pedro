$.getJSON("/js/sound.json", function (json) {
    let txt = "";

    if (document.getElementById("sound")){
        for (x in json) {
            txt += "<div class='col-lg-4 col-sm-6 portfolio-item'>" +
                        "<div class='card h-100'>" +
                            "<a href=" + json[x].link + ">" +
                                "<img class='card-img-top' src=" + json[x].img + ">" +
                            "</a>" +
                            "<a class='card-body' href=" + json[x].link + ">" +
                                "<h4 class='card-title'>" +
                                    json[x].title +
                                "</h4>" +
                            "</a>" +
                        "</div>" +         
                    "</div>";
        }
    
        document.getElementById("sound").innerHTML = txt;
    }

    if (document.getElementById("detail")){
        const index = document.getElementById("detail").getAttribute("data-index");
        
        for (x in json) {
            if (index === json[x].id){
                let links = "";

                for (y in json[x].externallinks){
                   links += "<a href=" + json[x].externallinks[y] + " target='_blank'>" + json[x].externallinks[y] + "</a><br>";
                }

                txt += "<h1 class='my-4'>" + json[x].title + "</h1>" +
                        "<div class='row'>" +
                            "<div class='col-6 color-grey'>" + 
                                json[x].description +
                            "</div>" +
                        "<div class='col-1'></div>" +
                        "<div class='col-5'>" +
                            "<div class='row'>" +
                                "<div class='col-2'>Role</div>" +
                                "<div class='col-10 color-grey'>" + json[x].role + "</div>" +
                            "</div>" +
                            "<div class='row'>" +
                                "<div class='col-2'>Date</div>" +
                                "<div class='col-10 color-grey'>" + json[x].date + "</div>" +
                            "</div>" +
                            "<div class='row'>" +
                                "<div class='col-2'></div>" +
                                "<div class='col-10 color-grey'>" +
                                    links +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                    "<div class='player'>" +
                    json[x].soundcloud +
                "</div>"
            }
        }

        document.getElementById("detail").innerHTML = txt;

    }
    
});