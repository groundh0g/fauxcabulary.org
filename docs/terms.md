---
layout: page
showTitle: false
permalink: /terms/
---


  <div class="back-to-top">
<!--    <ul class="nav nav-pills" id="myTab" role="tablist" aria-orientation="vertical">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="tab-back-to-top" data-bs-toggle="pill" type="button" role="button" href="#null"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
      </li>
    </ul> -->
    <a type="button" class="btn btn-primary" href="#"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
  </div>
  
  
  <div class="row">
  <div class="col-2">
  <div class="fauxcab-button-col">

  <ul class="nav nav-pills" id="myTab" role="tablist" aria-orientation="vertical">
  {% assign letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: "," %}
  {% for letter in letters %}
    {% assign lower = letter | downcase %}
    <li class="nav-item" role="presentation">
      <button class="nav-link {% if forloop.first %}active{% endif %}" id="tab-{{lower}}" data-bs-toggle="pill" data-bs-target="#v-pills-{{lower}}" type="button" role="tab" aria-controls="v-pills-{{lower}}" aria-selected="false">{{letter}}</button>
    </li>
  {% endfor %}
  </ul>

  </div>
  </div>

  <div class="col-10">

  {% assign terms = "" | split: "," %}
  {% for term in site.data.terms.terms %}
  {% assign terms = terms | push: term[1] %}
  {% endfor %}
  
  {% assign sorted = terms | sort: "text" %}
  
  
  {% assign prevChar = "" %}
  {% assign index = 0 %}
  <div class="tab-content" id="v-pills-tabContent">
    <div class="hidden">

    {% for term in sorted %}
    {% assign currChar = term.text | upsize | slice: 0 %}
    
    {% if currChar != prevChar %}
    </div>
    <div class="tab-pane fade {% if forloop.first %}show active{% endif %}" id="v-pills-{{currChar | downcase}}" role="tabpanel" aria-labelledby="v-pills-{{currChar | downcase}}">
    {% endif %}
    
    <div class="fauxcab-term">
      {% include hr.widget %}
      <h3>{{ term.text }}</h3>
      <p class="fauxcab-part">&mdash;{{ term.part }} ({{ term.says }})</p>
      <p class="fauxcab-defs">
      <ol>
      {% for def in term.defs %}
        <li>{{ def }}</li>
      {% endfor %}
      </ol>
      </p>
      <p class="fauxcab-date">First seen on: <span class="fauxcab-date"><b>{{ term.date | slice: 0, 10 | date: "%a, %b %d, %Y" }}</b></span></p>
      {% include hr.widget %}
    </div>

    {% assign prevChar = currChar %}
    {% endfor %}

    </div>
  </div>
  
  </div>
  </div>
