﻿while (app.documents.length > 0) {
	app.documents[0].close();
}
var _dok = app.documents.add();
_dok = app.documents.add();
_tf = _dok.pages[0].textFrames.add();
_tf.geometricBounds = [10,10,100,100];
_tf.contents = "Hier bin ich!";