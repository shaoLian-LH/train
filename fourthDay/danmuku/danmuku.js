$(function(){
    let alias = 'danmuku';
    $('#send').on('click', ()=>{
        let newDanMuKu = $('#danmuku-input').val();
        $.DanMuKuWall.send(alias, newDanMuKu, $('#mainScreen'));
    });
    $('#clear').on('click', ()=>{
        $.DanMuKuWall.clear(alias, $('#mainScreen'));
    })
});