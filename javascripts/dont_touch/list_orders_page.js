var list_orders = {};
list_orders.orders = {
    0 : {
        comments : [
            {
                li_class : 'my_comment',
                link_avatar_backgroud_image : '/html/images/ava_test_2.png',
                message : 'message  1',
                user_name : 'Я',
                date_user_frendly : 'date',
                date_normal : ''
            },
            {
                li_class : '',
                link_avatar_backgroud_image : '/html/images/ava_test.png',
                message : 'message  1',
                user_name : 'user 1',
                date_user_frendly : 'date',
                date_normal : ''
            }
        ],
        comments_count : 2,
        description : 'Для каждого ключевого слова нужно написать по 3 ссылки. Разбавлять ключи нельзя. Склонять ключевые слова МОЖНО. Не использовать одинаковый окружающий текст для разных анкоров. Кратко о проекте - мы не техцентр и не автосервис, мы портал на котором можно узнать расположение автосервиса, время работы, ремонтные работы, которые проводит автосервис.',
        link_start_work : '',
        link_my_avatar_backgroud_image : ''
    },
    1 : {
        comments : [
            {
                li_class : '',
                link_avatar_backgroud_image : '',
                message : '',
                user_name : '',
                date_user_frendly : '',
                date_normal : ''
            }
        ],
        comments_count : 1,
        description : '',
        link_start_work : '',
        link_my_avatar_backgroud_image : ''
    },
    2 : {
        comments : [
            {
                li_class : '',
                link_avatar_backgroud_image : '',
                message : '',
                user_name : '',
                date_user_frendly : '',
                date_normal : ''
            }
        ],
        comments_count : 1,
        description : '',
        link_start_work : '',
        link_my_avatar_backgroud_image : ''
    }
};

list_orders.open_popup_wrap_box_link = null;
list_orders.open_popup_wrap_box_id = null;
list_orders.showPopUp = function (obj){
    if (list_orders.open_popup_wrap_box_link) {
        list_orders.open_popup_wrap_box_link.hide();
    }
    var li = $(obj).closest('li');
    list_orders.open_popup_wrap_box_link = li.find('.popup_wrap');

    var order_id = li.data('order_id');
    if (list_orders.open_popup_wrap_box_id == order_id) {
        list_orders.open_popup_wrap_box_id = -1;
        return;
    }
    list_orders.open_popup_wrap_box_id = order_id;


    var order_comments_popup_wrap = $("#order_comments_popup_wrap").tmpl(list_orders.orders[list_orders.open_popup_wrap_box_id]);
    list_orders.open_popup_wrap_box_link.html(order_comments_popup_wrap);
    list_orders.open_popup_wrap_box_link.show();

    list_orders.open_popup_wrap_box_link.find('.close').on('click',
        function(){
            list_orders.open_popup_wrap_box_link.hide();
            list_orders.open_popup_wrap_box_id = -1;
        });
    };


list_orders.hidePopUp = function (obj){
    var popup_wrap_box = $(obj).closest('li').find('.popup_wrap');
    if (popup_wrap_box.length > 0) {
        popup_wrap_box.hide();
        list_orders.open_popup_wrap_box_id = -1;
    }
}


list_orders.updateCurrentPopup = function (){
    var order_comments_popup_wrap = $("#order_comments_popup_wrap").tmpl(list_orders.orders[list_orders.open_popup_wrap_box_id]);
    list_orders.open_popup_wrap_box_link.html(order_comments_popup_wrap);
}


$(function() {
    //init
    $('.popup_wrap').hide();

    $("._order_comments_popup").on('click',function() {
        list_orders.showPopUp($(this));
    })
/*
    .mouseout(function(){
        console.log($(this));
        list_orders.hidePopUp($(this));
    });*/;
});