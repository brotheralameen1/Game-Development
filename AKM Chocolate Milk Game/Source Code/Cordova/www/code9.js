gdjs.PicScene2Code = {};
gdjs.PicScene2Code.GDPicScene2Objects1= [];
gdjs.PicScene2Code.GDPicScene2Objects2= [];

gdjs.PicScene2Code.conditionTrue_0 = {val:false};
gdjs.PicScene2Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene2Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene2Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "p2");
}if (gdjs.PicScene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p2");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene2Code.GDPicScene2Objects1.length = 0;
gdjs.PicScene2Code.GDPicScene2Objects2.length = 0;

gdjs.PicScene2Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene2Code'] = gdjs.PicScene2Code;
