gdjs.PicScene13Code = {};
gdjs.PicScene13Code.GDPC13Objects1= [];
gdjs.PicScene13Code.GDPC13Objects2= [];

gdjs.PicScene13Code.conditionTrue_0 = {val:false};
gdjs.PicScene13Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene13Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene13Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene13Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene13Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "PC13");
}if (gdjs.PicScene13Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC13");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene13Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene13Code.GDPC13Objects1.length = 0;
gdjs.PicScene13Code.GDPC13Objects2.length = 0;

gdjs.PicScene13Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene13Code'] = gdjs.PicScene13Code;
