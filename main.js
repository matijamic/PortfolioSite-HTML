$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open")
    $(".top-nav").toggleClass("open")
  })

  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open")
    $(".top-nav").removeClass("open")
  })

  $('nav a[href*="#"]').on("click", function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    )
  })

  $("#up").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    )
  })

  AOS.init({
    easing: "ease",
    duration: 1800,
  })
})

window.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("my-form")
  var status = document.getElementById("my-form-status")

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset()
    status.classList.add("success")
    status.innerHTML = "Thank you! Your message was submitted successfully ✅"
  }

  function error() {
    status.innerHTML = "Oops! There was a problem."
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault()
    var data = new FormData(form)
    ajax(form.method, form.action, data, success, error)
  })
})

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}
