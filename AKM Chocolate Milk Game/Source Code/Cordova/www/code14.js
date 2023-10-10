gdjs.PicScene7Code = {};
gdjs.PicScene7Code.GDPC07Objects1= [];
gdjs.PicScene7Code.GDPC07Objects2= [];

gdjs.PicScene7Code.conditionTrue_0 = {val:false};
gdjs.PicScene7Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene7Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene7Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene7Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "PC070");
}if (gdjs.PicScene7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC070");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene7Code.GDPC07Objects1.length = 0;
gdjs.PicScene7Code.GDPC07Objects2.length = 0;

gdjs.PicScene7Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene7Code'] = gdjs.PicScene7Code;
