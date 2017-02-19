$import("./PluginOp.js");

function pluginSetup() {
    var pluginVar = document["_Plugins"];
    if (pluginVar){
        var pluginDesc = {};
        pluginDesc.name = "TestPluginSite";
        pluginDesc.description = "Test Plugin Site Description";
        pluginDesc.operations = [];
        {
            var opSquare = {};
            opSquare.name = "square";
            opSquare.type = "param1";
            opSquare.func = square;
            pluginDesc.operations.add(opSquare);
        }

        pluginVar.add(pluginDesc);
    }
}