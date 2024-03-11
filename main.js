function toggleDetail(e) {
    const target = $(e.target)

   if($(target).hasClass("active")){
    $(target).html("More Info").removeClass("active")
   }else{
    $(target).html("Less Info").addClass("active")
   }

    const item = $($(target).parents(".about-exp-item"))
    const div = $($(item).children("div"))
    const itemDetail = $($(div).children("p.about-exp-item-detail"))
    console.log(itemDetail);
    
    $(itemDetail).slideToggle()
}