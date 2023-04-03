function loaded() {
    setInterval(loop, 585)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", (function() {
    loaded()
})) : document.attachEvent && document.attachEvent("onreadystatechange", (function() {
    loaded()
}));
var x = 0,
    titleText = ["IRP_MJ_FLUSH_BUFFERS", IO_CREATE_DEVICE", "IO_UNLOAD_DEVICE"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}
