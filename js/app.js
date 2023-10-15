

const QRsearchbtn= document.getElementById('QRsearchbtn')

const QRgetData=()=>{
    // console.log('working')
    const QRData = document.getElementById('QRinput').value;
    document.getElementById('QRinput').value="";

    const QRwidth = document.getElementById('QRwidth').value;
    document.getElementById('QRwidth').value="";

    const QRheight = document.getElementById('QRheight').value;
    document.getElementById('QRheight').value="";
    // console.log(QRData,QRwidth,QRheight);

    const QRlink = `https://api.qrserver.com/v1/create-qr-code/?size=${QRwidth}x${QRheight}&data=${QRData}`;
    // console.log(QRlink)
    document.getElementById('img').src= QRlink
}


QRsearchbtn.addEventListener('click',QRgetData)














