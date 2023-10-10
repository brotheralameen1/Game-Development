gdjs.PicScene10Code = {};
gdjs.PicScene10Code.GDPC10Objects1= [];
gdjs.PicScene10Code.GDPC10Objects2= [];
gdjs.PicScene10Code.GDInstructionObjects1= [];
gdjs.PicScene10Code.GDInstructionObjects2= [];

gdjs.PicScene10Code.conditionTrue_0 = {val:false};
gdjs.PicScene10Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene10Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene10Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene10Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PicScene10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Misc/FJ's Prayer Backwards.mp3", false, 100, 1);
}}

}


{


gdjs.PicScene10Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 65, "PC10");
}if (gdjs.PicScene10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC10");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene10Code.GDPC10Objects1.length = 0;
gdjs.PicScene10Code.GDPC10Objects2.length = 0;
gdjs.PicScene10Code.GDInstructionObjects1.length = 0;
gdjs.PicScene10Code.GDInstructionObjects2.length = 0;

gdjs.PicScene10Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene10Code'] = gdjs.PicScene10Code;
