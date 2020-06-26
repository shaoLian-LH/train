(function($){
    $.DanMuKuWall={
        danmukus:[],
        send:function(alias, value, target){
            let fs = Math.floor(( Math.random() * 12 ) + 12);
            let r = Math.floor(Math.random() * 254);
            let g = Math.floor(Math.random() * 254);
            let b = Math.floor(Math.random() * 254);
            let newDanMuku = $(`<p class="${alias}">${value}</p>`).css({
                position: 'absolute',
                fontSize: fs,
                display: 'inline-block',
                color: `rgb(${r},${g},${b})`,
                right: 0,
                top: (Math.floor(Math.random() * target.height()) - 12) + "px",
            });
            newDanMuku.css({
                width: $(newDanMuku).width()
            });
            target.append(newDanMuku);
            this.move(newDanMuku, target);
        },
        move: function(objectD, target) {
            let i = 0;
            let speed = Math.floor(Math.random() * 5) + 1;
            let danmuku = setInterval(function(){
                objectD.css({
                    right: (i += speed) + "px"
                });
                if((objectD.offset().left + objectD.width()) < target.offset().left) {
                    objectD.remove();
                    clearInterval(danmuku);
                }
            }, 10);
            this.danmukus.push(danmuku);
        },
        clear:function(alias, target){
            for (let i = 0; i < this.danmukus.length; i++) { 
                clearInterval(this.danmukus[i])
            }
            target.find(`.${alias}`).remove();
        }
    }
})(jQuery);