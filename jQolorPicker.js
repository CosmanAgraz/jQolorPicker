$().ready( () => {
    var draggable = $('.slider');

    draggable.on("mousedown", (e) => {
        var drag = $(this).addClass("drag").css("cursor", "move");
        pickerWidth = drag.outerWidth();
        //max_left = drag.parent().offset().left + drag.parent().width() - drag.width();
        //min_left = drag.parent().offset().left;

        xpos = drag.offset().left + pickerWidth - e.pageX;

        $(document.body).on("mousemove", (e) => {
            var ileft = e.pageX + xpost - width;

            if (drag.hasClass("drag"))
            {
                //if ( ileft <= min_left ) { ileft = min_left };
                //if ( ileft >= max_left ) { ileft = max_left };
                drag.offset( { left: ileft });
            }
        }).on("mousestop", (e) => {
            drag.removeClass("drag");
        })
    });
});