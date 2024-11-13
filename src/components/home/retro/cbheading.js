function punkyPolygons() {
	const collection = new Set();

	for (let i = 0; i <= 25; i++) collection.add(`${rando()}% ${rando()}%`);

	return Array.from(collection.values()).join(",");
}

function rando() {
	return (Math.random() * 100).toFixed();
}

var style = document.createElement("style");
style.type = "text/css";

var keyFrames = `\
    @keyframes glitch {\
      13% {\
        clip-path: polygon(DYNAMIC_VALUE_1);\
      }\
      
      53% {\
        clip-path: polygon(DYNAMIC_VALUE_2);\
      }\
  
      37% {\
        clip-path: polygon(DYNAMIC_VALUE_3);\
      }\
   
      62% {\
        clip-path: polygon(DYNAMIC_VALUE_4);\
      }\
      
      78% {\
        clip-path: polygon(DYNAMIC_VALUE_5);\
      }
      
      14%, 39%, 56%, 64%, 79%{\
        clip-path: none;\
      }\
    }`;

function generateNewPolygons() {
	let kf = keyFrames;

	for (let i = 1; i <= 5; i++) {
		kf = kf.replace("DYNAMIC_VALUE_" + i, punkyPolygons());
	}

	style.innerHTML = kf;

	document.getElementsByTagName("head")[0].appendChild(style);
}

document.querySelector("button").onclick = generateNewPolygons;
