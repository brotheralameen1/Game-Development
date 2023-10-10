gdjs.PicScene14Code = {};
gdjs.PicScene14Code.GDPC14Objects1= [];
gdjs.PicScene14Code.GDPC14Objects2= [];

gdjs.PicScene14Code.conditionTrue_0 = {val:false};
gdjs.PicScene14Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene14Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene14Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene14Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene14Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "PC14");
}if (gdjs.PicScene14Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC14");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene14Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene14Code.GDPC14Objects1.length = 0;
gdjs.PicScene14Code.GDPC14Objects2.length = 0;

gdjs.PicScene14Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene14Code'] = gdjs.PicScene14Code;
