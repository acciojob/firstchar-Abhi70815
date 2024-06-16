function firstChar(text) {
  // your code here
	const trim_txt=text.trim();
	return trim_txt.length>0 ? trim_txt[0]:'';
}
// Do not change the code below


const text = prompt("Enter text:");
alert(firstChar(text));
