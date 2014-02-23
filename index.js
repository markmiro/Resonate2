
window.HAML['index'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"large-12 columns\"><h1>Welcome to Foundation</h1></div></div><div class=\"row\"><div class=\"large-12 columns\"><p>" + 
"<a href=\"" + html_escape('page1') + "\">" + 
"Page 1</a></p><p>" + 
"<a href=\"" + html_escape('page2') + "\">" + 
"Page 2</a></p></div></div><div class=\"row\"><div class=\"large-12 columns\"><div class=\"panel\"><h3>We’re stoked you want to try Foundation!</h3><p>To get going, this file (index.html) includes some basic styles you can modify, play around with, or totally destroy to get going.</p><p>Once you've exhausted the fun in this document, you should check out:</p><div class=\"row\"><div class=\"large-4 medium-4 columns\"><p><a href=\"http://foundation.zurb.com/docs\">Foundation Documentation</a><br />Everything you need to know about using the framework.</p></div><div class=\"large-4 medium-4 columns\"><p><a href=\"http://github.com/zurb/foundation\">Foundation on Github</a><br />Latest code, issue reports, feature requests and more.</p></div><div class=\"large-4 medium-4 columns\"><p><a href=\"http://twitter.com/foundationzurb\">@foundationzurb</a><br />Ping us on Twitter if you have questions. If you build something with this we'd love to see it (and send you a totally boss sticker).</p></div></div></div></div></div><div class=\"row\"><div class=\"large-8 medium-8 columns\"><h5>Here’s your basic grid:</h5><!--Grid Example--><div class=\"row\"><div class=\"large-12 columns\"><div class=\"callout panel\"><p><strong>This is a twelve column section in a row.&nbsp;</strong>Each of these includes a div.panel element so you can see where the columns are - it's not required at all for the grid.</p></div></div></div><div class=\"row\"><div class=\"large-6 medium-6 columns\"><div class=\"callout panel\"><p>Six columns</p></div></div><div class=\"large-6 medium-6 columns\"><div class=\"callout panel\"><p>Six columns</p></div></div></div><div class=\"row\"><div class=\"large-4 medium-4 small-4 columns\"><div class=\"callout panel\"><p>Four columns</p></div></div><div class=\"large-4 medium-4 small-4 columns\"><div class=\"callout panel\"><p>Four columns</p></div></div><div class=\"large-4 medium-4 small-4 columns\"><div class=\"callout panel\"><p>Four columns</p></div></div></div><hr /><h5>We bet you’ll need a form somewhere:</h5><form><div class=\"row\"><div class=\"large-12 columns\"><label>Input Label</label><input placeholder=\"large-12.columns\" type=\"text\" /></div></div><div class=\"row\"><div class=\"large-4 medium-4 columns\"><label>Input Label</label><input placeholder=\"large-4.columns\" type=\"text\" /></div><div class=\"large-4 medium-4 columns\"><label>Input Label</label><input placeholder=\"large-4.columns\" type=\"text\" /></div><div class=\"large-4 medium-4 columns\"><div class=\"row collapse\"><label>Input Label</label><div class=\"small-9 columns\"><input placeholder=\"small-9.columns\" type=\"text\" /></div><div class=\"small-3 columns\"><span class=\"postfix\">.com</span></div></div></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Select Box</label><select><option value=\"husker\">Husker</option><option value=\"starbuck\">Starbuck</option><option value=\"hotdog\">Hot Dog</option><option value=\"apollo\">Apollo</option></select></div></div><div class=\"row\"><div class=\"large-6 medium-6 columns\"><label>Choose Your Favorite</label><input name=\"pokemon\" type=\"radio\" value=\"Red\" id=\"pokemonRed\" /><label for=\"pokemonRed\">Radio 1</label><input name=\"pokemon\" type=\"radio\" value=\"Blue\" id=\"pokemonBlue\" /><label for=\"pokemonBlue\">Radio 2</label></div><div class=\"large-6 medium-6 columns\"><label>Check these out</label><input type=\"checkbox\" id=\"checkbox1\" /><label for=\"checkbox1\">Checkbox 1</label><input type=\"checkbox\" id=\"checkbox2\" /><label for=\"checkbox2\">Checkbox 2</label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Textarea Label</label><textarea placeholder=\"small-12.columns\"></textarea></div></div></form></div><div class=\"large-4 medium-4 columns\"><h5>Try one of these buttons:</h5><p><a href=\"#\" class=\"small button\">Simple Button</a><br /><a href=\"#\" class=\"small radius button\">Radius Button</a><br /><a href=\"#\" class=\"small round button\">Round Button</a><br /><a href=\"#\" class=\"medium success button\">Success Btn</a><br /><a href=\"#\" class=\"medium alert button\">Alert Btn</a><br /><a href=\"#\" class=\"medium secondary button\">Secondary Btn</a></p><div class=\"panel\"><h5>So many components, girl!</h5><p>A whole kitchen sink of goodies comes with Foundation. Checkout the docs to see them all, along with details on making them your own.</p><a href=\"http://foundation.zurb.com/docs/\" class=\"small button\">Go to Foundation Docs</a></div></div></div>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}


window.HAML['other'] = function(locals){
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
   var _$output="<div class=\"row\"><div class=\"large-12 columns\"><h1>" + 
"<a href=\"" + html_escape('index') + "\">" + 
"Home</a></h1></div></div><div class=\"row\"><div class=\"large-12 columns\"><p>" + 
"<a href=\"" + html_escape('page1') + "\">" + 
"Page 1</a></p><p>" + 
"<a href=\"" + html_escape('page2') + "\">" + 
"Page 2</a></p><p>" + 
"<a href=\"" + html_escape('page3') + "\">" + 
"Page 3</a></p></div></div><h1>" + 
locals.title + 
"</h1><p>" + 
locals.content + 
"</p>";
 return _$output;  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}