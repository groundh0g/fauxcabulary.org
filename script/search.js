var blogPosts = [];

var searchForTerm = function(text) {
	var results = [];
	for(var i = 0; i < blogPosts.length; i++) {
		var match =
			blogPosts[i].title.includes(text) ||
			blogPosts[i].tags.includes(text);
		if(match) {
			results.push(blogPosts[i]);
		}
	}
	return results;
};

var doSearch = function() {
	var searchText = $("#txtSearch").val();
	if(searchText.length > 0) {
		var results = searchForTerm(searchText);
	
		// ==========
		// DEBUG: test search without UI
		// ==========
		console.log("Search Hits:");
		for(var i = 0; i < results.length; i++) {
			console.log("  " + results[i].title);
		}
		console.log("[" + results.length + " matche(s).]");
		// ==========
	}
};

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if(str.includes(q)) {
        matches.push(str);
      }
    });
 
    cb(matches);
  };
};

var initTypeahead = function() {
	var list = [];
	var data = blogPosts;
	for(var i = 0; i < data.length; i++) {
		list.push(data[i].title);
	}
	
	var typeaheadData = new Bloodhound({
		datumTokenizer: Bloodhound.tokenizers.whitespace,
		queryTokenizer: Bloodhound.tokenizers.whitespace,
		local: list
	});
	typeaheadData.initialize();

	$("#txtSearch").typeahead(
		{ hint: true, highlight: true, minLength: 1 },
		{ name: "titles", source: substringMatcher(list) }
	);
};

$(document).ready(function() {
	$.ajax({
	  dataType: "json",
	  url: BASE_PATH + "/blogPosts.json",
	  data: null,
	  success: function (data) {
	  	if(data) { 
		  blogPosts = data;
		}
		initTypeahead();
	  }
	});

	$("#cmdSearch").click(function () { doSearch(); });
	$("#txtSearch").keypress(function (e) { 
		if(e.which === 13) { 
			doSearch();
			//e.preventDefault = true;
			return false;
		}
	});
});
