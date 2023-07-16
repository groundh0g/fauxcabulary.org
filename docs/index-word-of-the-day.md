<div id="wod-div">
  <h1 id="wod-main">Word of <span>the Day</span></h1>
  <p id="wod-text">Hello!</p>
  <p class="wod-says">(<span id="wod-says">foo</span>)</p>
  <p class="wod-part">&mdash; <span id="wod-part">n.</span></p>
  <div id="wod-defs">
  </div>
  <p class="wod-date">First posted on: <span id="wod-date">02.02.2010</span></p>
</div>

<script type="module">
    import { WordOfTheDay } from '{{ "/assets/script/fauxcabulary-terms.js" | relative_url }}';
    
    const term = WordOfTheDay();

    const ol = $("#wod-defs");
    let index = 1;
    for(const def of term.defs) {
        ol.append(`<p>${index++}. ${def}</p>`);
    }

    $("#wod-text").html(term.text);
    $("#wod-part").html(term.part);
    $("#wod-says").html(term.says);
    $("#wod-date").html((new Date(term.date)).toDateString());
</script>