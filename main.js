function yz250() {
    var Motocross = {
        Brand: "Yamaha",
        Model: "yz250",
        Engine_Size: "250cc",
        Engine_Type: "2-Stroke",
        Color: "Blue",
        Sound: "Braaap"
    };
    delete Motocross.Sound;
    document.getElementById("Dictionary").innerHTML = Motocross.Model;
}