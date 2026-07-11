document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var header = document.querySelector(".site-header");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("open");
    });
    // Close the mobile menu after tapping a nav link (matters for anchor nav on the landing page)
    var links = header.querySelectorAll(".main-nav a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        header.classList.remove("open");
      });
    }
  }

  // Timetable lightbox: each branch's "了解补习时间表" button opens its own uploaded timetable image
  var modal = document.getElementById("timetable-modal");
  var modalImg = document.getElementById("timetable-modal-img");
  var modalTitle = document.getElementById("timetable-modal-title");
  var modalClose = document.getElementById("timetable-modal-close");
  var modalCta = modal ? modal.querySelector(".timetable-modal-cta a") : null;

  function openTimetable(btn) {
    var branch = btn.getAttribute("data-branch") || "补习时间表";
    var img = btn.getAttribute("data-img");
    var wa = btn.getAttribute("data-wa");
    modalTitle.textContent = branch + " · 补习时间表";
    modalImg.src = img;
    modalImg.alt = branch + " 补习时间表";
    modalImg.style.display = "";
    var fallback = modal.querySelector(".timetable-modal-fallback");
    if (fallback) fallback.remove();
    if (wa && modalCta) modalCta.href = wa;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeTimetable() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (modal) {
    var timetableBtns = document.querySelectorAll(".timetable-btn");
    for (var j = 0; j < timetableBtns.length; j++) {
      timetableBtns[j].addEventListener("click", function () {
        openTimetable(this);
      });
    }
    modalImg.addEventListener("error", function () {
      modalImg.style.display = "none";
      if (!modal.querySelector(".timetable-modal-fallback")) {
        var box = modal.querySelector(".timetable-modal-box");
        var div = document.createElement("div");
        div.className = "timetable-modal-fallback";
        div.innerHTML = '<svg viewBox="0 0 32 32" fill="none"><rect x="5" y="6" width="22" height="20" rx="2" stroke="#F8F4EC" stroke-width="2" fill="none"/><line x1="5" y1="13" x2="27" y2="13" stroke="#C9A24B" stroke-width="2"/><line x1="10" y1="4" x2="10" y2="9" stroke="#F8F4EC" stroke-width="2" stroke-linecap="round"/><line x1="22" y1="4" x2="22" y2="9" stroke="#F8F4EC" stroke-width="2" stroke-linecap="round"/></svg><p>时间表照片准备中，欢迎直接 WhatsApp 我们索取。</p>';
        box.insertBefore(div, modalCta.closest(".timetable-modal-cta"));
      }
    });
    modalClose.addEventListener("click", closeTimetable);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeTimetable();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeTimetable();
    });
  }
});
