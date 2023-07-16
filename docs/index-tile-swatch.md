<div class="body-tile board-tile-F1 board-cell board-cell-tile">F</div>
<div class="body-tile board-tile-F2 board-cell board-cell-tile">A</div>
<div class="body-tile board-tile-F3 board-cell board-cell-tile">U</div>
<div class="body-tile board-tile-F4 board-cell board-cell-tile">X</div>
<div class="body-tile board-tile-F5 board-cell board-cell-tile">C</div>
<div class="body-tile board-tile-F6 board-cell board-cell-tile">A</div>
<div class="body-tile board-tile-F7 board-cell board-cell-tile">B</div>
<div class="body-tile board-tile-F8 board-cell board-cell-tile">U</div>
<div class="body-tile board-tile-F9 board-cell board-cell-tile">L</div>
<div class="body-tile board-tile-F10 board-cell board-cell-tile">A</div>
<div class="body-tile board-tile-F11 board-cell board-cell-tile">R</div>
<div class="body-tile board-tile-F12 board-cell board-cell-tile">Y</div>
<div class="body-tile board-tile-F13 board-cell board-cell-tile">.</div>
<div class="body-tile board-tile-F14 board-cell board-cell-tile">O</div>
<div class="body-tile board-tile-F15 board-cell board-cell-tile">R</div>
<div class="body-tile board-tile-F16 board-cell board-cell-tile">G</div>


<div class="board-strip">
  <div class="empty-board-cell board-cell-R1C1 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R1C2 cell-bonus-tw board-cell">TW</div>
  <div class="empty-board-cell board-cell-R1C3 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R1C4 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R1C5 cell-bonus-tl board-cell">TL</div>
  <div class="empty-board-cell board-cell-R1C6 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R2C1 cell-bonus-none board-cell"> </div>
  <div class="empty-board-cell board-cell-R2C2 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R2C3 cell-bonus-dl board-cell">DL</div>
  <div class="empty-board-cell board-cell-R2C4 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R2C5 cell-bonus-none board-cell"></div>
  <div class="empty-board-cell board-cell-R2C6 cell-bonus-tw board-cell">TW</div>
  <div class="empty-board-cell board-cell-R3C1 cell-bonus-dw board-cell">DW</div>
  <div class="empty-board-cell board-cell-R3C2 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R3C3 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R3C4 cell-bonus-dl board-cell">DL</div>
  <div class="empty-board-cell board-cell-R3C5 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R3C6 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R4C1 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R4C2 cell-bonus-tl board-cell">TL</div>
  <div class="empty-board-cell board-cell-R4C3 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R4C4 cell-bonus-none board-cell">&nbsp;</div>
  <div class="empty-board-cell board-cell-R4C5 cell-bonus-dw board-cell">DW</div>
  <div class="empty-board-cell board-cell-R4C6 cell-bonus-none board-cell"> </div>
</div>


<!-- TODO: for testing the animation on various devices, continuous loop -->
<!-- <div class="header-tile board-tile-F1 board-cell board-cell-tile">F</div> -->
<!-- <div class="header-tile board-tile-F2 board-cell board-cell-tile">A</div> -->
<!-- <div class="header-tile board-tile-F3 board-cell board-cell-tile">U</div> -->
<!-- <div class="header-tile board-tile-F4 board-cell board-cell-tile">X</div> -->
<!-- <div class="header-tile board-tile-F5 board-cell board-cell-tile">C</div> -->
<!-- <div class="header-tile board-tile-F6 board-cell board-cell-tile">A</div> -->
<!-- <div class="header-tile board-tile-F7 board-cell board-cell-tile">B</div> -->
<!-- <div class="header-tile board-tile-F8 board-cell board-cell-tile">U</div> -->
<!-- <div class="header-tile board-tile-F9 board-cell board-cell-tile">L</div> -->
<!-- <div class="header-tile board-tile-F10 board-cell board-cell-tile">A</div> -->
<!-- <div class="header-tile board-tile-F11 board-cell board-cell-tile">R</div> -->
<!-- <div class="header-tile board-tile-F12 board-cell board-cell-tile">Y</div> -->
<!-- <div class="header-tile board-tile-F13 board-cell board-cell-tile">.</div> -->
<!-- <div class="header-tile board-tile-F14 board-cell board-cell-tile">O</div> -->
<!-- <div class="header-tile board-tile-F15 board-cell board-cell-tile">R</div> -->
<!-- <div class="header-tile board-tile-F16 board-cell board-cell-tile">G</div> -->


<div class="top-padding-div">&nbsp;</div>

<script type="module">
    let lastKnownScrollPosition = 0;
    
    const initBoard = () => {
        
    };
    
    let lastKnownWidth = window.innerWidth;
    window.addEventListener('resize', function() {
      // do something when the window is resized
    });

    window.document.querySelectorAll("nav.navbar")[0].classList.add("top-of-page");
    document.addEventListener("scroll", (event) => {
        console.log("window.scrollY: ", window.scrollY);
        if(window.scrollY === 0) {
            window.document.querySelectorAll(".header-tile").forEach((element, index, array) => {
                element.classList.remove("header-tile");
                element.classList.add("body-tile");
            });
            setTimeout(() => {
                window.document.querySelectorAll("nav.navbar")[0].classList.add("top-of-page");
            }, 200);
        } else if(!lastKnownScrollPosition && window.scrollY) {
            window.document.querySelectorAll(".body-tile").forEach((element, index, array) => {
                element.classList.remove("body-tile");
                element.classList.add("header-tile");
            });
            window.document.querySelectorAll("nav.navbar")[0].classList.remove("top-of-page");
        }
        lastKnownScrollPosition = window.scrollY;
    });

//     // TODO: for testing the animation on various devices, continuous loop
//     setInterval(() => {
//         window.document.querySelectorAll(".body-tile").forEach((element, index, array) => {
//         console.log(element);
//             element.classList.remove("body-tile");
//             element.classList.add("to-header");
//         });
//         window.document.querySelectorAll(".header-tile").forEach((element, index, array) => {
//             element.classList.remove("header-tile");
//             element.classList.add("to-body");
//         });
//         window.document.querySelectorAll(".to-body").forEach((element, index, array) => {
//             element.classList.remove("to-body");
//             element.classList.add("body-tile");
//         });
//         window.document.querySelectorAll(".to-header").forEach((element, index, array) => {
//             element.classList.remove("to-header");
//             element.classList.add("header-tile");
//         });
//     }, 2000);
</script>
