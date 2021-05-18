class Form{
    constructor(){
        this.title = createElement("h1");
        this.title1 = createElement("h1");
        this.title2 = createElement("h1");

        this.select = createElement("h1");

        this.selection = loadImage("Images/Selection.png");
        this.devilsButton = createButton("Ze Deuvil");
        this.AngelsButton = createButton("Angel");


    }

    display(){
        imageMode(CENTER);
        image(this.selection,width/2,height/2)
        this.devilsButton.position(width * 0.25,height * 0.73);
        this.devilsButton.style("width","60px");
        this.devilsButton.style("background","black");
        this.devilsButton.style("borderColor","red");
        this.devilsButton.style("color","red");
        this.devilsButton.style("fontSize","15px");
        this.devilsButton.style("borderWidth","5px");


        this.AngelsButton.position(width * 0.75,height * 0.75);
        this.AngelsButton.style("width","58px");
        this.AngelsButton.style("height","35px");
        this.AngelsButton.style("background","lightblue");
        this.AngelsButton.style("borderColor","grey");
        this.AngelsButton.style("borderWidth","5px");
        this.AngelsButton.style("color","grey");
        this.AngelsButton.style("fontSize","15px");

        this.title.html("𝔖𝔲𝔲𝔭𝔢𝔯");
        this.title1.html("𝔇𝔡𝔲𝔭𝔢𝔯");
        this.title2.html("𝔉𝔦𝔤𝔥𝔱");

        this.select.html("Select a fighter");

        this.select.position(width*0.47,height*0.75)
        this.select.style("color","yellow")

        this.title.position(width*0.45,height*0.25)
        this.title1.position(width*0.45,height*0.35)
        this.title2.position(width*0.47,height*0.45)

        this.title.style("color","yellow")
        this.title1.style("color","yellow")
        this.title2.style("color","yellow")

        this.title.style("fontSize","80px")
        this.title1.style("fontSize","80px")
        this.title2.style("fontSize","80px")
    }
}