gdjs.PicScene4Code = {};
gdjs.PicScene4Code.GDPicScene4Objects1= [];
gdjs.PicScene4Code.GDPicScene4Objects2= [];

gdjs.PicScene4Code.conditionTrue_0 = {val:false};
gdjs.PicScene4Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene4Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene4Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene4Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "PC4");
}if (gdjs.PicScene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC4");
}}

}


};

gdjs.PicScene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene4Code.GDPicScene4Objects1.length = 0;
gdjs.PicScene4Code.GDPicScene4Objects2.length = 0;

gdjs.PicScene4Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene4Code'] = gdjs.PicScene4Code;
