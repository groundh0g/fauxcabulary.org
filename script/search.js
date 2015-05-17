var blogPosts = [];

var searchForTerm = function(text) {
	var results = [];
	results.exactMatch = false;
	text = text.toLowerCase();
	for(var i = 0; i < blogPosts.length; i++) {
		var match =
			blogPosts[i].title.toLowerCase().includes(text) ||
			blogPosts[i].tags.toLowerCase().includes(text);
		if(match) {
			results.push(blogPosts[i]);
			if(blogPosts[i].title.toLowerCase() === text.toLowerCase()) {
				results.exactMatch = true;
			}
		}
	}
	return results;
};

var doSearch = function() {
	var searchText = $("#txtSearch").val();
	if(searchText.length > 0) {
		var results = searchForTerm(searchText);
		return results;
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
      var match = str.match(substrRegex);
      if(match && match.length) {
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
		if(whenSearchTermsReady) { whenSearchTermsReady(); }
	  }
	});

// 	$("#cmdSearch").click(function () { doSearch(); });
// 	$("#txtSearch").keypress(function (e) { 
// 		if(e.which === 13) { 
// 			doSearch();
// 			//e.preventDefault = true;
// 			return false;
// 		}
// 	});
});
