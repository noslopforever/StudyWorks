class Operation {
    name: string;
    type: string;
    func: any;
}

class PluginDesc {
    name: string;
    description: string;
    operations: Operation[];
}

var _Plugins: PluginDesc[];
function listPlugins() {
    for (var i = 0; i < _Plugins.length; i++) {
        if (_Plugins[i]) {
            listPlugin(_Plugins[i]);
        }
    }
}
function listPlugin(Plugin: PluginDesc) {
    alert(Plugin.name + " : " + Plugin.description);
    for (var i = 0; i < Plugin.operations.length; i++) {
        if (Plugin.operations[i]) {
            listOperation(Plugin.operations[i]);
        }
    }
}
function listOperation(Op: Operation) {
    alert(Op.name + " : " + Op.type);
}

function onScriptLoad(){
    alert("script load successfully");
}
function onScriptLoadError(){
    alert("script load error");
}
function addPluginURL(url: string) {
    var myScript = document.createElement("script");
    myScript.type = "text/javascript";
    myScript.src = url;
    myScript.onerror = onScriptLoadError;
    myScript.onload = onScriptLoad;
    document.body.appendChild(myScript);
}


