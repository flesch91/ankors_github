
$(document).ready(function(){

    var functions = {
        // связаные поля для количества слов
        allwords_slide : function (self){
            var before = $("#ankor_count_words_before_links").slider("values"); //before[0] - min; before[1] - max
            var inlink = $("#ankor_count_words_in_links").slider("values");
            var after  = $("#ankor_count_words_after_links").slider("values");

            //var all_min = $(self).attr("data-min");
            var all_max = $(self).attr("data-max");

            var val_=$(self).slider("values");

            var val_min=$(self).find(".min").val();
            var val_max=$(self).find(".max").val();

            var p_min=val_min/val_[0];
            var p_max=(val_max-val_[1])/all_max;

            var v_before_min=before[0]*p_min;
            var v_before_max=before[1]+before[1]*p_max;

            var v_inlink_min=inlink[0]*p_min;
            var v_inlink_max=inlink[1]+before[1]*p_max;

            var v_after_min=after[0]*p_min;
            var v_after_max=after[1]+before[1]*p_max;


            $("#ankor_count_words_before_links").slider("values",[v_before_min,v_before_max]);
            $("#ankor_count_words_in_links").slider("values",[v_inlink_min,v_inlink_max]);
            $("#ankor_count_words_after_links").slider("values",[v_after_min,v_after_max]);

        },
        words_slide : function (self){
            var before = $("#ankor_count_words_before_links").slider("values");
            var inlink = $("#ankor_count_words_in_links").slider("values");
            var after  = $("#ankor_count_words_after_links").slider("values");

            var min = parseInt(before[0])+parseInt(inlink[0])+parseInt(after[0]);
            var max = parseInt(before[1])+parseInt(inlink[1])+parseInt(after[1]);

            $("#ankor_count_all_words").slider({min:min,max:max});
            $("#ankor_count_all_words").slider("values",[min,max]);

            $(self).removeClass("deactive");

        },

        words_change : function(self){

            var before_max=$("#ankor_count_words_before_links").find(".max").val();
            var before_min=$("#ankor_count_words_before_links").find(".min").val();
            var inlink_max=$("#ankor_count_words_in_links").find(".max").val();
            var inlink_min=$("#ankor_count_words_in_links").find(".min").val();
            var after_max=$("#ankor_count_words_after_links").find(".max").val();
            var after_min=$("#ankor_count_words_after_links").find(".min").val();

            var max = parseInt(before_max)+parseInt(inlink_max)+parseInt(after_max);
            var min = parseInt(before_min)+parseInt(inlink_min)+parseInt(after_min);

            $("#ankor_count_all_words").slider({min:min,max:max});
            $("#ankor_count_all_words").slider("values",[min,max]);
        },

        slide_create : function (self){
            var val_min=$(self).find(".min").val();
            var val_max=$(self).find(".max").val();

            $(self).slider('values', [val_min,val_max]);
        },

        // связаные поля для количества символов
        allsymbols_slide : function (self){
        var before = $("#ankor_count_symbols_before_links").slider("values"); //before[0] - min; before[1] - max
        var inlink = $("#ankor_count_symbols_in_links").slider("values");
        var after  = $("#ankor_count_symbols_after_links").slider("values");

        //var all_min = $(self).attr("data-min");
        var all_max = $(self).attr("data-max");

        var val_=$(self).slider("values");

        var val_min=$(self).find(".min").val();
        var val_max=$(self).find(".max").val();

        var p_min=val_min/val_[0];
        var p_max=(val_max-val_[1])/all_max;

        var v_before_min=before[0]*p_min;
        var v_before_max=before[1]+before[1]*p_max;

        var v_inlink_min=inlink[0]*p_min;
        var v_inlink_max=inlink[1]+before[1]*p_max;

        var v_after_min=after[0]*p_min;
        var v_after_max=after[1]+before[1]*p_max;


        $("#ankor_count_symbols_before_links").slider("values",[v_before_min,v_before_max]);
        $("#ankor_count_symbols_in_links").slider("values",[v_inlink_min,v_inlink_max]);
        $("#ankor_count_symbols_after_links").slider("values",[v_after_min,v_after_max]);

    },
        symbols_slide : function (self){
        var before = $("#ankor_count_symbols_before_links").slider("values");
        var inlink = $("#ankor_count_symbols_in_links").slider("values");
        var after  = $("#ankor_count_symbols_after_links").slider("values");

        var min = parseInt(before[0])+parseInt(inlink[0])+parseInt(after[0]);
        var max = parseInt(before[1])+parseInt(inlink[1])+parseInt(after[1]);

        $("#ankor_count_all_symbols").slider({min:min,max:max});
        $("#ankor_count_all_symbols").slider("values",[min,max]);

        $(self).removeClass("deactive");

    },

        symbols_change : function(self){

        var before_max=$("#ankor_count_symbols_before_links").find(".max").val();
        var before_min=$("#ankor_count_symbols_before_links").find(".min").val();
        var inlink_max=$("#ankor_count_symbols_in_links").find(".max").val();
        var inlink_min=$("#ankor_count_symbols_in_links").find(".min").val();
        var after_max=$("#ankor_count_symbols_after_links").find(".max").val();
        var after_min=$("#ankor_count_symbols_after_links").find(".min").val();

        var max = parseInt(before_max)+parseInt(inlink_max)+parseInt(after_max);
        var min = parseInt(before_min)+parseInt(inlink_min)+parseInt(after_min);

        $("#ankor_count_all_symbols").slider({min:min,max:max});
        $("#ankor_count_all_symbols").slider("values",[min,max]);

        $("#Orders_ankor_count_all_symbols_min").val(min);
        $("#Orders_ankor_count_all_symbols_max").val(max);

    }


    }

    //-------------Подключаем слайдеры---------------------------

    $(".slider").each(function(n,v){
        var min=$(v).attr("data-min");
        var max=$(v).attr("data-max");

        var onslide = $(v).attr("data-onslide");
        var oncreate = $(v).attr("data-oncreate");
        var onchange = $(v).attr("data-onchange");

        var objmin=$(v).find("input:first");
        var objmax=$(v).find("input:last");

        var valmin=$(objmin).val();
        var valmax=$(objmax).val();

        if(valmin<1){valmin=min;}
        if(valmax<1){valmax=max;}

        $(v).slider({
            range: true,
            min:parseInt(min),
            max:parseInt(max),
            values:[parseInt(valmin),parseInt(valmax)],
            slide: function( event, ui ) {
                $(objmin).val(ui.values[0]);
                $(objmax).val(ui.values[1]);
                $(ui).first().html("<span class='slider-label'>"+ui.values[0]+"</span>");
                $(ui).last().html("<span class='slider-label'>"+ui.values[1]+"</span>");
                if(onslide!=undefined){
                    functions[onslide](this);
                }
            },
            create :function(){
                $(this).find("a.ui-slider-handle:first").html("<span class='slider-label'>"+min+"</span>");
                $(this).find("a.ui-slider-handle:last").html("<span class='slider-label'>"+max+"</span>");
                if(oncreate!=undefined){
                    functions[oncreate](this);
                }
            },
            change :function(event, ui){
                $(this).find("a.ui-slider-handle:first").html("<span class='slider-label'>"+ui.values[0]+"</span>");
                $(this).find("a.ui-slider-handle:last").html("<span class='slider-label'>"+ui.values[1]+"</span>");
                if(onchange!=undefined){
                    functions[onchange](this);
                }
            }
        });
    });

//-------------- Обязательный текст ------------------------------------
    $("#Orders_ankor_check_required_text").change(function(){
            $(".required_check").toggle();
    });

//-------------- Запрещенный текст ------------------------------------
    $("#Orders_ankor_check_forbidden_text").change(function(){
        $(".forbidden_check").toggle();
    });

//-------------- Повторять слова ----------------------------------------

//    $("#Orders_ankor_count_all_symbols_min").change(function(){
//        console.log("fff");
//    });

//--------------Повторять слова----------------------------------------
    function parse_all_repeat_word(){
        if($("#Orders_ankor_repeat_words").is(":checked")){
            $("#Orders_ankor_repeat_words_before, #Orders_ankor_repeat_words_in, #Orders_ankor_repeat_words_after").prop('checked',true);
        }else{
            $("#Orders_ankor_repeat_words_before, #Orders_ankor_repeat_words_in, #Orders_ankor_repeat_words_after").prop('checked',false);
        }
    }

    function parse_repeat_word(){
        if(!($("#Orders_ankor_repeat_words_before").is(':checked')&&$("#Orders_ankor_repeat_words_in").is(':checked')&&$("#Orders_ankor_repeat_words_after").is(':checked'))){
            $("#Orders_ankor_repeat_words").prop('indeterminate',false);
            $("#Orders_ankor_repeat_words").prop('checked',false);
        }
        if(($("#Orders_ankor_repeat_words_before").is(':checked')||$("#Orders_ankor_repeat_words_in").is(':checked')||$("#Orders_ankor_repeat_words_after").is(':checked'))){
            $("#Orders_ankor_repeat_words").prop('indeterminate',true);
            $("#Orders_ankor_repeat_words").prop('checked',false);
        }

        if(($("#Orders_ankor_repeat_words_before").is(':checked')&&$("#Orders_ankor_repeat_words_in").is(':checked')&&$("#Orders_ankor_repeat_words_after").is(':checked'))){
            $("#Orders_ankor_repeat_words").prop('indeterminate',false);
            $("#Orders_ankor_repeat_words").prop('checked',true);
        }

    }
    $("#Orders_ankor_repeat_words_before, #Orders_ankor_repeat_words_in, #Orders_ankor_repeat_words_after").on("change",parse_repeat_word);
    $("#Orders_ankor_repeat_words").on("change",parse_all_repeat_word);
    parse_repeat_word();

//--------------Знаки перепенания----------------------------------------
    function parse_all_punctuation(){
        if($("#Orders_ankor_punctuation").is(":checked")){
            $("#Orders_ankor_punctuation_before, #Orders_ankor_punctuation_in, #Orders_ankor_punctuation_after").prop('checked',true);
        }else{
            $("#Orders_ankor_punctuation_before, #Orders_ankor_punctuation_in, #Orders_ankor_punctuation_after").prop('checked',false);
        }
    }

    function parse_punctuation(){
        if(!($("#Orders_ankor_punctuation_before").is(':checked')&&$("#Orders_ankor_punctuation_in").is(':checked')&&$("#Orders_ankor_punctuation_after").is(':checked'))){
            $("#Orders_ankor_punctuation").prop('indeterminate',false);
            $("#Orders_ankor_punctuation").prop('checked',false);
        }
        if(($("#Orders_ankor_punctuation_before").is(':checked')||$("#Orders_ankor_punctuation_in").is(':checked')||$("#Orders_ankor_punctuation_after").is(':checked'))){
            $("#Orders_ankor_punctuation").prop('indeterminate',true);
            $("#Orders_ankor_punctuation").prop('checked',false);
        }

        if(($("#Orders_ankor_punctuation_before").is(':checked')&&$("#Orders_ankor_punctuation_in").is(':checked')&&$("#Orders_ankor_punctuation_after").is(':checked'))){
            $("#Orders_ankor_punctuation").prop('indeterminate',false);
            $("#Orders_ankor_punctuation").prop('checked',true);
        }
    }
    $("#Orders_ankor_punctuation_before, #Orders_ankor_punctuation_in, #Orders_ankor_punctuation_after").on("change",parse_punctuation);
    $("#Orders_ankor_punctuation").on("change",parse_all_punctuation);
    parse_punctuation();

    //--------------Использовать цифры----------------------------------------
    function parse_all_numbers(){
        if($("#Orders_ankor_numbers").is(":checked")){
            $("#Orders_ankor_numbers_before, #Orders_ankor_numbers_in, #Orders_ankor_numbers_after").prop('checked',true);
        }else{
            $("#Orders_ankor_numbers_before, #Orders_ankor_numbers_in, #Orders_ankor_numbers_after").prop('checked',false);
        }
    }

    function parse_numbers(){
        if(!($("#Orders_ankor_numbers_before").is(':checked')&&$("#Orders_ankor_numbers_in").is(':checked')&&$("#Orders_ankor_numbers_after").is(':checked'))){
            $("#Orders_ankor_numbers").prop('indeterminate',false);
            $("#Orders_ankor_numbers").prop('checked',false);
        }
        if(($("#Orders_ankor_numbers_before").is(':checked')||$("#Orders_ankor_numbers_in").is(':checked')||$("#Orders_ankor_numbers_after").is(':checked'))){
            $("#Orders_ankor_numbers").prop('indeterminate',true);
            $("#Orders_ankor_numbers").prop('checked',false);
        }

        if(($("#Orders_ankor_numbers_before").is(':checked')&&$("#Orders_ankor_numbers_in").is(':checked')&&$("#Orders_ankor_numbers_after").is(':checked'))){
            $("#Orders_ankor_numbers").prop('indeterminate',false);
            $("#Orders_ankor_numbers").prop('checked',true);
        }

    }
    $("#Orders_ankor_numbers_before, #Orders_ankor_numbers_in, #Orders_ankor_numbers_after").on("change",parse_numbers);
    $("#Orders_ankor_numbers").on("change",parse_all_numbers);

    parse_numbers();

    //--------------Если выбраны "Использовать в конце" то стави галочку "Знаки перепенания" после ссылки----------------------------------------

    if($("#Orders_ankor_end_symbol").val()!="") {
        $("#Orders_ankor_punctuation_after").prop('checked',true);
        parse_punctuation();
    }else{
        $("#Orders_ankor_punctuation_after").prop('checked',false);
        parse_punctuation();
    }
    $("#Orders_ankor_end_symbol").change(function(){
        if($(this).val()!="") {
            $("#Orders_ankor_punctuation_after").prop('checked',true);
            parse_punctuation();
        }else{
            $("#Orders_ankor_punctuation_after").prop('checked',false);
            parse_punctuation();
        }
    });


});