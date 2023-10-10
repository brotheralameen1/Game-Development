gdjs.PicScene1Code = {};
gdjs.PicScene1Code.GDPicScene1Objects1= [];
gdjs.PicScene1Code.GDPicScene1Objects2= [];

gdjs.PicScene1Code.conditionTrue_0 = {val:false};
gdjs.PicScene1Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene1Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene1Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene1Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "p1");
}if (gdjs.PicScene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "p1");
}}

}


};

gdjs.PicScene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene1Code.GDPicScene1Objects1.length = 0;
gdjs.PicScene1Code.GDPicScene1Objects2.length = 0;

gdjs.PicScene1Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene1Code'] = gdjs.PicScene1Code;
