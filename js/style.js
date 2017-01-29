window.onload=function(){
	var music=document.getElementById("music");
	var audios=document.getElementsByTagName("audio")[0];
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	
//当音乐播放完停止时，自动停止光盘旋转效果
	audios.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);
	//点击光盘控制音乐播放效果
	
	music.addEventListener("touchstart",function(event){
		if(audios.paused){
		audios.play();
		this.setAttribute("class","play");
		//兼容性有问题
		//this.style.animationPlayState="running"
		}else{
			audios.pause();
			this.setAttribute("class","");
			//兼容性有问题，安卓4.0以下不行，ip6plus以下不行
			//this.style.animationPlayState="paused";
		};
	},false);
	//点击屏幕开启2016
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},5000);
		
	},false);
	
};
