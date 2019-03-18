var box=document.getElementById('box');
box.ondragover=function (e){
 e.preventDefault();
}
box.ondrop=function (e){
    e.preventDefault();
    // console.log(e.dataTransfer.files[0]);
    var f=e.dataTransfer.files[0];//获取到第一个上传的文件对象
    var fr=new FileReader();//实例FileReader对象
    fr.readAsDataURL(f);//把上传的文件对象转换成url
    fr.onload=function (e){
    console.log(e);
    // var Url=e.target.result;//上传文件的URL
    var Url=this.result;//上传文件的URL
    console.log(document.getElementById('img'))
    document.getElementById('img').src = Url;
 }
}