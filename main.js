// function untuk list Toggle
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

// contact alert Validasi
function formSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("email belum terisi")
    } else if (!$(subject).val()){
        alert("Subjek belum terisi")
    } else if(!$(message).val()){
        alert("pesan belum terisi")
    }else{
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form Sudah Terkirim")

    }

}

